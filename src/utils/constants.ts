import {
  DiscussionDetails,
  DiscussionManager,
  Settings,
  Users,
} from "../pages";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import SecurityIcon from "@mui/icons-material/Security";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";

export const navItems = [
  {
    text: "אנשים",
    path: "/",
    component: Users,
    icon: PeopleIcon,
    hasBadge: true,
  },
  {
    text: "מנהל דיון",
    path: "/discussion-manager",
    component: DiscussionManager,
    icon: SecurityIcon,
  },
  {
    text: "פרטי דיון",
    path: "/discussion-details",
    component: DiscussionDetails,
    icon: BubbleChartIcon,
  },
  {
    text: "הגדרות",
    path: "/settings",
    component: Settings,
    icon: SettingsIcon,
  },
];
