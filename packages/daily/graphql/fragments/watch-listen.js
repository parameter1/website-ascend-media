const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteContentWatchListenFragment on Content {
  id
  type
  name
  teaser(input: { useFallback: false, maxLength: null })
  siteContext {
    path
  }
  ... on ContentPromotion {
    linkText
    linkUrl
  }
}

`;
