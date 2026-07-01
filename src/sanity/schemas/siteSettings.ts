export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "tagline",
      title: "Footer Tagline",
      type: "string",
      initialValue: "100% Satisfaction + 100% Vrithy",
    },
    {
      name: "heroBackground",
      title: "Hero Background Image",
      type: "image",
      description: "Upload or change the hero background image",
    },
  ],
};
