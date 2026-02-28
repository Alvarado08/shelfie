import { query, mutation } from "./_generated/server";
import { ConvexError, v } from "convex/values";

export const getBooks = query({
  handler: async (ctx) => {
    const books = await ctx.db.query("books").order("desc").collect();
    return books;
  },
});

export const addBook = mutation({
  args: { title: v.string(), author: v.string(), publishedYear: v.number() },
  handler: async (ctx, args) => {
    const bookId = await ctx.db.insert("books", {
      title: args.title,
      author: args.author,
      publishedYear: args.publishedYear,
      isRead: false,
    });
    return bookId;
  },
});

export const toggleBook = mutation({
  args: { id: v.id("books") },
  handler: async (ctx, args) => {
    const book = await ctx.db.get(args.id);
    if (!book) return new ConvexError("Book not found");
    await ctx.db.patch(args.id, { isRead: !book.isRead });
  },
});

export const deleteBook = mutation({
  args: { id: v.id("books") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const updateBook = mutation({
  args: {
    id: v.id("books"),
    title: v.string(),
    author: v.string(),
    publishedYear: v.number(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      title: args.title,
      author: args.author,
      publishedYear: args.publishedYear,
    });
  },
});

export const clearAllBooks = mutation({
  handler: async (ctx) => {
    const books = await ctx.db.query("books").collect();
    for (const book of books) {
      await ctx.db.delete(book._id);
    }
    return { deletedCount: books.length };
  },
});
