const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteContentCalloutFragment on Content {
  id
  type
  shortName
  teaser(input: { useFallback: false, maxLength: null })
  siteContext {
    path
  }
  published
  primaryImage {
    id
    src
    alt
    isLogo
  }
}

`;
