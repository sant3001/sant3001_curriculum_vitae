import { User } from '../types';

export const users: User[] = [
  {
    id: 'santiago-bendavid',
    name: 'Santiago Bendavid',
    title: 'Senior Full Stack Developer',
    about: `Highly skilled **Senior Full Stack Developer** with 10 years of experience in designing and developing robust web applications.\n\n
* Adept at leveraging a comprehensive stack of technologies, including front-end frameworks, back-end languages, and databases to create scalable and efficient solutions.\n
* Demonstrated expertise in leading cross-functional development teams, collaborating with stakeholders, and delivering innovative software products.\n
* Passionate about staying updated with the latest industry trends and continuously enhancing skills to deliver cutting-edge solutions.\n
* Committed to delivering clean, maintainable code and ensuring optimal user experiences.\n
* Strong problem-solving abilities and a track record of successfully completing complex projects on time and within budget.\n
* A proactive communicator and natural team player, dedicated to fostering a collaborative and positive work environment.\n
`,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    img: 'HeadShotSantiago.jpeg',
    imgAlt: 'Santiago Bendavid Profile Picture',
    addressLine1: '3231 NE Hoyt St.',
    addressLine2: 'Portland, OR 97232',
    phoneNumber: '971-303-9579',
    email: 'santiago@bendavid.me',
    skillsSet: [
      {
        id: 'technologies',
        name: 'Technologies',
        skills: [
          { id: 'reactjs', name: 'React/Redux', value: 100 },
          { id: 'react-native', name: 'React Native', value: 100 },
          { id: 'nodejs', name: 'Node.JS', value: 100 },
          { id: 'graphql', name: 'GraphQL', value: 100 },
          { id: 'gatsby', name: 'Gatsby', value: 90 },
          { id: 'strapi', name: 'Strapi', value: 80 },
        ],
      },
      {
        id: 'programming-languages',
        name: 'Programming Languages',
        skills: [
          { id: 'javascript', name: 'JavaScript', value: 100 },
          { id: 'typescript', name: 'TypeScript', value: 100 },
          { id: 'html', name: 'HTML 5', value: 95 },
          { id: 'css', name: 'CSS/SASS', value: 95 },
        ],
      },
    ],
    experience: [
      {
        id: 'ocelot',
        company: { name: 'Ocelot', website: 'https://www.ocelotbot.com/' },
        location: { city: 'Remote' },
        role: 'Senior Full-Stack Developer',
        duration: {
          start: new Date('2019-02-01T05:00:00.000Z'),
        },
        description: `Ocelot is a company helping students and parents in higher education. 
        This company has a large set of products including: A.I. chatbot, live chat, video library, text campaigns, knowledge base management, counseling center and integrations. 
        In this company I've been working as a front-end engineer with skills across the whole stack, involved in most areas of these products.`,
      },
      {
        id: 'portside',
        company: { name: 'Portside', website: 'https://portside.io/' },
        location: { city: 'Remote' },
        role: 'Senior Front-end Developer',
        duration: {
          start: new Date('2017-09-01T05:00:00.000Z'),
          end: new Date('2019-01-01T05:00:00.000Z'),
        },
        description: 'Development of a complex CRM using React in the front-end and Node.JS in the backend.',
      },
      {
        id: 'graybox',
        company: { name: 'Graybox', website: 'https://graybox.co/' },
        location: { city: 'Portland', state: 'Oregon', country: 'USA' },
        role: 'Web Developer',
        duration: {
          start: new Date('2014-05-01T05:00:00.000Z'),
          end: new Date('2017-08-01T05:00:00.000Z'),
        },
        description: `In the 3 years I worked for Graybox I worked in a variety of systems. 
        That included custom web applications using React/Redux, CMS work in Drupal and ExpressionEngine, development of mobile apps using React Native, as well as custom platforms using Symfony, Django and many others. 
        I was also in charge of setting up Linux servers for production environment as well as the maintenance of these servers.`,
      },
      {
        id: 'freelance-1',
        company: { name: 'Freelance' },
        location: { city: 'Remote' },
        role: 'Web Developer',
        duration: {
          start: new Date('2013-01-01T05:00:00.000Z'),
          end: new Date('2014-04-01T05:00:00.000Z'),
        },
        description:
          'I worked as a freelancer developing Wordpress and Drupal sites. This contracts included the development of both front and backend.',
      },
      {
        id: 'mediadrink',
        company: { name: 'Media Drink', website: 'https://mediadrink.com/' },
        location: { city: 'Portland', state: 'Oregon', country: 'USA' },
        role: 'Web Developer',
        duration: {
          start: new Date('2012-02-01T05:00:00.000Z'),
          end: new Date('2012-12-01T05:00:00.000Z'),
        },
        description: `Back-end web development.
        Integration of front and back-end programming.
        Management of simultaneous projects and team collaboration assignments.
        Server setup and installation of operating systems and software.
        In charge of developing multiple Wordpress websites as well as custom platforms using CodeIgniter and other PHP frameworks.`,
      },
    ],
    education: [
      {
        id: 'psu',
        college: 'Portland State University',
        location: { city: 'Portland', state: 'Oregon', country: 'USA' },
        duration: {
          start: new Date('2010-01-01T05:00:00.000Z'),
          end: new Date('2013-01-01T05:00:00.000Z'),
        },
        degree: 'Bachelor of Science in Computer Science',
      },
    ],
  },
];

export default {};
