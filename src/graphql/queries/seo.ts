export const GET_SEO = /* GraphQL */ `
  query Seo {
    seo {
      title
      description
      favicon {
        url
      }
      ogImage {
        url
      }
    }
  }
`
