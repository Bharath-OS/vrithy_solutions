export default {
  name: "offer",
  title: "Offer",
  type: "document",
  fields: [
    {
      name: "discount",
      title: "Discount (e.g. 20% OFF)",
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
      name: "until",
      title: "Valid Until",
      type: "date",
    },
    {
      name: "cta",
      title: "WhatsApp CTA Text",
      type: "string",
      description: "Text appended to the WhatsApp message when user clicks claim",
    },
    {
      name: "active",
      title: "Show on Site",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
    },
  ],
  preview: {
    select: { title: "title", subtitle: "discount" },
  },
};
