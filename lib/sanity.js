import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'byuvuopa',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token:
    'skSG8TlRun0aIvo053154dMYgPBxmWRtJsXgF3LQOIydjAWSxUVA69qgFYFij8XpGrbDTVeCKcyDFTm0ZWdh6gpcBeu3pS7Fqod0JKzz0S6e2AIgnyGh336dAwW0Gbsfxe2z2EvUCKDCdCIsMFCpK5a8KoVVHufkYhCOXFWFOIj2S9J2EwZS', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})