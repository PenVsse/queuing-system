import React from "react";
import { Col, Row, Statistic, Typography } from "antd";
import { IStaticItemProps } from "../../types/pages/dashboard";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

const StaticItem: React.FC<IStaticItemProps> = ({
  span,
  icon,
  name,
  value,
  percent,
  status,
}) => {
  return (
    <Col
      span={span}
      style={{
        padding: '0 0.25rem'
      }}
    >
      <div style={{
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: ".75rem",
      }}>
        <Row style={{ alignItems: "center", marginBottom: "1rem" }}>
          <div style={{ width: "30%" }}>{icon}</div>
          <Typography.Title
            style={{
              width: "70%",
              fontSize: "1rem",
              fontFamily: "Nunito",
              fontWeight: 700,
              wordWrap: "break-word",
              whiteSpace: "pre-wrap",
            }}
          >
            {name}
          </Typography.Title>
        </Row>
        <Row
          style={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography.Title
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              fontFamily: "Nunito",
              margin: 0,
            }}
          >
            {value.toLocaleString()}
          </Typography.Title>
          <div
            style={{
              backgroundColor:
                status === "increase"
                  ? "rgba(255, 149, 1, 0.15)"
                  : "rgba(231, 63, 63, 0.15)",
              height: "fit-content",
              borderRadius: 8,
              padding: "2px 4px",
            }}
          >
            <Statistic
              value={percent}
              precision={2}
              valueStyle={{
                color: status === "decrease" ? "#E73F3F" : "#FF9138",
                fontSize: 10,
              }}
              prefix={
                status === "increase" ? (
                  <ArrowUpOutlined />
                ) : (
                  <ArrowDownOutlined />
                )
              }
              suffix="%"
            />
          </div>
        </Row>
      </div>
    </Col>
  );
};

export default StaticItem;
