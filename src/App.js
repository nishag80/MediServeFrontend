import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { CSpinner, useColorModes } from "@coreui/react";
import "./scss/style.scss";
import routes from "./routes";

// Import Page404 component
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes(
    "coreui-free-react-admin-template-theme",
  );
  const storedTheme = useSelector((state) => state.theme);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split("?")[1]);
    const theme =
      urlParams.get("theme") &&
      urlParams.get("theme").match(/^[A-Za-z0-9\s]+/)[0];
    if (theme) {
      setColorMode(theme);
    }
    if (!isColorModeSet()) {
      setColorMode(storedTheme);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          {routes.map((route, idx) => {
            const RouteElement = route.element;
            const Layout = route.layout || React.Fragment;
            return (
              <Route
                key={idx}
                path={route.path}
                element={
                  <Layout>
                    {route.children ? (
                      // Render the parent route's element (Outlet) and its children
                      <RouteElement>
                        <Routes>
                          {route.children.map((childRoute, childIdx) => (
                            <Route
                              key={childIdx}
                              path={childRoute.path}
                              element={<childRoute.element />}
                            />
                          ))}
                        </Routes>
                      </RouteElement>
                    ) : (
                      // Render the route's element directly
                      <RouteElement />
                    )}
                  </Layout>
                }
              />
            );
          })}
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;