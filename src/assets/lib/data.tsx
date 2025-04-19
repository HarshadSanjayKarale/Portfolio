import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";

import apiicon from "../../assets/icons/apiicon.svg";

import jwticon from "../../assets/icons/jwticon.svg";
import profilepicture from "../img/profile2.jpg";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import electronicon from "../../assets/icons/electronicon.svg";
import flaskicon from "../../assets/icons/flaskicon.svg";
import fluttericon from "../../assets/icons/fluttericon.svg";
import mysqlicon from "../../assets/icons/mysqlicon.svg";
import firebaseicon from "../../assets/icons/firebaseicon.svg";
import djangoicon from "../../assets/icons/djangoicon.svg";
import sqlicon from "../../assets/icons/sqlicon.svg";
import sanityicon from "../../assets/icons/sanityicon.svg";
import pythonicon from "../../assets/icons/pythonicon.svg";
import cplusplusicon from "../../assets/icons/cplusplusicon.svg";
import facultyappraisal from "../../assets/icons/facultyappraisal.png";
import Prashnaash from "../../assets/icons/Prashnaansh.png";
import ProResolve from "../../assets/icons/ProResolve.png";
import Wikitok from "../../assets/icons/Wikitok.png";

import { GoHome, GoPerson, GoMail, GoStack, GoProject, GoTrophy } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";
import { Icon } from '@iconify/react';

