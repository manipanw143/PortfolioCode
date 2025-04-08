import { Project } from "@/types";

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce businesses with real-time analytics, inventory management, and order processing.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kZSxkYXNoYm9hcmR8fHx8fHwxNjg0NzkyNTYw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
    featured: true,
    categories: ["react", "fullstack"],
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    details: {
      overview: "A comprehensive admin dashboard for e-commerce businesses with real-time analytics, inventory management, and order processing.",
      features: [
        "Real-time sales analytics with customizable date ranges",
        "Inventory management with low stock alerts",
        "Order processing workflow with status updates",
        "Customer database with purchase history",
        "Multi-user access with role-based permissions",
        "Responsive design for desktop and mobile devices"
      ],
      challenges: "One of the biggest challenges was implementing real-time data synchronization across multiple clients while maintaining performance.",
      solution: "I solved this by using Socket.io for instant updates combined with a caching layer to reduce database load during peak usage times."
    },
    links: {
      demo: "https://example.com/project1",
      github: "https://github.com/username/project1"
    }
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A responsive task management application with drag-and-drop interfaces, collaborative features, and dark mode support.",
    image: "https://images.unsplash.com/photo-1609921141835-710b7fa6e438?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8YXBwLG1vYmlsZXx8fHx8fDE2ODQ3OTI1OTE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
    categories: ["react"],
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    details: {
      overview: "A responsive task management application with drag-and-drop interfaces, collaborative features, and dark mode support.",
      features: [
        "Drag-and-drop task organization",
        "Team collaboration with real-time updates",
        "Dark mode and theme customization",
        "Task prioritization and tagging",
        "Due date reminders and notifications",
        "Mobile-responsive design"
      ],
      challenges: "Implementing a smooth drag-and-drop interface that works across devices while maintaining state synchronization was challenging.",
      solution: "I used React DnD library combined with a custom state management approach to ensure fluid interactions and reliable synchronization."
    },
    links: {
      demo: "https://example.com/project2",
      github: "https://github.com/username/project2"
    }
  },
  {
    id: 3,
    title: "API Platform",
    description: "A scalable API platform with authentication, rate limiting, analytics, and developer-friendly documentation.",
    image: "https://images.unsplash.com/photo-1578674473215-9e07ee2e577d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8YXBpLHdlYnx8fHx8fDE2ODQ3OTI2MjA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
    categories: ["node", "fullstack"],
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    details: {
      overview: "A scalable API platform with authentication, rate limiting, analytics, and developer-friendly documentation.",
      features: [
        "Authentication and authorization system",
        "Rate limiting and usage quotas",
        "Interactive API documentation",
        "Usage analytics dashboard",
        "Webhook integrations",
        "Serverless deployment architecture"
      ],
      challenges: "Designing a system that could scale to handle high traffic while maintaining security and detailed analytics was the main challenge.",
      solution: "I implemented a microservices architecture using serverless functions and efficient caching strategies to achieve the required performance."
    },
    links: {
      demo: "https://example.com/project3",
      github: "https://github.com/username/project3"
    }
  },
  {
    id: 4,
    title: "Real-time Chat App",
    description: "A fully-featured messaging platform with real-time updates, file sharing, emojis, and end-to-end encryption.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hhdCxtZXNzYWdpbmd8fHx8fHwxNjg0NzkyNjUw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
    categories: ["react", "fullstack"],
    tags: ["React", "Socket.io", "Node.js", "Framer Motion"],
    details: {
      overview: "A fully-featured messaging platform with real-time updates, file sharing, emojis, and end-to-end encryption.",
      features: [
        "Real-time messaging with typing indicators",
        "End-to-end encryption for privacy",
        "File and media sharing",
        "Group chats and direct messages",
        "Emoji reactions and message threading",
        "Read receipts and message history"
      ],
      challenges: "Implementing secure end-to-end encryption while maintaining a smooth user experience was particularly challenging.",
      solution: "I used a combination of WebSocket technology and client-side encryption libraries to create a secure but user-friendly communication system."
    },
    links: {
      demo: "https://example.com/project4",
      github: "https://github.com/username/project4"
    }
  },
  {
    id: 5,
    title: "Analytics Platform",
    description: "A data visualization platform with customizable dashboards, interactive charts, and real-time metrics tracking.",
    image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hhcnRzLGRhdGF8fHx8fHwxNjg0NzkyNjg2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
    categories: ["react", "node"],
    tags: ["React", "Node.js", "D3.js", "GraphQL"],
    details: {
      overview: "A data visualization platform with customizable dashboards, interactive charts, and real-time metrics tracking.",
      features: [
        "Interactive data visualization dashboards",
        "Custom chart creation tools",
        "Real-time data updates",
        "Export capabilities (PDF, CSV, PNG)",
        "Data integration from multiple sources",
        "Scheduled reports and alerts"
      ],
      challenges: "Handling large datasets while maintaining fast rendering and interactive visualizations was a significant technical challenge.",
      solution: "I implemented data aggregation techniques and optimized rendering using virtualization and worker threads to improve performance."
    },
    links: {
      demo: "https://example.com/project5",
      github: "https://github.com/username/project5"
    }
  },
  {
    id: 6,
    title: "Travel Planner App",
    description: "An all-in-one travel planning application with itinerary builder, expense tracking, and location-based recommendations.",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8dHJhdmVsLGphcGFufHx8fHx8MTY4NDc5MjcxMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
    categories: ["fullstack"],
    tags: ["React Native", "Express", "PostgreSQL", "Google Maps API"],
    details: {
      overview: "An all-in-one travel planning application with itinerary builder, expense tracking, and location-based recommendations.",
      features: [
        "Interactive itinerary builder with drag-and-drop reordering",
        "Location-based recommendations using AI",
        "Expense tracking and budget management",
        "Offline map access for travel without data",
        "Trip sharing and collaboration tools",
        "Flight and accommodation booking integration"
      ],
      challenges: "Creating a system that works offline while still providing rich features like maps and recommendations was challenging.",
      solution: "I developed a sophisticated caching system that pre-loads essential data and synchronizes when connectivity is restored."
    },
    links: {
      demo: "https://example.com/project6",
      github: "https://github.com/username/project6"
    }
  }
];

export default projects;
