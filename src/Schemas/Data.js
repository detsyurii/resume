export const Data = {
  profile: {
    name: "Yurii Dets",
    occupation: "Frontend Developer",
    location: "Kyiv, Ukraine",
    email: "dets.yurii@gmail.com",
    telephone: "+380 96 933 3528",
  },
  aboutMe: {
    label: "Summary",
    description:
      "I am a frontend developer with knowledge of HTML, CSS, and JavaScript, including frameworks and tools that are relevant today. Mainly work with React. I am responsible, with strong analytical thinking and eager to learn new coding practices. My expertise lies in building responsive and interactive user interfaces using the latest technologies.",
  },
  skills: {
    technicalLabel: "Technologies",
    softLabel: "Soft-skills",
    technicalSkills: [
      "HTML5/CSS3/SASS",
      "JavaScript",
      "React.js",
      "Webpack/Parcel",
      "Redux/Redux Toolkit",
      // "Node.js, TypeScript(basics)",
      "REST API",
      "Styled-components/Material-UI",
      "CSS Modules",
      // "Npm, yarn, git",

      // "Scrum, agile",
      // "Trello, jira",
    ],
    softSkills: ["Cooperative", "Calm", "Open-minded", "Organized"],
    languages: ["English - intermediate", "Ukrainian - native"],
  },
  socialMedia: {
    label: "SOCIAL",
    social: [
      {
        label: "Yurii Dets",
        name: "linkedin",
        url: "https://www.linkedin.com/in/yurii-dets/",
        className: "bxl-linkedin-square",
      },
      {
        label: "Yurii Dets",
        name: "github",
        url: "https://github.com/detsyurii",
        className: "bxl-github",
      },
    ],
  },
  experience: {
    education: [
      {
        profession: "Full Stack Developer",
        date: "2022-2023",
        institution: "GO IT Global",
      },
      {
        profession: "Sociology",
        date: "2012-2016",
        institution: "Taras Shevchenko National University of Kyiv",
      },
    ],
    projects: [
      {
        name: "Phonebook",
        url: "https://detsyurii.github.io/phonebook",
        gitHubLink: "https://github.com/detsyurii/phonebook",
        company: "Personal project",
        period: "2023",
        description: [
          "Application for contact management.",
          "Add / remove contact.",
          "Sign up / Sign in.",
          "Redux Toolkit for State Management.",
        ],
      },
      {
        name: "Movielab",
        url: "https://detsyurii.github.io/movielab",
        gitHubLink: "https://github.com/detsyurii/movielab",
        company: "Personal project",
        period: "2023",
        description: [
          "Responsive Movie Website.",
          "Search movies.",
          "Show movie details, cast, reviews.",
          "Htttp requests / axios to Themoviedb.",
          "React Router DOM.",
        ],
      },
      {
        name: "Investment app",
        company: "Commercial project",
        period: "2023",
        description: [
          "Personalized investment app.",
          "Get customized investment plans, and connect with a supportive community.",
          "Creating modularity and Component-Based Structure.",
        ],
      },
      {
        name: "Ice cream",
        url: "https://andreiradchenko.github.io/IceCream/",
        gitHubLink: "https://github.com/AndreiRadchenko/IceCream",
        company: "Team project",
        period: "2022",
        description: [
          "User-friendly application designed to connect customers with shop.",
        ],
      },
    ],
  },
};
