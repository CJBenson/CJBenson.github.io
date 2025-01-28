export const bio = [
  "Hey there! I'm Crane Benson, a game programmer, technical artist, and student with experience in optimization and performance programming, shader programming, and mechanic design.",
  "I am driven by a strong desire to deliver fun, fulfilling, and polished experiences to both players and learners while challenging myself and actively improving. I love all forms of game development, but I have a determined passion for learning games, experiences that transcend the entertainment/artistic space and serve a significant purpose.",
  "Feel free to reach out!",
];

export const skills = [
  {
    title: "Languages",
    skillName: "C++, C#, HLSL",
    color: "1",
    percentage: "80",
  },
  {
    title: "Frameworks/Libraries",
    skillName: "DirectX 11",
    color: "6",
    percentage: "60",
  },
  {
    title: "Software",
    skillName: "Unity, Unreal, Visual Studio, Maya",
    color: "4",
    percentage: "70",
  },
  {
    title: "Version Control",
    skillName: "GitHub, JIRA, Perforce",
    color: "7",
    percentage: "70",
  },
  {
    title: "Other",
    skillName: "Optimization, Project Structuring, Prototyping",
    color: "3",
    percentage: "80",
  },
//   {
//     title: "Analytics",
//     skillName: "CleverTap, Countly",
//     color: "5",
//     percentage: "50",
//   },
//   {
//     title: "IDE",
//     skillName: "VS Code",
//     color: "6",
//     percentage: "70",
//   },
];

export const projects = {
  softwareProjects: [
    {
      projectName: "Magnussen Engine",
      image: "images/magnussentanks.png",
      video: "https://www.youtube.com/embed/pCGNVLSN4to?si=KdkHU32ZmRMlRXee",
      summary:
        "Developed a basic C++ 3D game engine, including a homemade graphics library and demo tank game.",
      preview: "https://github.com/CJBenson/Magnussen-Engine",
      techStack: ["C++", "DirectX 11", "HLSL"],
    },
    {
      projectName: "FABRIK Inverse Kinematics",
      image: "images/ik.png",
      video: "https://www.youtube.com/embed/4UHBbXpiQiI?si=bm-BErmLCa3hOlot",
      summary:
        "Developed a simple and comprehensive constrained FABRIK solver in the Magnussen Engine.",
      preview: "https://cjbenson.github.io/",
      techStack: ["C++"],
    },
    {
      projectName: "Centipede Recreation",
      image: "images/centipede.png",
      video: "https://www.youtube.com/embed/jExn0od2SS8?si=wXY9DFhuQjpFO8Bx",
      summary:
        "Recreated the classic arcade game Centipede from scratch in C++ using the barebones TEAL engine.",
      preview: "https://github.com/CJBenson/Benson-Centipede",
      techStack: ["C++"],
    },
  ],
  digitalGames: [
    {
      projectName: "Perfect Soup!",
      image: "images/perfectsoup.png",
      summary:
        "2D Platformer Metroidvania with smooth movement, complex map structure, and comprehensive dialogue and quest systems.",
      preview: "https://cjbenson.github.io/",
      techStack: ["Unity", "C#", "UI"],
    },
    {
      projectName: "Eels on Wheels",
      image: "images/eels.png",
      summary:
        "Physics-based co-op endless runner featuring simple but highly engineered controls. Features two eels attempting to ride a bicycle together, to mixed success.",
      preview: "https://cranebean.itch.io/eelgame",
      techStack: ["Unity", "C#"],
    },
    {
      projectName: "DePaul VARC Lab Escape Room",
      image: "images/escaperoom.png",
      summary:
        "Virtual reality escape room for communications research with comprehensive interactivity using Unity's Autohand plugin.",
      preview: "https://www.youtube.com/embed/mAUW4DdMD-s?si=JJZtom2y831tapsB",
      techStack: ["Unity", "C#", "Autohand"],
    },
    {
      projectName: "UIC Respirator Training Sim",
      image: "images/uic.png",
      summary:
        "Simulation for UIC research on interactive respirator training as a more effective means than the existing OSHA framework.",
      preview: "https://digi-lab.itch.io/uic-respirator-training",
      techStack: ["Unity", "C#", "articy:draft", "UI"],
    },
    {
      projectName: "DePaul OSI Involvement Calculator",
      image: "images/involvementcalculator.png",
      summary:
        "Questionnaire that returns campus groups of interest based on student's answers. Includes systems for reading and parsing spreadsheet data as well as secure server-side email functionality with Node.js.",
      preview: "https://digi-lab.itch.io/osi-calculator",
      techStack: ["Unity", "C#", "Node.js", "UI"],
    },
    {
      projectName: "DePaul 'Who Are You as a Learner?' Avatar Creator",
      image: "images/avatar-creator.png",
      summary:
        "UI-based character avatar creator with various menus, color selection, and image export capability.",
      preview: "https://digi-lab.itch.io/avatar-learner",
      techStack: ["Unity", "C#", "UI"],
    },
  ],
  physicalGames: [
    {
      projectName: "Buddy Abroad",
      image: "images/buddyabroad.jpg",
      summary:
        "<b>Won Serious Play 2024 Gold Medal for Tabletop/Board Games.</b> Developed mechanics and helped balance card game with the purpose of helping inform students preparing for study abroad trips.",
      preview: "https://www.thegamecrafter.com/games/buddy-abroad",
      techStack: ["Mechanic Design", "Graphic Design"],
    },
  ],
};

export const experience = [
  {
    title: "DePaul Instructional Game and Innovation Lab (DIGILab)",
    duration: "March 2022 - Present",
    subtitle: "Lead Programmer",
    details: ["Programmed instructional games for classroom and research use alongside a tight-knit development team."],
    tags: ["Unity", "C#", "Jira"],
    icon: "qrcode ",
  }
];

export const education = [
  {
    title: "BS in Game Progamming",
    duration: "2021 - Present",
    subtitle: "DePaul University, Chicago",
    details: [],
    tags: [
      "Data Structures",
      "Optimized C++",
      "Object-Oriented Game Development",
      "Linear Algebra",
      "Graphics Programming",
      "Game Engine Development",
    ],
    icon: "graduation-cap",
  },
];

export const footer = [
   {
     label: "Links",
     data: [
       {
         text: "GitHub",
         link: "https://github.com/cjbenson",
       },
       {
         text: "Linkedin",
         link: "https://www.linkedin.com/in/crane-benson-3590431b5/",
       },
       {
         text: "Bluesky",
         link: "https://bsky.app/profile/eggfullofbees.bsky.social",
       },
     ],
//   },
//   {
//     label: "Resources",
//     data: [
//       {
//         text: "Enable Dark/Light Mode",
//         func: "enableDarkMode()",
//       },
//       {
//         text: "Print this page",
//         func: "window.print()",
//       },
//       {
//         text: "Clone this page",
//         link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
//       },
//     ],
   },
//  {
//    label: "Links",
//    data: [

    //   {
    //     text: "Twitter",
    //     link: "https://twitter.com/thesigmakid",
    //   },
    //  {
    //    text: "Buy me a coffee",
    //    link: "https://www.buymeacoffee.com/r194dME8y",
    //  },
    //  {
    //    text: "Github/vinaysomawat.github.io",
    //    link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
    //  },
//    ],
//  },
  {
    label: "copyright-text",
    data: [
      "Template made with &hearts; by Vinay Somawat.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];
