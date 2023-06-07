import { Breadcrumb, Row, Avatar, Typography, Dropdown, Divider } from "antd";
import { AiFillBell } from "react-icons/ai";
import React from "react";
import styled from "styled-components";
import type { MenuProps } from "antd";
import { BreadcrumbProps } from "../../types/components/breadcrumb";

import defaultAvatar from "../../../public/images/no_avatar.png";
import { textFont } from "../../pages/Device/TableData";

const ConfigBreadcrumb = styled(Breadcrumb)`
  font-family: "Nunito" !important;
  font-size: 1.25rem;
  font-weight: 700;

  li:last-child {
    color: #ff9138 !important;
  }
`;

const MyDropDown = styled(Dropdown)`
  ul {
    padding: 0 !important;
  }
`;

const MyBreadcrumb: React.FC<BreadcrumbProps> = ({
  separator,
  items,
  user,
}) => {
  const itemss: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          className="root_background"
          style={{
            padding: ".4rem 1.5rem",
            borderTopLeftRadius: "",
          }}
        >
          <Typography.Text
            style={{ ...textFont("1.25rem"), fontWeight: 700, color: "#fff" }}
          >
            Thông báo
          </Typography.Text>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div style={{ padding: ".5rem 1rem" }}>
          <div>
            <Typography.Text
              style={{ ...textFont("1rem"), fontWeight: 600, color: "#BF5805" }}
            >
              Người dùng: Nguyễn Thị Thùy Dung
            </Typography.Text>
          </div>
          <div>
            <Typography.Text style={{ ...textFont(".75rem") }}>
              Thời gian nhận số: 12h20 ngày 30/11/2021
            </Typography.Text>
          </div>
          <div>
            <Divider style={{ margin: '1rem 0 0 0' }} />
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div style={{ padding: ".5rem 1rem" }}>
          <div>
            <Typography.Text
              style={{ ...textFont("1rem"), fontWeight: 600, color: "#BF5805" }}
            >
              Người dùng: Nguyễn Thiên Chinh
            </Typography.Text>
          </div>
          <div>
            <Typography.Text style={{ ...textFont(".75rem") }}>
              Thời gian nhận số: 12h20 ngày 30/11/2021
            </Typography.Text>
          </div>
          <div>
            <Divider style={{ margin: '1rem 0 0 0' }} />
          </div>
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div style={{ padding: ".5rem 1rem" }}>
          <div>
            <Typography.Text
              style={{ ...textFont("1rem"), fontWeight: 600, color: "#BF5805" }}
            >
              Người dùng: Võ Thị Kim Liên
            </Typography.Text>
          </div>
          <div>
            <Typography.Text style={{ ...textFont(".75rem") }}>
              Thời gian nhận số: 12h20 ngày 30/11/2021
            </Typography.Text>
          </div>
          <div>
            <Divider style={{ margin: '1rem 0 0 0' }} />
          </div>
        </div>
      ),
    },
    {
      key: "5",
      label: (
        <div style={{ padding: ".5rem 1rem" }}>
          <div>
            <Typography.Text
              style={{ ...textFont("1rem"), fontWeight: 600, color: "#BF5805" }}
            >
              Người dùng: Nguyễn Quốc Huy
            </Typography.Text>
          </div>
          <div>
            <Typography.Text style={{ ...textFont(".75rem") }}>
              Thời gian nhận số: 12h20 ngày 30/11/2021
            </Typography.Text>
          </div>
          <div>
            <Divider style={{ margin: '1rem 0 0 0' }} />
          </div>
        </div>
      ),
    },
    {
      key: "6",
      label: (
        <div style={{ padding: ".5rem 1rem" }}>
          <div>
            <Typography.Text
              style={{ ...textFont("1rem"), fontWeight: 600, color: "#BF5805" }}
            >
              Người dùng: Vũ Ngọc Lan Anh
            </Typography.Text>
          </div>
          <div>
            <Typography.Text style={{ ...textFont(".75rem") }}>
              Thời gian nhận số: 12h20 ngày 30/11/2021
            </Typography.Text>
          </div>
        </div>
      ),
    },
    {
      key: "7",
      label: (
        <div style={{ padding: ".5rem 1rem" }}>
          <div>
            <Typography.Text
              style={{ ...textFont("1rem"), fontWeight: 600, color: "#BF5805" }}
            >
              Người dùng: Nguyễn Thị Trúc Anh
            </Typography.Text>
          </div>
          <div>
            <Typography.Text style={{ ...textFont(".75rem") }}>
              Thời gian nhận số: 12h20 ngày 30/11/2021
            </Typography.Text>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Row
      style={{
        alignItems: "center",
        width: "100%",
        padding: "1rem 3rem 0 1rem",
        height: 60,
        zIndex: 9999,
      }}
      justify="space-between"
    >
      <ConfigBreadcrumb separator={separator} items={items} />
      <Row style={{ alignItems: "center" }}>
        <Row
          style={{
            backgroundColor: "#f7eee6",
            padding: ".5rem",
            borderRadius: "50%",
            cursor: "pointer",
            marginRight: "1rem",
          }}
        >
          <MyDropDown
            overlayStyle={{ top: 60, width: 300 }}
            menu={{ items: itemss }}
            placement="bottomRight"
            trigger={["click"]}
          >
            <AiFillBell style={{ color: "#FF9138", fontSize: "1rem" }} />
          </MyDropDown>
        </Row>
        <Row style={{ marginRight: ".5rem" }}>
          <Avatar src={defaultAvatar} alt="avatar" size="large" />
        </Row>
        <div>
          <Typography.Text
            style={{ fontFamily: "Nunito", fontSize: 12, color: "#535261" }}
          >
            Xin chào
          </Typography.Text>
          <Typography.Paragraph
            style={{ fontFamily: "Nunito", fontWeight: 700, margin: 0 }}
          >
            {user?.fullName}
          </Typography.Paragraph>
        </div>
      </Row>
    </Row>
  );
};

export default MyBreadcrumb;