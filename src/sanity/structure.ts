import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // Featured Section
      S.listItem()
        .title("Featured Content")
        .child(S.documentTypeList("featuredContent").title("Featured")),

      // Categories Section
      S.documentTypeListItem("category").title("Categories"),

      S.divider(), // Divider to separate sections

      // Blog Section
      S.listItem()
        .title("Blog")
        .child(
          S.list()
            .title("Blog Content")
            .items([
              S.documentTypeListItem("post").title("Posts"),
              S.documentTypeListItem("author").title("Authors"),
            ]),
        ),

      S.divider(), // Divider to separate remaining items

      // Other document types, if any
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["featuredContent", "category", "post", "author"].includes(
            item.getId()!,
          ),
      ),
    ]);
