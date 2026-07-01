import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ubwijqia",
  dataset: "production",
  apiVersion: "2026-07-01",
  useCdn: true,
});
