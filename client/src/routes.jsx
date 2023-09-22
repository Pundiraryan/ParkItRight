import React from "react";

// Admin Imports
import MainDashboard from "./views/admin/default";
// import NFTMarketplace from "views/admin/marketplace";
import Profile from "./views/admin/profile";
// import DataTables from "views/admin/tables";
// import RTLDefault from "views/rtl/default";
// Auth Imports
// import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdPerson,
  MdLock,
} from "react-icons/md";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  // {
  //   name: "NFT Marketplace",
  //   layout: "/admin",
  //   path: "nft-marketplace",
  //   icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  //   component: <NFTMarketplace />,
  //   secondary: true,
  // },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "data-tables",
  //   component: <DataTables />,
  // },
  {
    name: "Enlist request",
    layout: "/admin",
    path: "enlist",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />
  },
  {
    name: "Report request",
    layout: "/auth",
    path: "report_request",
    icon: <MdLock className="h-6 w-6" />
    // component: <SignIn />,
  }
];
export default routes;
