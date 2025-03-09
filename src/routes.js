import React from 'react';

// Lazy load pages
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const DefaultLayout = React.lazy(() => import("./layouts/DefaultLayout"))
const Login = React.lazy(() => import("./views/pages/login/Login"))
const UserList = React.lazy(() => import("./views/user-setup/UserList"))
const Register = React.lazy(() => import("./views/pages/register/Register"))
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"))

const routes = [
  { path: "/", exact: true, name: "Login", element: Login },
  { path: "/register", name: "Register", element: Register },
  { path: "/404", name: "Page 404", element: Page404 },
  { path: "/500", name: "Page 500", element: Page500 },
  { path: "/dashboard", name: "Dashboard", element: Dashboard, layout: DefaultLayout },
  { path: "/user/userList", name: "User List", element: UserList, layout: DefaultLayout },
  { path: "*", name: "Not Found", element: Page404 },
];

export default routes;