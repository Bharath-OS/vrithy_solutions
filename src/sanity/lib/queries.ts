export const heroQuery = `*[_type == "hero"][0] { headline, subtitle, "imageUrl": image.asset->url }`;

export const differenceQuery = `*[_type == "difference"][0] { headline, body }`;

export const servicesQuery = `*[_type == "service"] | order(order asc) { title, description }`;

export const whyChooseQuery = `*[_type == "whyChoose"] | order(order asc) { title, description }`;

export const processStepsQuery = `*[_type == "processStep"] | order(order asc) { step, title, description }`;

export const testimonialsQuery = `*[_type == "testimonial" && active == true] { quote, name, location }`;

export const offersQuery = `*[_type == "offer" && active == true] | order(order asc) { discount, title, description, until, cta }`;

export const contactQuery = `*[_type == "contact"][0] { address, phone, phoneLink, instagram, instagramUrl, whatsappNumber, whatsappMessage }`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0] { tagline }`;

export const allDataQuery = `{
  "hero": *[_type == "hero"][0] { headline, subtitle, "imageUrl": image.asset->url },
  "difference": *[_type == "difference"][0] { headline, body },
  "services": *[_type == "service"] | order(order asc) { title, description },
  "whyChoose": *[_type == "whyChoose"] | order(order asc) { title, description },
  "processSteps": *[_type == "processStep"] | order(order asc) { step, title, description },
  "testimonials": *[_type == "testimonial" && active == true] { quote, name, location },
  "offers": *[_type == "offer" && active == true] | order(order asc) { discount, title, description, until, cta },
  "contact": *[_type == "contact"][0] { address, phone, phoneLink, instagram, instagramUrl, whatsappNumber, whatsappMessage },
  "siteSettings": *[_type == "siteSettings"][0] { tagline }
}`;
