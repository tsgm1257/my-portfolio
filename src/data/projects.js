export const projects = [
  {
    slug: "hobbyhub",
    name: "HobbyHub",
    released: "May 2025",
    releasedAt: "2025-05-01",
    cover: "https://i.ibb.co/XkShDDQM/home3.png",
    images: [
      "https://i.ibb.co/W4cNBLwf/groups.png",
      "https://i.ibb.co/vCzv9SKN/group-details.png",
    ],
    stack: [
      "React",
      "JavaScript",
      "Express",
      "MongoDB",
      "Firebase",
      "Tailwind",
      "DaisyUI",
    ],
    description:
      "A platform to join or create local hobby-based groups with basic role management and secure routes.",
    live: "https://nimble-pixie-ed13e1.netlify.app",
    githubClient: "https://github.com/tsgm1257/HobbyHub-Frontend",
    challenges: [
      "Protecting routes and handling token expiration cleanly",
      "Designing a simple groups/roles structure",
    ],
    improvements: [
      "Real-time chat and event RSVPs",
      "Offline-ready mobile experience",
    ],
  },
  {
    slug: "foodshare",
    name: "FoodShare",
    released: "June 2025",
    releasedAt: "2025-06-01",
    cover: "https://i.ibb.co/zWNgfcN6/home.png",
    images: [
      "https://i.ibb.co/9Hm2qH9F/foods.png",
      "https://i.ibb.co/Jj2S9m8Z/food-details.png",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
      "DaisyUI",
    ],
    description:
      "Share surplus food safely. Users can list food, request pickups, and track request status.",
    live: "https://food-sharing-app-client-side.netlify.app",
    githubClient: "https://github.com/tsgm1257/Food-Sharing-App-Client-Side",
    challenges: [
      "Modeling request lifecycle cleanly",
      "Keeping UI responsive on slow networks",
    ],
    improvements: [
      "Push notifications for status changes",
      "Geo-based search and filters",
    ],
  },
  {
    slug: "building-manager",
    name: "Building Manager",
    released: "July 2025",
    releasedAt: "2025-07-01",
    cover: "https://i.ibb.co/V0Rq7SCm/home2.png",
    images: [
      "https://i.ibb.co/zTXdf2TY/apartments.png",
      "https://i.ibb.co/9mskGQWy/dashboard.png",
    ],
    stack: ["React", "Firebase", "Tailwind", "DaisyUI", "Express", "MongoDB"],
    description:
      "Manage apartments, announcements, payments, coupons, and member dashboards with auth.",
    live: "https://building-management-913d1.web.app",
    githubClient: "https://github.com/tsgm1257/Building-Management-Client-Side",
    challenges: [
      "Role-based UI without over-complicating routes",
      "Consistent data formatting and validation",
    ],
    improvements: ["Admin analytics dashboards", "Automated invoice emails"],
  },
];
