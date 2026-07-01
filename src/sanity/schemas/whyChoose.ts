export default {
  name: "whyChoose",
  title: "Why Choose Vrithy",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (r: any) => r.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (r: any) => r.required(),
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
    },
  ],
  preview: {
    select: { title: "title", subtitle: "order" },
  },
};
