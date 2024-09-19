import { defineArrayMember, defineField, defineType } from "sanity";
import { BookIcon } from "@sanity/icons";

export const bookType = defineType({
  name: "books",
  type: "document",
  title: "Books",
  icon: BookIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Book Name",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "img",
      type: "image",
      title: "Cover Image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "url",
      type: "url",
      title: "Book URL",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
  ],
});
