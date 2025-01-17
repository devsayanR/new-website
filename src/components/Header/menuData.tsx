import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Projects",
    path: "/projects",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "Event",
    path: "/events",
    newTab: false,
  },
  {
    id: 6,
    title: "Community",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Github",
        path: "https://github.com/orgs/DEVRhylme-Foundation/discussions",
        icon: '/images/icons/github.svg',
        newTab: true,
      },
      {
        id: 62,
        title: "Discord",
        path: "https://discord.gg/xjwZzGKDVR",
        icon: '/images/icons/discord.svg',
        newTab: true,
      },
      {
        id: 63,
        title: "Youtube",
        path: "https://www.youtube.com/@DevRhylme1",
        icon: '/images/icons/youtube.svg',
        newTab: true,
      },
      {
        id: 64,
        title: "Commudle",
        path: "https://www.commudle.com/communities/devrhylme-foundation",
        icon: '/images/icons/commudle.svg',
        newTab: true,
      },
    ],
  },
];
export default menuData;
