import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // User table
  users: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(), // Ekhane basically clerk er user id ta rakhbo for AUTH
    email: v.string(),
    imageUrl: v.optional(v.string()),

    hasCompletedOnBoarding: v.boolean(),
    location: v.optional(
      v.object({
        city: v.string(),
        state: v.string(),
        country: v.string(),
      }),
    ),

    interests: v.optional(v.array(v.string())),

    // Free User Suscription Track korar jonne track
    freeEventsCreated: v.number(),

    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_token", ["tokenIdentifier"]), // TOKEN BASIS E INDEX KORE FELLAM, making db more efficient for search and stuff
});
