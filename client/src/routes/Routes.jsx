import * as React from "react";
import { useRoutes } from "react-router-dom";

import Home from "@/pages/home";
import Registration from "@/pages/registration";
import Search from "@/pages/search";
import Error from "@/pages/error";
import WhatWeDo from "@/pages/whatWeDo";
import Login from "@/pages/login";
import Report from "@/pages/report";
import Claim from "@/pages/claim";
import Profile from "@/pages/profile";
import YourClaimedItems from "@/pages/yourClaimedItems";
import UsersClaimedItems from "@/pages/usersClaimedItems";
import ViewPendingClaims from "@/pages/viewPendingClaims";

const Pager = React.lazy(() => import("@/layouts/Global/Pager"));
const GlobalLayout = React.lazy(() => import("@/layouts/Global/GlobalLayout"));

function Routes() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {useRoutes([
        {
          path: "/", // Default route to Login
          element: <Login />,
        },
        {
          path: "registration",
          element: <Pager content={<Registration />} title="Registration" />,
        },
        {
          path: "/",
          element: <Pager content={<GlobalLayout />} />,
          children: [
            {
              path: "home",
              element: <Pager content={<Home />} title="Home" />,
            },
            {
              path: "search",
              element: <Pager content={<Search />} title="View Items" />,
            },
            {
              path: "what-we-do",
              element: <Pager content={<WhatWeDo />} title="FAQs" />,
            },
            {
              path: "claim",
              element: <Pager content={<Claim />} title="Claim" />,
            },
            {
              path: "report",
              element: <Pager content={<Report />} title="Report an Item" />,
            },
            {
              path: "profile",
              element: <Pager content={<Profile />} title="Profile" />,
            },
            {
              path: "your-claimed-items",
              element: <Pager content={<YourClaimedItems />} title="Your Claimed Items" />,
            },
            {
              path: "users-claimed-items",
              element: <Pager content={<UsersClaimedItems />} title="Users Claimed Items" />,
            },
            {
              path: "view-pending-claims",
              element: <Pager content={<ViewPendingClaims />} title="View Pending Claims" />,
            },
            {
              path: "*",
              element: <Pager content={<Error />} title="Page Not Found" />,
            },
          ],
        },
      ])}
    </React.Suspense>
  );
}

export default Routes;