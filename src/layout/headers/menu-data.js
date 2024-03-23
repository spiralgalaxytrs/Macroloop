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
    sub_menus : [{
      title : "CONSTRUCTION TECHNICAL",
      link : "/solutions/Construction-Technical"
    },
    {
      title: "DIGITAL TRANSFORMATION SOLUTIONS",
      link : "/solutions/Digital-Transformation"
    },
    {
      title : "EDU-TECH",
      link : "/solutions/Edu-Tech"
    },
    {
      title : "SECURITY SYSTEMS",
      link : "/solutions/Security-Systems"
    },
    {
      title : "IT INFRASTRUCTURE SOLUTIONS",
      link : "/solutions/Infrastructure"
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
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "LCG",
    link: "/lcg",
   
  },
 
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
  },
];
export default menu_data;
