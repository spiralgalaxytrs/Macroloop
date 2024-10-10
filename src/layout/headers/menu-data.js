const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About Us",
    link: "/about",
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    sub_menus: [{
      title: "CONSTRUCTION TECHNOLOGY",
      link: "/solutions/Construction-Technical"
    },
    {
      title: "DIGITAL TRANSFORMATION",
      link: "/solutions/Digital-Transformation",
      sub_menus: [
        // {
        //   title: "IOT SOLUTIONS",
        //   link: "/solutions/Digital-Transformation/IOT-Solutions"
        // },
        {
          title: "SECURITY MANAGEMENT SOLUTIONS",
          link: "/solutions/Digital-Transformation/Security-Systems"
        },
        {
          title: "HRMS SOLUTIONS",
          link: "/solutions/Digital-Transformation/HRMS"
        },
        {
          title: "METAVERSE SOLUTIONS",
          link: "/solutions/Digital-Transformation/Metaverse"
        },
        // {
        //   title: "AUTOMATION SOLUTIONS",
        //   link: "/solutions/Digital-Transformation/Automation"
        // },
        {
          title: "IT INFRASTRUCTURE SOLUTIONS",
          link: "/solutions/Digital-Transformation/Infrastructure"
        }]
    },
    {
      title: "EDU-TECH",
      link: "/solutions/Edu-Tech"
    },
    ],
    title: "Our Solutions",
    link: "/solutions",

  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "LooperHub",
    link: "/LooperHub",
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
    title: "Contact",
    link: "/contact",
  },
];
export default menu_data;
