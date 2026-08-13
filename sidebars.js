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
      items: ['content/intro', 'tech/intro', 'community/intro'],
    },
    {
      type: 'category',
      label: 'Part II: Making It Run',
      collapsed: false,
      items: ['measurement/intro', 'structure/intro'],
    },
    {
      type: 'category',
      label: 'Appendix: Authoring the Handbook',
      collapsed: true,
      items: ['overview/authoring', 'overview/components'],
    },
    'final/intro',
  ],
};
