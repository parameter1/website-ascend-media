const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteContentFeaturedExhibitorsFullFragment on Content {
  id
  type
  name
  teaser(input: { useFallback: false, maxLength: null })
  primaryImage {
    id
    src
    alt
    isLogo
  }
  siteContext {
    path
  }
}

`;
