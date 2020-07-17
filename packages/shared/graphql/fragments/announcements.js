const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteAnnouncementsFragment on ContentPromotion {
  id
  type
  name
  teaser(input: { useFallback: false, maxLength: null })
  body
  linkUrl
}

`;
