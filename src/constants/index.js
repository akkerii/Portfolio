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
  cls,
  eskills,
  g2a,
  jannen,
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
      "Validates foundational knowledge of AWS Cloud, including core services, security, pricing, and best practices. Demonstrates an understanding of cloud concepts and AWS global infrastructure.",
    name: "AWS Certified Cloud Practitioner (CCP)",
    image: aws,
    badge_url:
      "https://www.credly.com/badges/a4e42628-4a55-4968-ac80-8eafa4fee7cf/linked_in_profile",
  },
  {
    testimonial:
      "Validates expertise in managing, deploying, and troubleshooting Kubernetes clusters. Covers cluster configuration, networking, security, and workload management for cloud-native applications.",
    name: "Certified Kubernetes Administrator (CKA)",
    image: kubernetes,
    badge_url:
      "https://www.credly.com/badges/aee15411-98c9-496b-996e-75bd2c7112eb/public_url",
  },
  {
    testimonial:
      "Validates essential Linux system administration skills, including user management, networking, security, and automation. Demonstrates proficiency in managing Red Hat Enterprise Linux (RHEL) environments.",
    name: "Red Hat Certified System Administrator (RHCSA)",
    image: redhat,
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

  {
    name: "Eskills",
    description:
      "Empowering businesses with a robust WordPress solution, E-SKILLS offers seamless website management, custom development, performance optimization, and secure hosting. Designed for scalability and efficiency, our platform ensures a dynamic online presence tailored to your needs.",
    tags: [
      {
        name: "WordPress",
        color: "pink-text-gradient",
      },
      {
        name: "phpmyadmin",
        color: "blue-text-gradient",
      },
    ],
    image: eskills,
    website_link: "https://www.eskills.agency/",
  },
  {
    name: "Janen",
    description:
      "A seamless car rental solution in Tunisia, offering businesses and individuals an effortless way to book vehicles online. Built with WordPress, Janen features an intuitive booking system, secure payments, and fleet management for a hassle-free rental experience.",
    tags: [
      {
        name: "WordPress",
        color: "pink-text-gradient",
      },
      {
        name: "phpmyadmin",
        color: "blue-text-gradient",
      },
    ],
    image: jannen,
    website_link: "https://janenecar.com/",
  },
  {
    name: "cls",
    description:
      "A professional IT solutions platform built with WordPress, designed to enhance digital transformation and business connectivity. CLS serves as a vital link between African and European markets, offering custom web development, IT consulting, and software solutions. This project integrates innovative technologies to create a dynamic and scalable online presence.",
    tags: [
      {
        name: "WordPress",
        color: "pink-text-gradient",
      },
      {
        name: "phpmyadmin",
        color: "blue-text-gradient",
      },
    ],
    image: cls,
    website_link: "https://clssolution.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
