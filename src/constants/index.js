import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  aws,
  redhat,
  kubernetes,
  grafana,
  jenkins,
  prometheus,
  kraken,
  sahbeni,
  edelivery,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: reactjs,
  },
  {
    title: "DevOps Engineer",
    icon: docker,
  },
  {
    title: "Cloud Engineer",
    icon: aws,
  },
  {
    title: "Backend Developer",
    icon: nodejs,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "prometheus",
    icon: prometheus,
  },
  {
    name: "Grafana",
    icon: grafana,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "k8s",
    icon: kubernetes,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "redhat",
    icon: redhat,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Systems Administrator",
    company_name: "E-Skills",
    icon: redhat,
    iconBg: "#383E56",
    date: "January 2021 - Present",
    points: [
      "Managing cloud infrastructure and on-premises servers, ensuring efficiency and reliability.",
      "Creating and maintaining CI/CD pipelines for automated deployments, reducing deployment errors.",
      "Conducting system performance evaluations and implementing improvements to enhance reliability and scalability.",
      "Strengthening security protocols and implementing access controls to protect company data and systems.",
    ],
  },
  {
    title: "DevOps Engineer",
    company_name: "CIS",
    icon: kubernetes,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Automating deployment pipelines with CI/CD tools, reducing production time and manual processes.",
      "Diagnosing and resolving complex system issues, ensuring smooth operation across different environments.",
      "Leading initiatives to optimize deployment processes, implementing best practices for security and system monitoring.",
    ],
  },
  {
    title: "Linux Instructor",
    company_name: "MentorNations",
    icon: redhat,
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Conducting comprehensive Linux training sessions, covering system administration, shell scripting, and troubleshooting.",
      "Designing practical projects to strengthen participants' operational understanding of Linux systems.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "E-Skills",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "2022 - 2023",
    points: [
      "Developing an educational platform based on microservices using Angular and Spring Boot.",
      "Deploying the platform on Kubernetes clusters provisioned through OpenStack infrastructure.",
      "Optimizing backend services to ensure scalability and high availability in a cloud environment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Saif proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a developer who truly cares about their clients' success like Saif does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Saif optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Kraken Clone",
    description:
      "A web application that simulates the Kraken cryptocurrency exchange platform, built with React and Node.js. Provides users with a familiar trading interface and experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: kraken,
    website_link: "https://kraken.eskills.agency/",
  },
  {
    name: "Sahbeni",
    description:
      "A recruitment platform specifically designed for Tunisians seeking opportunities in Germany. Connects job seekers with German employers and provides resources for relocation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sahbeni,
    website_link: "https://www.sahbanirecruiting.com/",
  },
  {
    name: "E-Delivery",
    description:
      "A comprehensive delivery solution for Tunisia, enabling businesses to manage their deliveries efficiently. Features real-time tracking, route optimization, and delivery management.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: edelivery,
    website_link: "https://edelivery.eskills.agency/",
  },
];

export { services, technologies, experiences, testimonials, projects };
