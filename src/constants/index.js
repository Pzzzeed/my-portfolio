import {
  techup,
  sahapat,
  KT,
  generation,
  cmc,
  coding,
  database,
  frontend,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  progresql,
  bootstrap,
  chakra,
  express,
  github,
  stripe,
  neatly,
  orange,
  ticket,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Front-End Developer',
    additional: 'React.js, Angular',
    icon: frontend,
  },
  {
    title: 'Back-End Developer',
    additional: 'Node.js, Express',
    icon: coding,
  },
  {
    title: 'Database Management',
    additional: 'MongoDB, ProgreSQL',
    icon: database,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Bootstrap 5',
    icon: bootstrap,
  },
  {
    name: 'Chakra UI',
    icon: chakra,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Express',
    icon: express,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'ProgreSQL',
    icon: progresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'github',
    icon: github,
  },
  {
    name: 'Figma',
    icon: figma,
  },
  {
    name: 'Stripe',
    icon: stripe,
  },
];

const experiences = [
  {
    title: 'Marketing Executive',
    company_name: 'Saha Pathanapibul Public Company Limited, Bangkok',
    icon: sahapat,
    iconBg: '#ffffff',
    date: 'Feb 2017 - Jan 2018',
    points: [
      'Responsible for Pocari Sweat product.',
      'Planed with client about marketing plans.',
      'Coordinated with client and related departments as planned.',
      'Reported monthly performance to Manager.',
      'Reported quarter performance and presented quarter plans to Board of Directors.',
    ],
  },
  {
    title: 'Marketing Officer',
    company_name: 'CMC Asia Pacific Company Limited, Bangkok',
    icon: cmc,
    iconBg: '#FFFFFF',
    date: 'Mar 2019 - Jun 2021',
    points: [
      'Contacted the existing clients to maintain the business partnership/business development.',
      'Coordinated between client and vendor, client and team.',
      'Responsible for document related with Sales.',
      'Warehouse management by Be a leader, supervisor of warehouse staff. Managing and monitoring CMCAP warehouse (Bangpakong) including stock inventory and order management of printing product such as owner manual and leaflet, manpower management, Creating SOP and WI for warehouse controlling, monthly facilities check.',
    ],
  },
  {
    title: 'Accounting & Financial Officer',
    company_name: 'Talad Klong Toey 2551 Company Limited, Bangkok',
    icon: KT,
    iconBg: '#FFFFFF',
    date: 'Sep 2021 - Jan 2023',
    points: [
      'Summarized daily, weekly, monthly income report to management.',
      'Prepared cash flow to the financial and accounting managers.',
      'Prepared financial and accounting documents to accounting company for auditing process.',
      'Summarized special expense to management.',
      "Analyzed financial data/P&L to identify company's financial status.",
    ],
  },
  {
    title: 'Full Stack Software Developer Bootcamp',
    company_name: 'TechUp Thailand',
    icon: techup,
    iconBg: '#FFFFFF',
    date: 'Jan 2023 - May 2023',
    points: [
      'I have acquired the skillset to develop web applications using React.js for the front-end, and Node.js with Express for the back-end. Additionally, I have experience in managing databases using MongoDB and PostgreSQL',
    ],
  },
  {
    title: 'Full Stack Software Developer Bootcamp',
    company_name: 'Generation Thailand',
    icon: generation,
    iconBg: '#FFFFFF',
    date: 'Feb 2023 - May 2023',
    points: [
      'I have acquired the skillset to develop web applications using React.js for the front-end, and Node.js with Express for the back-end. Additionally, I have experience in managing databases using MongoDB and SQL',
    ],
  },
];

const projects = [
  {
    name: 'Activity Tracking',
    description:
      'A web aplication about exercise activity tracking. The website allows users to create, edit, and delete their activity tracking data, and offers additional features.',
    link: 'https://orangecat.vercel.app/',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'node.js',
        color: 'green-text-gradient',
      },
      {
        name: 'mongoDB',
        color: 'pink-text-gradient',
      },
    ],
    image: orange,
    source_code_link: 'https://github.com/JSD4-Orangecat/Activity_Tracking',
  },
  {
    name: 'Hotel Management',
    description:
      'A web aplication about hotel management system. There are customer sides which can booking and hotel agent sides which can managing the room (Not responsive yet).',
    link: 'https://neatly-project.vercel.app/',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'node.js',
        color: 'green-text-gradient',
      },
      {
        name: 'progreSQL',
        color: 'pink-text-gradient',
      },
      {
        name: 'stripe',
        color: 'blue-text-gradient',
      },
    ],
    image: neatly,
    source_code_link: 'https://github.com/jotanatsit/neatly-project',
  },
  {
    name: 'NFT ticket marketplace',
    description:
      'The website is dedicated to an NFT marketplace for event tickets and features event crowdfunding, allowing users to raise funds to create awesome events. It is a project built for participation in the Bangkok Blockathon 2023 event hosted by SCB10X.',
    link: 'https://github.com/Nitchanan-K/Ticket10X_Final',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'web3',
        color: 'pink-text-gradient',
      },
    ],
    image: ticket,
    source_code_link: 'https://github.com/Nitchanan-K/Ticket10X_Final',
  },
];

export { services, technologies, experiences, projects };
