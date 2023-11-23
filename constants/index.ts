import {
  AiFillHome,
  AiFillMessage,
  AiFillCompass,
  AiFillStar,
  AiFillFire,
  AiFillProfile,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaUser, FaSearch } from "react-icons/fa";

export const sidebarLinks = [
  {
    icon: AiFillHome,
    route: "/",
    label: "Home",
  },
  {
    icon: FaSearch,
    route: "/search",
    label: "Search",
  },
  {
    icon: AiFillFire,
    route: "/my-events",
    label: "My events",
  },
  {
    icon: AiFillMessage,
    route: "/inbox",
    label: "Inbox",
  },

  {
    icon: FaUser,
    route: "/profile",
    label: "Profile",
  },
];

export const profileTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "replies", label: "Replies", icon: "/assets/members.svg" },
  { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
];

export const communityTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "members", label: "Members", icon: "/assets/members.svg" },
  { value: "requests", label: "Requests", icon: "/assets/request.svg" },
];
