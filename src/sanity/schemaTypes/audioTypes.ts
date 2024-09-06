import { defineArrayMember, defineField, defineType } from "sanity";

import { PlayIcon } from "@sanity/icons";

export const audioType = defineType({
  name: "audios",
  type: "document",
  title: "Audios",
  icon: PlayIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "link",
      type: "url",
      title: "Audio Link",
    }),
    defineField({
      name: "duration",
      type: "string",
      title: "Duration",
    }),
    defineField({
      name: "date",
      type: "date",
      title: "Date of Recording",
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
