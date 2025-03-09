import React from 'react';

// Lazy load pages
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));

const routes = [
  { path: "/", exact: true, name: "Dashboard", element: Dashboard },
  { path: "*", element: <Page404 /> }, // Catch all unknown routes inside DefaultLayout
];

export default routes;
