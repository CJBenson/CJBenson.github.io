export const bio = [
    "Hey there! I'm Crane Benson, a Game Systems Programmer, Technical Artist, and Student with experience in optimization and performance programming, shader programming, and mechanic design.",
    "I am driven by a strong desire to deliver fun, fulfilling, and polished experiences to both players and learners while challenging myself and actively improving.",
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
      skillName: "GitHub, JIRA",
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
        image: "images/programmingdiaries.png",
        summary:
          "Developed a basic C++ 3D game engine, including a homemade graphics library and demo tank game.",
        preview: "https://programmingdiaries.herokuapp.com/",
        techStack: ["C++", "DirectX 11", "HLSL"],
      },
      {
        projectName: "FABRIK Inverse Kinematics",
        image: "images/findyourbank.png",
        summary:
          "Developed a constrained FABRIK solver in the Magnussen Engine.",
        preview: "https://clever-fermi-0d5d76.netlify.app",
        techStack: ["C++"],
      },
      {
        projectName: "Centipede Recreation",
        image: "images/portfolio.png",
        summary:
          "Recreated the game Centipede from scratch using a tiny barebones engine.",
        preview: "https://github.com/vinaysomawat/Travographer-Portal",
        techStack: ["C++"],
      },
    ],
    digitalGames: [
      {
        projectName: "Perfect Soup!",
        image: "images/pizzaorderchatbot.png",
        summary:
          "2D Platformer Metroidvania with smooth movement, complex map structure, and comprehensive dialogue and quest systems.",
        preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
        techStack: ["Unity", "C#"],
      },
      {
        projectName: "Eels on Wheels",
        image: "images/whatsappbot.jpg",
        summary:
          "Physics-based co-op endless runner featuring simple but highly engineered controls.",
        preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
        techStack: ["Unity", "C#"],
      },
      {
        projectName: "DePaul VARC Lab Escape Room",
        image: "images/billgenerator.png",
        summary:
          "Virtual reality escape room  for communications research with comprehensive interactivity using Unity's Autohand plugin.",
        preview: "https://github.com/vinaysomawat/Bill-Generator",
        techStack: ["Unity", "C#", "Autohand"],
      },
      {
        projectName: "UIC Respirator Training Sim",
        image: "images/billgenerator.png",
        summary:
          "Simulation for UIC research on interactive respirator training as a more effective means than the existing OSHA framework.",
        preview: "https://github.com/vinaysomawat/Bill-Generator",
        techStack: ["Unity", "C#", "articy:draft"],
      },
      {
        projectName: "DePaul OSI Involvement Calculator",
        image: "images/billgenerator.png",
        summary:
          "Questionnaire that returns campus groups of interest based on student's answers. Includes systems for reading and parsing spreadsheet data.",
        preview: "https://github.com/vinaysomawat/Bill-Generator",
        techStack: ["Unity", "C#"],
      },
      {
        projectName: "DePaul 'Who Are You as a Learner?' Avatar Creator",
        image: "images/billgenerator.png",
        summary:
          "UI-based character avatar creator with image export capability.",
        preview: "https://github.com/vinaysomawat/Bill-Generator",
        techStack: ["Unity", "C#"],
      },
    ],
    physicalGames: [
      {
        projectName: "Buddy Abroad",
        image: "images/nitwcse.jpg",
        summary:
          "Card game with the purpose of helping inform students preparing for study abroad trips.",
        preview: "https://github.com/vinaysomawat/NITW-CSE",
        techStack: [],
      },
    ],
  };
  
  export const experience = [
    {
      title: "DePaul Instructional Game and Innovation Lab (DIGILab)",
      duration: "March 2022 - Present",
      subtitle: "Lead Programmer",
      details: ["Programming serious and educational games alongside a small development team."],
      tags: ["Unity", "C#", "Jira"],
      icon: "truck ",
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
       label: "Dev Profiles",
       data: [
         {
           text: "GitHub",
           link: "https://github.com/cjbenson",
         },
  //       {
  //         text: "LeetCode",
  //         link: "https://leetcode.com/somawatvinay/",
  //       },
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
    {
      label: "Links",
      data: [
         {
           text: "Linkedin",
           link: "https://www.linkedin.com/in/vinaysomawat/",
         },
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
      ],
    },
    {
      label: "copyright-text",
      data: [
        "Template made with &hearts; by Vinay Somawat.",
        "&copy; No Copyrights. Feel free to use this template.",
      ],
    },
  ];
  