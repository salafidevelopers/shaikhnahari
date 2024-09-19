import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";
import { type SanityClient } from "next-sanity";

// Query to get all featured content
export const featuredContentQuery = groq`*[_type == "featuredContent"] | order(_createdAt desc)`;
export const featuredContentWithItem = groq`*[_type == "featuredContent"]{
  _createdAt,
  _id,
  _rev,
  _type,
  _updatedAt,
  title,
  items[]->{
    _id,
    _type,
    title,
    slug,
    img
  }
} | order(_createdAt desc)`;

// Fetch function for all featured content
export async function getFeaturedContent(
  client: SanityClient,
): Promise<FeaturedContent[]> {
  return await client.fetch(featuredContentQuery);
}

// Query to get featured content by title
export const featuredContentByTitleQuery = groq`*[_type == "featuredContent" && title == $title][0]`;

// Fetch function for a single featured content by title
export async function getFeaturedContentByTitle(
  client: SanityClient,
  title: string,
): Promise<FeaturedContent> {
  return await client.fetch(featuredContentByTitleQuery, { title });
}

// Featured Content interface
export interface FeaturedContent {
  _type: "featuredContent";
  _id: string;
  _createdAt: string;
  title: string;
  items: Array<{ _type: "reference"; _ref: string; _key: string }>;
}

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`;

export async function getPosts(client: SanityClient): Promise<Post[]> {
  return await client.fetch(postsQuery);
}

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`;

export async function getPost(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return await client.fetch(postBySlugQuery, {
    slug,
  });
}

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

export interface Post {
  _type: "post";
  _id: string;
  _createdAt: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  mainImage?: ImageAsset;
  body: PortableTextBlock[];
}

// Query to get all books
export const booksQuery = groq`*[_type == "books" && defined(name)] | order(_createdAt desc)`;

// Fetch function for all books
export async function getBooks(client: SanityClient): Promise<Book[]> {
  return await client.fetch(booksQuery);
}

// Query to get book by slug
export const bookBySlugQuery = groq`*[_type == "books" && slug.current == $slug][0]`;

// Fetch function for a single book by slug
export async function getBook(
  client: SanityClient,
  slug: string,
): Promise<Book> {
  return await client.fetch(bookBySlugQuery, { slug });
}

// Query to get all book slugs
export const bookSlugsQuery = groq`*[_type == "books" && defined(slug.current)][].slug.current`;

// Book interface
export interface Book {
  _type: "books";
  _id: string;
  _createdAt: string;
  title: string;
  img?: ImageAsset;
  url: string;
  description?: string;
  categories?: Array<{ _type: "reference"; _ref: string }>;
  publishedAt?: string;
}

// Query to get all audios
export const audiosQuery = groq`*[_type == "audios" && defined(slug.current)] | order(_createdAt desc)`;

// Fetch function for all audios
export async function getAudios(client: SanityClient): Promise<Audio[]> {
  return await client.fetch(audiosQuery);
}

// Query to get audio by slug
export const audioBySlugQuery = groq`*[_type == "audios" && slug.current == $slug][0]`;

// Fetch function for a single audio by slug
export async function getAudio(
  client: SanityClient,
  slug: string,
): Promise<Audio> {
  return await client.fetch(audioBySlugQuery, { slug });
}

// Query to get all audio slugs
export const audioSlugsQuery = groq`*[_type == "audios" && defined(slug.current)][].slug.current`;

// Audio interface
export interface Audio {
  _type: "audios";
  _id: string;
  _createdAt: string;
  title: string;
  slug: Slug;
  link: string;
  duration: string;
  date: string;
  description?: string;
  categories?: Array<{ _type: "reference"; _ref: string }>;
  publishedAt?: string;
}
