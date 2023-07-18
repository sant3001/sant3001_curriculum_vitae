import type { GatsbyNode } from 'gatsby';
import { createNodeFromData } from './createNodeFromData';
import { users } from './data';
import { NodeType } from './types';

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }): Promise<void> => {
  const { createTypes } = actions;
  createTypes(`
    type ${NodeType.USER_NODE_TYPE} implements Node {
      id: ID!
      name: String!
      title: String!
      about: String!
      img: File @link(by: "relativePath")
      imgAlt: String!
      addressLine1: String!
      addressLine2: String!
      phoneNumber: String!
      email: String!
      skillsSet: [${NodeType.SKILL_SET_TYPE}!]!
      experience: [${NodeType.EXPERIENCE_NODE_TYPE}!]!
      education: [${NodeType.EDUCATION_NODE_TYPE}!]!
    }
    type ${NodeType.SKILL_SET_TYPE} {
      id: ID!
      name: String!
      skills: [${NodeType.SKILL_NODE_TYPE}!]!
    }
    type ${NodeType.SKILL_NODE_TYPE} {
      id: ID!
      name: String!
      value: Int!
    }
    type ${NodeType.EXPERIENCE_NODE_TYPE} {
      id: ID!
      company: ${NodeType.COMPANY_NODE_TYPE}!
      location: ${NodeType.LOCATION_NODE_TYPE}
      role: String!
      duration: ${NodeType.DURATION_NODE_TYPE}!
      description: String!
    }
    type ${NodeType.EDUCATION_NODE_TYPE} {
      id: ID!
      college: String!
      location: ${NodeType.LOCATION_NODE_TYPE}!
      duration: ${NodeType.DURATION_NODE_TYPE}!
      degree: String!
    }
    type ${NodeType.COMPANY_NODE_TYPE} {
      name: String!
      website: String
    }
    type ${NodeType.DURATION_NODE_TYPE} {
      start: Date! @dateformat(formatString: "DD-MMM-YYYY")
      end: Date @dateformat(formatString: "DD-MMM-YYYY")
    }
    type ${NodeType.LOCATION_NODE_TYPE} {
      city: String
      state: String
      country: String
    }
  `);
  return Promise.resolve();
};

export const sourceNodes: GatsbyNode['sourceNodes'] = async (props) => {
  const { actions, createContentDigest, createNodeId, getNodesByType } = props;
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { touchNode } = actions;

  // touch nodes to ensure they aren't garbage collected
  getNodesByType(NodeType.USER_NODE_TYPE).forEach((node) => touchNode({ nodeId: node.id, ...node }));
  getNodesByType(NodeType.SKILL_NODE_TYPE).forEach((node) => touchNode({ nodeId: node.id, ...node }));

  await Promise.all(
    users.map((user) =>
      createNodeFromData(user, NodeType.USER_NODE_TYPE, actions, { createContentDigest, createNodeId }),
    ),
  );
};
