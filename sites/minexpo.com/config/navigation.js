const primary = [
  { href: '/directory', label: 'Exhibitor Directory' },
  { href: '/directory?type=News', label: 'Exhibitor News' },
  // eslint-disable-next-line no-script-url
  { href: 'javascript:void(0)', label: 'Exhibit Hall Map' },
  // eslint-disable-next-line no-script-url
  { href: 'javascript:void(0)', label: 'Export Directory' },
  { href: 'https://www.MINExpo.com', label: 'MINExpo.com' },
];

const resources = [];

module.exports = {
  primary: {
    items: [...primary],
  },
  secondary: {
    items: [...resources],
  },
  tertiary: {
    items: [],
  },
  footer: {
    items: [],
  },
  menu: [
    {
      label: 'Topics',
      items: [...primary],
    },
    {
      label: 'Exhibitors By Category',
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
