import { useRoutes, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import { useAppSelector } from "../store/hook";
import Layout from "../layout/Layout";
import Dashboard from "../pages/Dashboard";
import Device from "../pages/Device";
import Service from "../pages/Service";
import NumberLevel from "../pages/NumberLevel";
import Report from "../pages/Report";
import Setting from "../pages/Setting";

const Router = () => {
  const auth = useAppSelector((state) => state.auth);

  const getHomePage = () => {
    if (auth.user) {
      return <Home />;
    } else return <Navigate to={"/login"} />;
  };

  const getLoginPage = () => {
    if (auth.user) {
      return <Navigate to={"/"} />;
    } else return <Login />;
  };

  const getResetPasswordPage = () => {
    if (auth.user) {
      return <Navigate to={"/"} />;
    } else return <Login />;
  };

  const routes = useRoutes([
    {
      path: "/",
      index: true,
      element: <Layout>{getHomePage()}</Layout>,
    },
    {
      path: "/login",
      element: getLoginPage(),
    },
    {
      path: "/reset-password",
      element: getResetPasswordPage(),
    },
    {
      path: "/dashboard",
      element: (
        <Layout>
          <Dashboard />
        </Layout>
      ),
    },
    {
      path: "/device",
      element: (
        <Layout>
          <Device />
        </Layout>
      ),
    },
    {
      path: "/service",
      element: (
        <Layout>
          <Service />
        </Layout>
      ),
    },
    {
      path: "/number-level",
      element: (
        <Layout>
          <NumberLevel />
        </Layout>
      ),
    },
    {
      path: "/report",
      element: (
        <Layout>
          <Report />
        </Layout>
      ),
    },
    {
      path: "/setting",
      element: (
        <Layout>
          <Setting />
        </Layout>
      ),
    },
  ]);

  return routes;
};

export default Router;