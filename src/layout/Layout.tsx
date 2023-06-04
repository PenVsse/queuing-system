import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, Col, Button } from "antd";
import type { MenuProps } from "antd";
import styled from "styled-components";

import {
  AppstoreOutlined,
  DesktopOutlined,
  WechatOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { FiLogOut } from "react-icons/fi";
import { RiStackLine } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";

const MyMenu = styled(Menu)`
  &&& {
    .ant-menu-item-selected {
      background-color: #ff9138;
      color: #ffffff;
    }
  }
`;

import logo from "../../public/images/login_1.png";
import { useAppDispatch } from "../store/hook";
import { logout } from "../store/slice/authSlice";

interface LayoutProps {
  children: React.ReactNode;
}

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "/dashboard", <AppstoreOutlined />),
  getItem("Thiết bị", "/device", <DesktopOutlined />),
  getItem("Dịch vụ", "/service", <WechatOutlined />),
  getItem("Cấp số", "/number-level", <RiStackLine />),
  getItem("Báo cáo", "/report", <HiOutlineDocumentReport />),
  getItem("Cài đặt hệ thống", "/setting", <SettingOutlined />),
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();


  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div style={{ height: "100vh", display: "flex" }}>
      <Col span={4} style={{ height: "100%" }}>
        <div
          style={{
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            padding: "2rem 0",
            height: "20%",
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{ width: 100, cursor: "pointer" }}
            onClick={() => navigate('/')}
          />
        </div>
        <MyMenu
          mode="inline"
          style={{ height: "70%", border: 0 }}
          items={items}
          selectedKeys={pathname === "/" ? [] : [`/${pathname.split('/')[1]}`]}
          onSelect={(e) => navigate(e.key)}
        />
        <div
          style={{
            fontFamily: "Nunito",
            backgroundColor: "#FFFFFF",
            height: "10%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            className="root_color"
            type="primary"
            size="large"
            style={{ width: "90%", backgroundColor: "#FFF2E7" }}
            onClick={handleLogout}
          >
            <FiLogOut />
            Đăng xuất
          </Button>
        </div>
      </Col>
      <Col span={20} style={{ maxHeight: '100vh', position: 'relative' }}>{children}</Col>
    </div>
  );
};

export default Layout;
