export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Vansh was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Vansh’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Vansh was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Travora - AI Travel Platform",
    desc: "Travora is an intelligent travel companion platform that redefines how people explore the world. Powered by AI, it delivers personalized destination recommendations, interactive 3D globe exploration, and seamless trip management—all in one intuitive interface.",
    subdesc:
      "Built with React, Tailwind CSS, Appwrite, Stripe, and Google Generative AI, Travora combines innovation with scalability. Designed for modern travelers, it ensures smooth performance, secure bookings, and a visually immersive experience across all devices.",
    href: "https://travora-agency.vercel.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.svg",
    spotlight: "/assets/spotlight1.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
      { id: 3, name: "Appwrite", path: "/assets/appwrite.svg" },
      { id: 4, name: "Stripe", path: "/assets/stripe.png" },
    ],
  },
  {
    title: "Nike E-commerce — AI-Enhanced 3D Sneaker Store",
    desc: "Nike E-commerce is an advanced AI-powered online store built for Nike sneakers — offering dynamic product creation, 3D visual previews, and seamless shopping experience.",
    subdesc:
      "Developed using Next.js 15, Tailwind CSS 4, TypeScript, Framer Motion, Zustand, Drizzle ORM with Neon (PostgreSQL), plus Stripe payments, Google Generative AI for product generation, and React Three Fiber for 3D visuals.",
    href: "https://nike-ecommerce-five.vercel.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.svg",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/nextjs.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
      { id: 3, name: "TypeScript", path: "/assets/typescript.png" },
      { id: 4, name: "Zustand", path: "/assets/zustand.svg" },
      { id: 5, name: "Drizzle ORM", path: "/assets/drizzleorm.png" },
      { id: 6, name: "Stripe", path: "/assets/stripe.png" },
      { id: 7, name: "React Three Fiber", path: "/assets/three.svg" },
    ],
  },
  {
    title: "Matty AI-Design Tool – Browser-Based Graphic Editor",
    desc: "Matty AI-Design Tool is a powerful web studio that lets users design graphics and visual content directly in the browser — no desktop software required.",
    subdesc:
      "Built on a MERN stack with React, Fabric.js, Tailwind CSS, Node.js, Express, MongoDB and JWT auth, it offers an interactive canvas editor, layer management, export to PNG, and full CRUD dashboard for designs.",
    href: "https://matty-design-tool-brown.vercel.app/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    spotlight: "/assets/spotlight3.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },

      { id: 3, name: "Node.js", path: "/assets/nodejs.svg" },
      { id: 4, name: "Express.js", path: "/assets/express.svg" },
      { id: 5, name: "MongoDB", path: "/assets/mongodb.svg" },
      { id: 6, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
    ],
  },
  {
    title: "MoneyMate – Expense Tracker",
    desc: "MoneyMate empowers users to monitor income and expenses in real time, offering budgeting insight, data export, and intuitive dashboards.",
    subdesc:
      "Built with the MERN stack (React & Vite for the frontend; Node.js, Express, MongoDB & Mongoose on the backend), the app features secure JWT authentication, file upload with Multer, responsive design via Tailwind CSS, and supports downloading financial data as Excel files.",
    href: "https://money-mate-1-9vqe.onrender.com/",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "Vite", path: "/assets/vite.svg" },
      { id: 3, name: "Node.js", path: "/assets/nodejs.svg" },
      { id: 4, name: "Express.js", path: "/assets/express.svg" },
      { id: 5, name: "MongoDB", path: "/assets/mongodb.svg" },
      { id: 6, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",

    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",

    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",

    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",

    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export { experiences };
