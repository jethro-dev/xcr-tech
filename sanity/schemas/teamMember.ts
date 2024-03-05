import { defineField, defineType } from "sanity";

export default defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "jobTitle",
      title: "Job Title",
      type: "string",
    }),
    defineField({
      name: "priority",
      title: "Show priority (1 has the most priority)",
      type: "number",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
  ],
  orderings: [
    {
      title: "Priority (High to Low)",
      name: "priorityAsc",
      by: [{ field: "priority", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