export const headerIntroData = {
  title: {
    en: "Hi, I'm Harshad Karale",
  },
  subtitle: "Fullstack Developer ",
  description: {
    en: "I'm a Computer Engineering student at Pimpri Chinchwad College of Engineering, Pune with a passion for full-stack development and hackathons. My technical journey includes developing institutional-level applications and participating in numerous hackathons, frequently reaching finalist positions and winning awards.",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Wiki-Tok",
    description_EN:
      "Built a TikTok-style Wikipedia app featuring infinite scrolling, auto-scroll, text-to-speech, trending articles, and offline downloads. Led backend development, designing APIs and a hybrid recommendation system combining percentile-based scoring (60%), BERT similarity (20%), and random selection (20%) for personalized content.",
    technologies: [
      { name: "Flutter", icon: fluttericon },
      { name: "Flask", icon: flaskicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Python", icon: pythonicon },
      { name: "REST API", icon: apiicon },
      { name: "Firebase", icon: firebaseicon },
      { name: "Figma", icon: figmaicon },
    ],
    image: Wikitok, // Replace with actual image later
    deploymenturl: "https://github.com/HarshadSanjayKarale/",  // Update with actual URL when available
    githuburl: "https://github.com/HarshadSanjayKarale/",  // Update with actual GitHub repo
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#5E8B7E",
    },
  },

  {
    title: "Faculty Appraisal System",
    description_EN:
      "Developed an automated faculty self-assessment system with role-based access for Faculty, HODs, Deans, Directors, and Verifiers. Designed a two-phase evaluation process: Faculty self-assessment & verification (Part I) and real-time scoring by academic leadership (Part II).",
    technologies: [
      { name: "React JS", icon: reacticon },
      { name: "Flask", icon: flaskicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "HTML", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "Python", icon: pythonicon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Figma", icon: figmaicon },
    ],
    image: facultyappraisal, // Replace with actual image later
    deploymenturl: "https://github.com/HarshadSanjayKarale/",  // Update with actual URL when available
    githuburl: "https://github.com/HarshadSanjayKarale/",  // Update with actual GitHub repo
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Prashaansh - Automated Question Paper Generator",
    description_EN:
      "Developed a desktop application for PCCOE, Pune, to automate question paper generation using a structured question bank and unique algorithm. Worked with stakeholders to identify issues and improve the process through automation. Awarded Best Research Paper at Baby Conference organized by ACM, PCCOE.",
    technologies: [
      { name: "Electron JS", icon: electronicon },
      { name: "React JS", icon: reacticon },
      { name: "Flask", icon: flaskicon },
      { name: "JavaScript", icon: javascripticon }, 
      { name: "Python", icon: pythonicon },
      { name: "HTML", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "Figma", icon: figmaicon },
    ],
    image: Prashnaash, // Replace with actual image later
    deploymenturl: "https://github.com/HarshadSanjayKarale/",  // Update with actual URL when available
    githuburl: "https://github.com/HarshadSanjayKarale/",  // Update with actual GitHub repo
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "ProResolve - Bug Tracking System",
    description_EN:
      "Developed an innovative platform-wide bug tracking solution which uncovered critical patterns affecting system performance, leading to expedited resolution of key functionalities and enhancing software reliability after each update. Led development discussions on efficient algorithm models using Flask, driving long-term system enhancements.",
    technologies: [
      { name: "React JS", icon: reacticon },
      { name: "Flask", icon: flaskicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Python", icon: pythonicon },
      { name: "HTML", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "REST API", icon: apiicon },
      { name: "Figma", icon: figmaicon },
    ],
    image: ProResolve, // Replace with actual image later
    deploymenturl: "https://github.com/HarshadSanjayKarale/",  // Update with actual URL when available
    githuburl: "https://github.com/HarshadSanjayKarale/",  // Update with actual GitHub repo
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  
] as const;

export const achievementsData = [
  {
    title: "15+ Hackathon Finalists",
    description: "Consistently reached finalist positions in multiple hackathons, demonstrating problem-solving skills and technical expertise.",
    date: "January 2024-Current",
    type: "trophy",
    image: "/assets/images/hackathon-finalists.jpg", // Add your image path here
    skills: ["Problem Solving", "Technical Implementation", "Team Collaboration", "Rapid Prototyping"]
  },
  {
    title: "Best Research Paper for Prashnaansh",
    description: "Awarded Best Research Paper at Baby Conference Organized by ACM, PCCOE for the Prashnaansh automated question paper generator.",
    date: "21st March 2025",
    type: "certificate",
    image: "/assets/images/research-paper.jpg", // Add your image path here
    skills: ["Research Methodology", "NLP", "AI/ML", "Academic Writing"]
  },
  {
    title: "1st at Hactopia Hackathon",
    description: "Won first place at the Hactopia Hackathon organized by ACM PCCOE, showcasing innovative problem-solving and technical implementation.",
    date: "22nd October 2024",
    type: "medal",
    image: "/assets/images/hactopia.jpg", // Add your image path here
    skills: ["Full Stack Development", "Innovation", "UI/UX Design", "Project Management"]
  },
  {
    title: "1st Runner at BlueBit National Level Hackathon",
    description: "Secured second place at the BlueBit National Level Hackathon organized by MSLC, PCCOE, competing against teams nationwide.",
    date: "29th March 2025",
    type: "medal",
    image: "/assets/images/bluebit-hackathon.jpg", // Add your image path here
    skills: ["Web Development", "Database Design", "API Integration", "Presentation"]
  },
  {
    title: "4th at MindSpark Hackathon",
    description: "Placed 4th at the prestigious MindSpark Hackathon organized by COEP, Pune, competing against top engineering college teams.",
    date: "18-19 October 2024",
    type: "award",
    image: "/assets/images/mindspark.jpg", // Add your image path here
    skills: ["Algorithm Design", "System Architecture", "DevOps", "Problem Solving"]
  }
] as const;

export const liveTickerData = {
  content: {
    de: "Weitere Projekte auf Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Frontend",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "ElectronJS",
        hash: "#ElectronJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg",
        color: "#47848F",
      },
      {
        title: "Flutter",
        hash: "#Flutter",
        icon: fluttericon,
        color: "#02569B",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
  {
    skillsTitle: "Backend",
    skills: [
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Flask",
        hash: "#Flask",
        icon: flaskicon,
        color: "#000000",
      },
      {
        title: "Django",
        hash: "#Django",
        icon: djangoicon,
        color: "#092E20",
      },
    ],
  },
  {
    skillsTitle: "Database",
    skills: [
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "MySQL",
        hash: "#MySQL",
        icon: mysqlicon,
        color: "#4479A1",
      },
      {
        title: "SQL",
        hash: "#SQL",
        icon: sqlicon,
        color: "#00758F",
      },
      {
        title: "Firebase",
        hash: "#Firebase",
        icon: firebaseicon,
        color: "#FFCA28",
      },
      {
        title: "Sanity",
        hash: "#Sanity",
        icon: sanityicon,
        color: "#F03E2F",
      },
    ],
  },
] as const;

export const languagesData = [
  {
    skillsTitle: "Languages",
    skills: [
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "Python",
        hash: "#Python",
        icon: pythonicon,
        color: "#3776AB",
      },
      {
        title: "C/C++",
        hash: "#C/C++",
        icon: cplusplusicon,
        color: "#00599C",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;


export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Projekte", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "Erfolge", en: "Achievements", hash: "#achievements", icon: GoTrophy },
  { de: "Über mich", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "Kontakt", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { de: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { de: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:harshadkarale0@gmail.com",
  text: "harshadkarale0@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/harshad-karale-21aa1b257/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/HarshadSanjayKarale",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:harshadkarale0@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    en: `"Our greatest glory is not in never falling, but in rising every time we fall."`,
    author: "Nelson Mandela",
  },
  {
    
    en: `"Each bug fixed, every feature added, and every late night spent debugging — they’re not just part of the process, they’re proof of passion, persistence, and progress."`,
  },
] as const;

export const aboutMeData = {
  title_EN: "About me",
  description: "Ein paar Codeschnippsel über mich",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "Die Schaltkreise meines Herzens",
      description:
        "Wenn ich nicht in der digitalen Welt unterwegs bin, durchstreife ich die faszinierende Welt der Technik und Hardware. Schaltkreise und Lötstellen sind für mich wie Puzzleteile eines aufregenden Abenteuers.",
      icon: hardwareicon,
    },
    {
      title: "Auf der Überholspur des Lebens",
      description:
        "Neben dem Coden befinde ich mich gerne auf der Überholspur – im wahrsten Sinne des Wortes. Autos sind meine Leidenschaft, und ich genieße es, mit PS-starken Maschinen auf unbekannten Straßen unterwegs zu sein.",
      icon: caricon,
    },
    {
      title: "Entdeckungsfreude als Lebensmotto",
      description:
        "Meine Reise als Webentwickler ist nur ein Teil meines Lebenswegs. Ich lebe nach dem Motto, dass das Abenteuer erst beginnt, wenn man das Bekannte hinter sich lässt. Das Entdecken neuer Orte ist meine Form der kreativen Inspiration.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "From the Pitch to the Code",
      description:
        "Cricket taught me that success isn't about never failing—it's about how you bounce back. Just like losing a match pushes a team to train harder, my setbacks in coding or competitions fueled my growth. Whether it's debugging an app or preparing for a hackathon, I carry the mindset of a cricketer: adapt, improve, and come back stronger.",
    },
    {
      title: "Engineering Impact, Not Just Code",
      description:
        "Every line of code I write aims to solve real problems. From streamlining faculty evaluations with role-based access to automating question paper generation at scale, my journey has always been about building tools that matter. I believe technology should empower institutions and individuals alike.",
    },
    {
      title: "Fuelled by Curiosity, Powered by Passion",
      description:
        "Hackathons, research papers, and innovative side-projects—these aren't just entries on my resume, but reflections of a deeper curiosity. Whether it's experimenting with recommendation systems in Wiki-Tok or designing user-centric dashboards in ProResolve, I thrive where innovation meets purpose.",
    },
  ],
};

export const contactData = {
  title: {
    en: "Contact",
  },
  description: {
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        en: "Your Name",
      },
      type: "text",
      validation: {
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        en: "Your Subject",
      },
      type: "text",
      validation: {
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      en: "I agree that Harshad Karale may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
