const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "HOME",
    link: "/",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "ABOUT US",
    link: "/about",
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    sub_menus: [{
      title: "CONSTRUCTION TECHNOLOGY",
      link: "/solutions/Construction-Technical",
      // sub: [
      //   "Project Management Solutions",
      //   "Document Management Solutions",
      //   "Building Information Modeling"
      // ]
    },
    {
      title: "DIGITAL TRANSFORMATION",
      link: "/solutions/Digital-Transformation",
      sub_menus: [
        // {
        //   title: "IOT SOLUTIONS",
        //   link: "/solutions/Digital-Transformation/IOT-Solutions"
        // },
        // {
        //   title: "IOT SOLUTIONS",
        //   link: "/solutions/Digital-Transformation/IOT-Solutions"
        // },
        {
          title: "SAFETY MANAGEMENT",
          link: "/solutions/Digital-Transformation/Security-Systems"
        },
        {
          title: "HRMS",
          title: "HRMS",
          link: "/solutions/Digital-Transformation/HRMS"
        },
        {
          title: "METAVERSE",
          title: "METAVERSE",
          link: "/solutions/Digital-Transformation/Metaverse"
        },
        // {
        //   title: "AUTOMATION SOLUTIONS",
        //   link: "/solutions/Digital-Transformation/Automation"
        // },
        // {
        //   title: "AUTOMATION SOLUTIONS",
        //   link: "/solutions/Digital-Transformation/Automation"
        // },
        {
          title: "IT INFRASTRUCTURE",
          title: "IT INFRASTRUCTURE",
          link: "/solutions/Digital-Transformation/Infrastructure"
        }
      ],
      sub: [
        "SAFETY MANAGEMENT",
        "HRMS",
        "Metaverse",
        "IT Infrastructure"
      ]
    },
    {
      title: "EDU-TECH",
      link: "/solutions/Edu-Tech",
      sub_menus: [
        {
          title: "TRAINING PROGRAMS",
          link: "/solutions/Edu-Tech/Training-Programs"
        },
        {
          title: "HIGH TECH LABORATORY",
          link: "/solutions/Edu-Tech/High-Tech-Laboratory"
        }
      ],
      sub: [
        "Corporate Training",
        "Institutional Training",
        "Laboratory Solutions"
      ]
    },
    ],
    title: "SOLUTIONS",
    link: "/solutions",

  },
  // {
  //   id: 4,
  //   mega_menu: false,
  //   has_dropdown: false,
  //   title: "LooperHub",
  //   link: "/LooperHub",
  // },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "PRODUCTS",
    link: "/products",
  },
  // {
  //   id: 5,
  //   mega_menu: false,
  //   has_dropdown: false,
  //   title: "Looptech Synapse",
  //   link: "/LooptechSyanpse"
  // },
  // {
  //   id: 6,
  //   mega_menu: false,
  //   has_dropdown: false,
  //   title: "LCG",
  //   link: "/lcg",

  // },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "CONTACT",
    link: "/contact",
  },
];
export default menu_data;
