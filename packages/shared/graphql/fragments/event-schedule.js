const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteEventSchduleFragment on Content {
  id
  type
  name
  teaser(input: { useFallback: false, maxLength: null })
  siteContext {
    path
  }
  primaryImage {
    id
    src
    alt
    isLogo
  }
  ... on ContentEvent {
    startDate
    endDate
  }
}

`;
