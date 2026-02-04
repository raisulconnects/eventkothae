import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { Ticket } from "lucide-react";

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

  events: defineTable({
    title: v.string(),
    description: v.string(),
    slug: v.string(),

    // For The Organizers
    organizerId: v.id("users"),
    oranizerName: v.string(),

    // Eita Event Details er jonne
    category: v.string(),
    tags: v.array(v.string()),

    // Time ar date er jonne
    startDate: v.number(),
    endDate: v.number(),
    timezone: v.number(),

    // For Location
    locationType: v.union(v.literal("physical"), v.literal("online")),
    venue: v.optional(v.string()),
    address: v.optional(v.string()),
    city: v.string(),
    state: v.optional(v.string()),

    // Capacity & Ticketing
    capacity: v.number(),
    ticketType: v.union(v.literal("free"), v.literal("paid")),
    ticketPrice: v.optional(v.number()),
    registrationCount: v.number(),

    // Infos for Customizatiopn
    coverImage: v.optional(v.string()),
    themeColor: v.optional(v.string()),

    // Time Stamps to know when it was craeted
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_organizer", ["organizerId"])
    .index("by_category", ["category"])
    .index("by_start_date", ["startDate"])
    .index("by_slug", ["slug"])
    .index("search_title", ["title"]),

  registrations: defineTable({
    eventId: v.id("events"),
    userId: v.id("users"),

    // Attendee Info - jara ashbe
    attendeeName: v.string(),
    attendeeEmail: v.string(),

    // For QR Code
    qrCode: v.string(),

    // Check in info
    checkedIn: v.boolean(),
    checkedInAt: v.optional(v.number()),

    // status
    status: v.union(v.literal("confirmed"), v.literal("Cancelled!")),

    registeredAt: v.number(),
  })
    .index("by_event", ["eventId"])
    .index("by_user", ["userId"])
    .index("by_event_user", ["eventId", "userId"])
    .index("by_qr_code", ["qrCode"]),
});
