import { defineField, defineType } from "sanity";
import { BookIcon } from "@sanity/icons";

export const bookType = defineType({
  name: "books",
  type: "document",
  title: "Books",
  icon: BookIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Book Name",
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
  ],
});
