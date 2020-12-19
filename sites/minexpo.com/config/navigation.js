const topics = [
  { href: '/directory/auxiliary-equipment-and-supplies', label: 'Auxiliary' },
  { href: '/directory/components-and-replacement-equipment', label: 'Components' },
  { href: '/directory/electrical-equipment-and-supplies', label: 'Electrical' },
  { href: 'material-handling-equipment', label: 'Material Handling' },
  { href: '/directory/power-and-power-transmission-equipment', label: 'Power' },
  { href: '/directory/processingpreparation-equipment', label: 'Processing/Preparation' },
  { href: '/directory', label: 'More...' },
];

const resources = [
  // { href: 'https://ratecards.ascendeventmedia.com/minexpo2020/', label: 'Advertise', target: '_blank' },
  // { href: 'https://ratecards.ascendeventmedia.com/minexpo2020/', label: 'About', target: '_blank' },
  // { href: 'https://ratecards.ascendeventmedia.com/minexpo2020/#contact', label: 'Contact', target: '_blank' },
];

module.exports = {
  primary: {
    items: [...topics],
  },
  secondary: {
    items: [...resources],
  },
  tertiary: {
    items: [
      // { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  footer: {
    items: [],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { href: '/directory/auxiliary-equipment-and-supplies', label: 'Auxiliary Equipment and Supplies' },
        { href: '/directory/components-and-replacement-equipment', label: 'Components & Replacement Equipment' },
        { href: '/directory/electrical-equipment-and-supplies', label: 'Electrical Equipment & Supplies' },
        { href: '/directory/engineering-construction-consulting-and-mining-related-services', label: 'Engineering, Construction' },
        { href: '/directory/material-handling-equipment', label: 'Material Handling Equipment' },
        { href: '/directory/mining-equipment', label: 'Mining Equipment' },
        { href: '/directory/other-related-equipment-products-and-services', label: 'Other Related Equipment, Products, & Services' },
        { href: '/directory/power-and-power-transmission-equipment', label: 'Power & Power Transmission Equipment' },
        { href: '/directory/processingpreparation-equipment', label: 'Processing/Preparation Equipment' },
      ],
    },
    {
      label: 'Resources',
      items: [...resources],
    },
    {
      label: 'User Tools',
      items: [
      ],
    },
  ],
};
