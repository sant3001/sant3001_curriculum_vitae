import type { Actions, NodePluginArgs } from 'gatsby';
import { NodeType, User } from './types';

export const createNodeFromData = async (
  item: User,
  nodeType: NodeType,
  actions: Actions,
  helpers: Pick<NodePluginArgs, 'createNodeId' | 'createContentDigest'>,
) => {
  const nodeMetadata = {
    id: helpers.createNodeId(`${nodeType}-${item.id}`),
    parent: null,
    children: [],
    internal: {
      type: nodeType,
      content: JSON.stringify(item),
      contentDigest: helpers.createContentDigest(item),
    },
  };

  const node = { ...item, ...nodeMetadata };
  await actions.createNode(node);
  return node;
};

export default {};
