import dev from "../env";
import type { QueryParams, QueryOptions } from "next-sanity";
import { SanityClient } from "next-sanity";
import { client } from "./client";

export { default as groq } from "groq";

export function fetchSanity<T = any>(
  query: string,
  {
    params = {},
    ...next
  }: {
    params?: QueryParams;
  } & QueryOptions["next"] = {},
) {
  const preview = dev;

  return client.fetch<T>(
    query,
    params,
    preview
      ? {
          stega: true,
          perspective: "previewDrafts",
          useCdn: false,
          token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
          next: {
            revalidate: 0,
            ...next,
          },
        }
      : {
          perspective: "published",
          useCdn: true,
          next: {
            revalidate: 3600, // every hour
            ...next,
          },
        },
  );
}

/**
 * Fetch data from Sanity.
 *
 * @param client - The Sanity client instance.
 * @param query - The GROQ query string.
 * @param params - Optional parameters for the query.
 * @param options - Optional configuration for the fetch.
 * @returns A promise that resolves to the fetched data.
 */
export async function fetchSanityData<T = any>(
  client: SanityClient,
  query: string,
  params: QueryParams = {},
  options: QueryOptions["next"] = {},
): Promise<T> {
  const preview = process.env.NODE_ENV === "development";

  return client.fetch<T>(query, params, {
    perspective: preview ? "previewDrafts" : "published",
    useCdn: !preview,
    token: preview ? process.env.NEXT_PUBLIC_SANITY_TOKEN : undefined,
    next: {
      revalidate: preview ? 0 : 3600, // Set revalidation based on preview mode
      ...options,
    },
  });
}
