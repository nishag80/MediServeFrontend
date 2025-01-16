import React from 'react'

// Lazy load pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

const routes = [
  { path: '/', exact: true, name: 'Login', element: Login },
  { path: '/register', name: 'Register', element: Register },
  { path: '/404', name: 'Page 404', element: Page404 },
  { path: '/500', name: 'Page 500', element: Page500 },
  { path: '*', name: 'Dashboard', element: DefaultLayout },
]

export default routes
