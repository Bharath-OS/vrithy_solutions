export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "quote",
      title: "Quote",
      type: "text",
      validation: (r: any) => r.required(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (r: any) => r.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "active",
      title: "Show on Site",
      type: "boolean",
      initialValue: true,
    },
  ],
  preview: {
    select: { title: "name", subtitle: "location" },
  },
};
