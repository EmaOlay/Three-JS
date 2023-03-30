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
    utn,
    boca_logo,
    tenaris_logo,
    tesla,
    shopify,
    carrent,
    animelist,
    jobit,
    tripguide,
    threejs,
    starbucks,
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
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Engineering Student",
      icon: creator,
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Teacher's Aide",
      company_name: "Universidad Tecnológica Nacional",
      icon: utn,
      iconBg: "#fff",
      date: "Summer 2016",
      points: [
        "Resolution of queries and problems expressed by students.",
        "Development of classes and subject agenda.",
        "Monitoring deliveries and student tasks.",
      ],
    },
    {
      title: "Head of practical work",
      company_name: "Universidad Tecnológica Nacional",
      icon: utn,
      iconBg: "#fff",
      date: "2017- December 2022",
      points: [
        "Follow-up of students tasks.",
        "Preparation of grade reports.",
        "Explanation of queries and general agenda.",
        "Develop classes corresponding to the curriculum of the subject.",
      ],
    },
    {
      title: "Internship in Technical Support",
      company_name: "Club Boca Juniors",
      icon: boca_logo,
      iconBg: "#383E56",
      date: "April 2019-October 2020",
      points: [
        "Hardware and Software Maintenance.",
        "Creation and control of security policies and user registration (Active Directory).",
        "Periodic stock reviews.",
        "Attendding to users needs.",
      ],
    },
    {
      title: "Trainee HC, Strategic Projects IT",
      company_name: "Tenaris",
      icon: tenaris_logo,
      iconBg: "#E6DEDD",
      date: "February 2021 - To date",
      points: [
        "SQL data structures analysis.",
        "Interpretation of customer needs to create new functions. (Scrum methodology).",
        "Database migration.",
        "Implementation of stored procedures and functions in PostgreSQL and T-SQL.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Anime List",
      description:
        "Web-based platform that allows users to search and manage their mangas, providing users a convenient solution for their reading needs.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "CSS3",
          color: "pink-text-gradient",
        },
      ],
      image: animelist,
      source_code_link: "https://github.com/EmaOlay/Fullstack",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };