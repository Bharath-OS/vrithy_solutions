export default {
  name: "processStep",
  title: "Process Step",
  type: "document",
  fields: [
    {
      name: "step",
      title: "Step Number",
      type: "string",
      validation: (r: any) => r.required(),
    },
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
    select: { title: "title", subtitle: "step" },
  },
};
