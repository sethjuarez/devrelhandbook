function visitChildren(node, visitor) {
  if (!node || !Array.isArray(node.children)) {
    return;
  }

  node.children = node.children.map((child) => visitor(child));
  node.children.forEach((child) => visitChildren(child, visitor));
}

function elucimFenceNode(source, meta) {
  const attributes = [
    {
      type: 'mdxJsxAttribute',
      name: 'source',
      value: source,
    },
  ];

  if (meta) {
    attributes.push({
      type: 'mdxJsxAttribute',
      name: 'meta',
      value: meta,
    });
  }

  return {
    type: 'mdxJsxFlowElement',
    name: 'ElucimFence',
    attributes,
    children: [],
  };
}

module.exports = function remarkElucimFences() {
  return (tree) => {
    visitChildren(tree, (node) => {
      if (node.type === 'code' && node.lang === 'elucim') {
        return elucimFenceNode(node.value || '', node.meta || '');
      }

      return node;
    });
  };
};
