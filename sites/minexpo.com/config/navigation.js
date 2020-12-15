const topics = [
  { href: '/directory/auxiliary-equipment-and-supplies', label: 'Auxiliary' },
  { href: '/directory/components-and-replacement-equipment', label: 'Components' },
  { href: '/directory/electrical-equipment-and-supplies', label: 'Electrical' },
  { href: '/directory/engineering-construction-consulting-and-mining-related-services', label: 'Engineering/Consulting/Consulting' },
  { href: 'material-handling-equipment', label: 'Material Handling' },
  // { href: '/directory/mining-equipment', label: 'Minning' },
  { href: '/directory/other-related-equipment-products-and-services', label: 'Other' },
  { href: '/directory/power-and-power-transmission-equipment', label: 'Power' },
  { href: '/directory/processingpreparation-equipment', label: 'Processing/Preperation' },
];

const resources = [
  { href: 'https://ratecards.ascendeventmedia.com/minexpo2020/', label: 'Advertise', target: '_blank' },
  { href: 'https://ratecards.ascendeventmedia.com/minexpo2020/', label: 'About', target: '_blank' },
  { href: 'https://ratecards.ascendeventmedia.com/minexpo2020/#contact', label: 'Contact', target: '_blank' },
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
    items: [
      // { href: 'https://www.pmmimediagroup.com/pw/packaging-world', label: 'Advertise', target: '_blank' },
      // { href: '/page/pw-about-us', label: 'About' },
      // { href: '/page/pw-contact-us', label: 'Contact' },
      // { href: 'https://www.pmmimediagroup.com/privacy', label: 'Privacy', target: '_blank' },
      // { href: '/page/pw-terms-use', label: 'Terms of Use' },
      // { href: 'https://www.pmmimediagroup.com/advertising-terms-conditions', label: 'Advertising Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        // { href: '/directory', label: 'Full Directory' },
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
