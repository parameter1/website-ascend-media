const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteSectionListSectionFragment on WebsiteSection {
  id
  name
  fullName
  canonicalPath
}

`;
