const fs = require('fs');
const createNodeFromData = require('./createNodeFromData');

const USER_NODE_TYPE = `User`;
const SKILL_SET_TYPE = `SkillSet`;
const SKILL_NODE_TYPE = `Skill`;
const EXPERIENCE_NODE_TYPE = `Experience`;
const EDUCATION_NODE_TYPE = `Education`;
const COMPANY_NODE_TYPE = `Company`;
const DURATION_NODE_TYPE = `Duration`;
const LOCATION_NODE_TYPE = `Location`;

const createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type ${USER_NODE_TYPE} implements Node {
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
      skillsSet: [${SKILL_SET_TYPE}!]!
      experience: [${EXPERIENCE_NODE_TYPE}!]!
      education: [${EDUCATION_NODE_TYPE}!]!
    }
    type ${SKILL_SET_TYPE} {
      id: ID!
      name: String!
      skills: [${SKILL_NODE_TYPE}!]!
    }
    type ${SKILL_NODE_TYPE} {
      id: ID!
      name: String!
      value: Int!
    }
    type ${EXPERIENCE_NODE_TYPE} {
      id: ID!
      company: ${COMPANY_NODE_TYPE}!
      location: ${LOCATION_NODE_TYPE}
      role: String!
      duration: ${DURATION_NODE_TYPE}!
      description: String!
    }
    type ${EDUCATION_NODE_TYPE} {
      id: ID!
      college: String!
      location: ${LOCATION_NODE_TYPE}!
      duration: ${DURATION_NODE_TYPE}!
      degree: String!
    }
    type ${COMPANY_NODE_TYPE} {
      name: String!
      website: String
    }
    type ${DURATION_NODE_TYPE} {
      start: Date! @dateformat(formatString: "DD-MMM-YYYY")
      end: Date @dateformat(formatString: "DD-MMM-YYYY")
    }
    type ${LOCATION_NODE_TYPE} {
      city: String
      state: String
      country: String
    }
  `);
};

const sourceNodes = async (props, pluginOptions) => {
  const { actions, cache, createContentDigest, createNodeId, getNodesByType } = props;
  const { touchNode } = actions;

  const helpers = { ...actions, createContentDigest, createNodeId };

  // touch nodes to ensure they aren't garbage collected
  getNodesByType(USER_NODE_TYPE).forEach((node) => touchNode(node));
  getNodesByType(SKILL_NODE_TYPE).forEach((node) => touchNode(node));

  // store the response from the JSON file in the cache
  const cacheKey = 'cv-data-json';
  let sourceData = await cache.get(cacheKey);

  if (!sourceData || !pluginOptions.cacheResponse) {
    const rawdata = fs.readFileSync(`${__dirname}/../../data/cv.json`);
    const data = JSON.parse(rawdata);
    await cache.set(cacheKey, data);
    sourceData = data;
  }

  sourceData.forEach((user) => {
    createNodeFromData(user, USER_NODE_TYPE, helpers);
  });
};

exports.createSchemaCustomization = createSchemaCustomization;
exports.sourceNodes = sourceNodes;
