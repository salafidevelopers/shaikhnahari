import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { audioType } from "./audioTypes";
import { bookType } from "./booksType";
import { featuredContentType } from "./featuredType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    audioType,
    bookType,
    featuredContentType,
  ],
};
