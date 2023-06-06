import { useRoutes, Navigate, Outlet } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import { useAppSelector } from "../store/hook";
import Layout from "../layout/Layout";
import Dashboard from "../pages/Dashboard";
import Report from "../pages/Report";

import Role from "../pages/Managment/Role";
import CreateRole from "../pages/Managment/Role/Create";
import UpdateRole from "../pages/Managment/Role/Update";

import Log from "../pages/Managment/Log";

import Account from "../pages/Managment/Account";
import CreateAccount from "../pages/Managment/Account/Create";
import UpdateAccount from "../pages/Managment/Account/Update";

import Device from "../pages/Device";
import DetailDevice from "../pages/Device/Detail";
import UpdateDevice from "../pages/Device/Update";
import CreateDevice from "../pages/Device/Create";

import Service from "../pages/Service";
import CreateService from "../pages/Service/Create";
import UpdateService from "../pages/Service/Update";
import DetailService from "../pages/Service/Detail";

import NumberLevel from "../pages/NumberLevel";
import CreateNumberLevel from "../pages/NumberLevel/Create";
import DetailNumberLevel from "../pages/NumberLevel/Detail";
import ResetPassword from "../pages/ResetPassword";

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
    } else return <ResetPassword />;
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
          <Outlet />
        </Layout>
      ),
      children: [
        {
          path: "",
          element: <Device />,
        },
        {
          path: "detail/:id",
          element: <DetailDevice />,
        },
        {
          path: "update/:id",
          element: <UpdateDevice />,
        },
        {
          path: "create",
          element: <CreateDevice />,
        },
      ],
    },
    {
      path: "/service",
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        {
          path: "",
          element: <Service />,
        },
        {
          path: "create",
          element: <CreateService />,
        },
        {
          path: "update/:id",
          element: <UpdateService />,
        },
        {
          path: "detail/:id",
          element: <DetailService />,
        },
      ],
    },
    {
      path: "/number-level",
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        {
          path: "",
          element: <NumberLevel />,
        },
        {
          path: "create",
          element: <CreateNumberLevel />,
        },
        {
          path: "detail/:id",
          element: <DetailNumberLevel />,
        },
      ],
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
      path: "/managment-role",
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        {
          path: "",
          element: <Role />
        },
        {
          path: "create",
          element: <CreateRole />
        },
        {
          path: "update/:id",
          element: <UpdateRole />
        }
      ]
    },
    {
      path: "/managment-account",
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        {
          path: "",
          element: <Account />
        },
        {
          path: "create",
          element: <CreateAccount />
        },
        {
          path: "update/:id",
          element: <UpdateAccount />
        }
      ]
    },
    {
      path: "/managment-log",
      element: (
        <Layout>
          <Log />
        </Layout>
      ),
    },
  ]);

  return routes;
};

export default Router;