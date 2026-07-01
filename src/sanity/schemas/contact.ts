export default {
  name: "contact",
  title: "Contact Info",
  type: "document",
  fields: [
    {
      name: "address",
      title: "Address",
      type: "string",
      initialValue: "21/203, Eenthum Kandi, Mathara, Kozhikode 673014",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
      initialValue: "+91 94958 04501",
    },
    {
      name: "phoneLink",
      title: "Phone Link (digits only)",
      type: "string",
      description: "e.g. +919495804501",
      initialValue: "+919495804501",
    },
    {
      name: "instagram",
      title: "Instagram Handle",
      type: "string",
      initialValue: "@vrithy_clt",
    },
    {
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
      initialValue: "https://www.instagram.com/vrithy_clt/",
    },
    {
      name: "whatsappNumber",
      title: "WhatsApp Number (digits only)",
      type: "string",
      description: "e.g. 919495804501",
      initialValue: "919495804501",
    },
    {
      name: "whatsappMessage",
      title: "Default WhatsApp Message",
      type: "string",
      initialValue: "Hi Vrithy! I'd love to refresh my space.",
    },
  ],
};
