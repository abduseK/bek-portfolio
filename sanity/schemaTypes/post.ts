import { defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "The Archive",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: 'The name of the piece (e.g., "The Ethics of Silence")',
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Poetry", value: "poetry" },
          { title: "Philosophy", value: "philosophy" },
          { title: "Classical Literature", value: "classical" },
        ],
      },
    },
    {
      name: "mainImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
});
