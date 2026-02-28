import { auth } from "./../node_modules/convex/src/cli/auth";
import { defineSchema, defineTable } from "convex/server";

import { v } from "convex/values";

export default defineSchema({
  books: defineTable({
    title: v.string(),
    author: v.string(),
    publishedYear: v.number(),
    isRead: v.boolean(),
  }),
});
