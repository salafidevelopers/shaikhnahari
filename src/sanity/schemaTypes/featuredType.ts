import { defineField, defineType } from "sanity";

export const featuredContentType = defineType({
  name: "featuredContent",
  title: "Featured Items",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description:
        "Title of the featured section (e.g. Featured Books, Audios, Blogs)",
    }),
    defineField({
      name: "items",
      title: "Featured Items",
      type: "array",
      of: [
        {
          type: "reference",
          name: "featuredBook",
          title: "Featured Book",
          to: [{ type: "books" }], // Reference to book schema
        },
        {
          type: "reference",
          name: "featuredAudio",
          title: "Featured Audio",
          to: [{ type: "audios" }], // Reference to audio schema
        },
        {
          type: "reference",
          name: "featuredBlog",
          title: "Featured Blog",
          to: [{ type: "post" }], // Reference to blog schema
        },
      ],
      description: "Select items to feature from Books, Audios, or Blogs",
    }),
  ],
});
