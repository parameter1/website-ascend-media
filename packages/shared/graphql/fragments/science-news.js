const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteScienceNewsFragment on ContentPromotion {
  id
  type
  name
  teaser(input: { useFallback: false, maxLength: null })
  body
  linkUrl
}

`;
