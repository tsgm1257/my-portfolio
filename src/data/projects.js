export const projects = [
  {
    slug: "hobbyhub",
    name: "HobbyHub",
    cover: "/images/hobbyhub-cover.jpg",
    images: [
      "/images/hobbyhub-1.jpg",
      "/images/hobbyhub-2.jpg"
    ],
    stack: ["React", "TypeScript", "Express", "MongoDB", "Firebase Auth", "Tailwind"],
    description:
      "A platform to join or create local hobby-based groups with basic role management and secure routes.",
    live: "https://example.com/hobbyhub",
    githubClient: "https://github.com/you/hobbyhub-client",
    challenges: [
      "Protecting routes and handling token expiration cleanly",
      "Designing a simple groups/roles structure"
    ],
    improvements: [
      "Real-time chat and event RSVPs",
      "Offline-ready mobile experience"
    ]
  },
  {
    slug: "foodshare",
    name: "FoodShare",
    cover: "/images/foodshare-cover.jpg",
    images: [
      "/images/foodshare-1.jpg",
      "/images/foodshare-2.jpg"
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
    description:
      "Share surplus food safely. Users can list food, request pickups, and track request status.",
    live: "https://example.com/foodshare",
    githubClient: "https://github.com/you/foodshare-client",
    challenges: [
      "Modeling request lifecycle cleanly",
      "Keeping UI responsive on slow networks"
    ],
    improvements: [
      "Push notifications for status changes",
      "Geo-based search and filters"
    ]
  },
  {
    slug: "building-manager",
    name: "Building Manager",
    cover: "/images/building-cover.jpg",
    images: [
      "/images/building-1.jpg",
      "/images/building-2.jpg"
    ],
    stack: ["React", "TypeScript", "Firebase", "Tailwind", "DaisyUI"],
    description:
      "Manage apartments, announcements, payments, coupons, and member dashboards with auth.",
    live: "https://example.com/building-manager",
    githubClient: "https://github.com/you/building-manager-client",
    challenges: [
      "Role-based UI without over-complicating routes",
      "Consistent data formatting and validation"
    ],
    improvements: [
      "Admin analytics dashboards",
      "Automated invoice emails"
    ]
  }
];
