import {
  css,
  html,
  reactjs,
  git,
  tailwind,
  javascript,
  typescript,
  nodejs,
  porto1,
  porto2,
  porto3,
  porto4,
  porto5,
  porto6,
  porto7,
  whatsapp,
  github,
  api,
  python,
} from "../src/assets";
const whatsappNumber = "+62895606107868";
const whatsappMessage = encodeURIComponent(
  "Hello, satya I'm interested in your services!"
);

export const skills = [
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "GIT",
    icon: git,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "api",
    icon: api,
  },
];
export const logo = [
  {
    name: "whatsapp",
    icon: whatsapp,
    link: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
  },
  {
    name: "github",
    icon: github,
    link: `https://github.com/amandasatya/`,
  },
];

export const projects = [
  {
    name: "Health Hub",
    description:
      "Web-based food platform, an user can post a food recipes (upload photo) , follow,like, comments the other users profile / recipes",
    tags: [
      {
        name: "nextjs",
        icon: css,
        color: "green-text-gradient",
      },
      {
        name: "python",
        icon: python,
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        icon: tailwind,
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        icon: tailwind,
        color: "green-text-gradient",
      },
    ],
    image: porto7,
    source_code_link: "https://github.com/",
    loom: "",
  },
  {
    name: "Rempah Nafarin",
    description:
      "Web-based platform that allows users to search herbal recipes (mockup only)",
    tags: [
      {
        name: "html",
        icon: html,
        color: "blue-text-gradient",
      },
      {
        name: "css",
        icon: css,
        color: "green-text-gradient",
      },
    ],
    image: porto1,
    source_code_link: "https://github.com/",
    loom: "",
  },
  {
    name: "Rempah Nafarin Wordpress",
    description:
      "Web-based platform that allows users to search herbal recipes",
    tags: [
      {
        name: "wordpress",
        icon: html,
        color: "blue-text-gradient",
      },
    ],
    image: porto3,
    source_code_link: "https://github.com/",
    loom: "",
  },
  {
    name: "Chess Club",
    description:
      "Web-based platform that allows users to find chess strategy (mockup only)",
    tags: [
      {
        name: "react",
        icon: reactjs,
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        icon: tailwind,
        color: "blue-text-gradient",
      },
    ],
    image: porto2,
    source_code_link: "https://github.com/",
    loom: "",
  },
  {
    name: "Bank App",
    description:
      "Web-based platform that allows users to tranfer deposit and withdraw",
    tags: [
      {
        name: "react",
        icon: reactjs,
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        icon: tailwind,
        color: "blue-text-gradient",
      },
      {
        name: "python",
        icon: tailwind,
        color: "blue-text-gradient",
      },
      {
        name: "restApi",
        icon: api,
        color: "blue-text-gradient",
      },
    ],
    image: porto4,
    source_code_link: "https://github.com/",
    loom: "",
  },
  {
    name: "Nafarin the magazine",
    description: "Web-based platform that allows users to read news article ",
    tags: [
      {
        name: "react",
        icon: reactjs,
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        icon: tailwind,
        color: "blue-text-gradient",
      },
      {
        name: "restApi",
        icon: api,
        color: "blue-text-gradient",
      },
    ],
    image: porto5,
    source_code_link: "https://github.com/",
    loom: "",
  },
  {
    name: "Pokemon",
    description:
      "Web-based platform that allows users to search pokemon with details ",
    tags: [
      {
        name: "react",
        icon: reactjs,
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        icon: tailwind,
        color: "blue-text-gradient",
      },
      {
        name: "restApi",
        icon: api,
        color: "blue-text-gradient",
      },
    ],
    image: porto6,
    source_code_link: "https://github.com/",
    loom: "",
  },
];
