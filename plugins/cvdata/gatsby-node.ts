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

  await Promise.all(
    users.map((user) =>
      createNodeFromData(user, NodeType.USER_NODE_TYPE, actions, { createContentDigest, createNodeId }),
    ),
  );
};
