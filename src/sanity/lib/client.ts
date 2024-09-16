import { createClient } from 'next-sanity'

 const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
 const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
 const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-09-01'; // Default to a specific version if not set


export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
