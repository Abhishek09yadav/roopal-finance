interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    link: string;
    title: string;
  }[];
}
[];

const menu_data: MenuItem[] = [
  {
    id: 1,
    has_dropdown: true,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    has_dropdown: false,
    title: "About",
    // link: "/about",
    link: "/",
  },
  // {
  //    id: 3,
  //    has_dropdown: true,
  //    title: "Project",
  //    link: "#",
  //    sub_menus: [
  //       { link: "/project", title: "Projects" },
  //       { link: "/project-details", title: "Projects Details" },
  //    ],
  // },
  // {
  //   id: 4,
  //   has_dropdown: true,
  //   title: "Services",
  //   link: "#",
  //   sub_menus: [
  //     { link: "/service", title: "Services" },
  //     { link: "/service-details", title: "Services Details" },
  //   ],
  // },

  // {
  //    id: 6,
  //    has_dropdown: true,
  //    title: "Blog",
  //    link: "#",
  //    sub_menus: [
  //       { link: "/news", title: "Blog Grid" },
  //       { link: "/news-sidebar", title: "Blog Sidebar" },
  //       { link: "/news-standard", title: "Blog Standard" },
  //       { link: "/news-details", title: "Blog Details" },
  //    ],
  // },
  {
    id: 7,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
  },
];
export default menu_data;
