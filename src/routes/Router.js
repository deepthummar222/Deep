import { lazy } from "react";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/
const Starter = lazy(() => import("../views/Starter.js"));
const Fav = lazy(() => import("../components/dashboard/Fav.js"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Online = lazy(() => import("../views/ui/Online.js"))
const Login = lazy(() => import("./Login.js"))
const AddEmojis = lazy(() => import("../components/dashboard/AddEmojis.js"))
const AddProfilepic = lazy(() => import("../components/dashboard/AddProfilepic.js"))
const CoinData = lazy(() => import("../views/ui/CoinTransactiondata.js"))



const ThemeRoutes = [
  {
    path: "/login", 
    element: <Login />,
  },
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/starter", element: <Starter /> },
      { path: "/favimg", element: <Fav /> },
      { path: "/data", element: <Tables /> },
      { path: "/online", element: <Online /> },
      { path: "/login", element: <Login /> },
      { path: "/Addemojis", element: <AddEmojis /> },
      { path: "/AddProfilepic", element: <AddProfilepic /> },
      { path: "/coinData", element: <CoinData /> },
    ],
  },
];

export default ThemeRoutes;
