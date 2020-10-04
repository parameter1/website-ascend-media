const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteContentFeaturedFragment on Content {
  id
  type
  shortName
  teaser(input: { useFallback: false, maxLength: null })
  siteContext {
    path
  }
  primarySection {
    id
    name
    alias
    fullName
    canonicalPath
  }
  primaryImage {
    id
    src
    alt
    isLogo
  }
}

`;
