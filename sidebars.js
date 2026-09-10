module.exports = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Start Here',
      collapsed: false,
      items: [
        'overview/intro',
        'overview/reason',
        'overview/mission',
        'overview/principles',
      ],
    },
    {
      type: 'category',
      label: 'Part I: The Operating Loop',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Create Content',
          collapsed: false,
          items: ['content/intro', 'content/video', 'content/demo-sample-workshop'],
        },
        'tech/intro',
        'community/intro',
      ],
    },
    {
      type: 'category',
      label: 'Part II: Making It Run',
      collapsed: false,
      items: ['measurement/intro', 'structure/intro'],
    },
    'final/intro',
    {
      type: 'category',
      label: 'Contributor Notes',
      collapsed: true,
      items: ['overview/authoring', 'overview/components'],
    },
  ],
};
