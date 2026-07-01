import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemas } from "./src/sanity/schemas";

export default defineConfig({
  projectId: "ubwijqia",
  dataset: "production",
  title: "Vrithy Solutions CMS",
  plugins: [structureTool({ structure: singletons })],
  schema: { types: schemas },
});

function singletons(S: any) {
  const singleTypes = ["hero", "difference", "contact", "siteSettings"];
  return S.list()
    .title("Content")
    .items([
      ...singleTypes.map((type) =>
        S.listItem()
          .title(
            type === "hero"
              ? "Hero Section"
              : type === "difference"
              ? "Vrithy Difference"
              : type === "contact"
              ? "Contact Info"
              : "Site Settings"
          )
          .child(S.document().schemaType(type).documentId(type))
      ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item: any) => !singleTypes.includes(item.getId())
      ),
    ]);
}
