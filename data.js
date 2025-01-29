export const bio = [
  "Hey there! I'm Crane Benson, a game programmer, technical artist, and student with experience in optimization and performance programming, shader programming, and mechanic design.",
  "I am driven by a strong desire to deliver fun, fulfilling, and polished experiences to both players and learners while challenging myself and actively improving. I love all forms of game development, but I have a determined passion for learning games, experiences that transcend the entertainment/artistic space and serve a significant purpose.",
  "Feel free to reach out!",
];

export const skills = [
  {
    title: "Technical",
    skillName: "C++, C#, HLSL",
    color: "1",
    percentage: "80",
  },
  {
    title: "General",
    skillName: "Creative Problem Solving",
    color: "6",
    percentage: "60",
  },
  {
    title: "Technical",
    skillName: "DirectX 11",
    color: "6",
    percentage: "60",
  },
  {
    title: "General",
    skillName: "Interdisciplinary Collaboration",
    color: "6",
    percentage: "60",
  },
  {
    title: "Technical",
    skillName: "Unity, Unreal, Visual Studio, Maya, Blender",
    color: "4",
    percentage: "70",
  },
  {
    title: "General",
    skillName: "Client Engagement",
    color: "6",
    percentage: "60",
  },
  {
    title: "Technical",
    skillName: "GitHub, JIRA, Perforce",
    color: "7",
    percentage: "70",
  },
  {
    title: "General",
    skillName: "Adaptability",
    color: "6",
    percentage: "60",
  },
  {
    title: "Technical",
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
  digitalGames: [
    {
      projectName: "DePaul VARC Lab Escape Room Demo",
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
      projectName: "Perfect Soup! (In Progress)",
      image: "images/perfectsoup.png",
      summary:
        "2D Platformer Metroidvania with smooth movement, complex map structure, and comprehensive dialogue and quest systems.",
      preview: "https://www.youtube.com/embed/MS-Cs6degMM?si=Q4dItSqXtZagCm24",
      techStack: ["Unity", "C#", "UI"],
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
    {
      projectName: "Eels on Wheels",
      image: "images/eels.png",
      summary:
        "Physics-based co-op endless runner featuring simple but highly engineered controls. Features two eels attempting to ride a bicycle together, to mixed success.",
      preview: "https://cranebean.itch.io/eelgame",
      techStack: ["Unity", "C#"],
    },
  ],
  softwareProjects: [
    {
      projectName: "Magnussen Engine",
      image: "images/magnussentanks.png",
      video: "https://www.youtube.com/embed/pCGNVLSN4to?si=KdkHU32ZmRMlRXee",
      summary:
        "Developed a basic C++ 3D game engine, including a demo tank game.",
      preview: "https://github.com/CJBenson/Magnussen-Engine",
      techStack: ["C++", "DirectX 11", "HLSL"],
    },
    {
      projectName: "FABRIK Inverse Kinematics",
      image: "images/ik.png",
      video: "https://www.youtube.com/embed/4UHBbXpiQiI?si=bm-BErmLCa3hOlot",
      summary:
        "Developed a simple and comprehensive FABRIK solver in the Magnussen Engine.",
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
    title: "DePaul Instructional Game and Innovation Lab (DIGI Lab)",
    duration: "March 2022 - Present",
    subtitle: "Lead Programmer",
    details: 
    ["Programmed instructional games for classroom and research use.",
     "Developed several 2D and 3D Unity projects, a handful of which were fully UI-based.",
     "Worked alongside a tight-knit team to make experiences the best that they can be.",
     "Took on most digital projects as the sole programmer",
     "Interfaced with clients and made sure their expectations matched our team's capabilities.",
     "Continuous mentorship of a junior employee to fill my role upon graduation."
    ],
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
      "Practical Scripting for Games",
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
