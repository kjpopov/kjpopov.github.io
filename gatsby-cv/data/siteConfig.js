module.exports = {
  siteTitle: 'Hello! I\'m Krasimir Popov',
  siteDescription: `And you've reach out to my online CV`,
  keyWords: ['devops', 'SRE', 'docker', 'kubernetes', 'react', 'curriculum'],
  authorName: 'Krasimir Popov',
  twitterUsername: '_na',
  githubUsername: 'kjpopov',
  authorAvatar: '/images/kras.png',
  authorDescription: `DevOPS, SRE, Cloud Solution Architect, Golang advocate, Flutter enthusiast`,
  skills: [
    {
      name: 'Docker',
      level: 100
    },
    {
      name: 'Kubernetes',
      level: 100
    },
    {
      name: 'Golang',
      level: 80
    },
    {
      name: 'Python',
      level: 70
    },
    {
      name: 'Ruby',
      level: 50
    },
    {
      name: 'PHP',
      level: 60
    },
    {
      name: 'Bash',
      level: 100
    },
    {
      name: 'Terraform',
      level: 70
    },
    {
      name: 'NodeJS',
      level: 30
    },
    {
      name: 'HTML',
      level: 70
    },
    {
      name: 'CSS',
      level: 20
    },
    {
      name: 'Javascript',
      level: 50
    },
    {
      name: 'Flutter',
      level: 40
    },
    {
      name: 'Dart',
      level: 30
    },

  ],

  edu: [
    {
      where: "South Western University",
      begin: {
        month: 'Oct',
        year: '2000'
      },
      duration: "4 years",
      occupation: "Phisics and Mathematics",
      description: "Pedagogical profile for high school teacher."

    },
  ],

  jobs: [
    {
      where: "FlixMobility Tech",
      begin: {
        month: 'Mar',
        year: '2016'
      },
      duration: null,
      occupation: "DevOps Engineer",
      description: "Developing infrastructure as code and maintaining kubernetes clusters running on bare metal and AWS cloud. Contributing to various company docker images and backend code. Automating and maintaining database clusters. Contributing to and maintaing content managemant system."
    }, {
      where: "asteasolutions",
      begin: {
        month: 'Apr',
        year: '2012'
      },
      duration: '3 years 6 months',
      occupation: "Cloud Administrator Amazon AWS and Microsoft Azure",
      description: "Development and maintenance, corrective and preventive, of web applications for global market. Flex and Java backend application maintenance. Clustered and distributed software maintenance."
    }, {
      where: "TO-MI Radovis",
      begin: {
        month: 'sep',
        year: '2008'
      },
      duration: '4 yrs',
      occupation: "Technical Director & Linux System Administrator",
      description: "Administration of cable modems, billing system for LAN and docsis, administration of mikrotik and cisco routers."

    },
    /* ... */
  ],
  social: {
    twitter: "https://twitter.com/_",
    linkedin: "https://www.linkedin.com/in/kjpopov",
    github: "https://github.com/kjpopov",
    email: "kjpopovbg@gmail.com"
  },
  siteUrl: 'https://kjpopov.github.io',
  pathPrefix: '', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Experiance',
      url: '/',
    },
    {
      label: 'Education',
      url: '/education',
    },
    // TODO: Build components for those
    // {
    //   label: 'Hobies',
    //   url: '/hobies',
    // }
  ]
}