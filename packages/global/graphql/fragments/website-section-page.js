const gql = require('graphql-tag');

module.exports = gql`
fragment WebsiteSectionPageFragment on WebsiteSection {
  id
  name
  description
  hierarchy {
    id
    alias
    name
    logo {
      id
      src(input: { options: { h: 100 } })
    }
  }
  logo {
    id
    src(input: { options: { h: 100 } })
  }
}
`;
