import { Badge, Col, Progress, Row, Typography } from "antd";
import React from "react";
import {
  IProgressInfoProps,
  IStatusProgress,
} from "../../types/pages/dashboard";

const StatusProgress: React.FC<IStatusProgress> = ({
  name,
  colorStatus,
  quantity,
  colorValue,
}) => {
  return (
    <Row justify={"space-between"}>
      <Badge
        color={colorStatus}
        text={
          <Typography.Text style={{ fontFamily: "Nunito", fontSize: "0.8rem" }}>
            {name}
          </Typography.Text>
        }
      />
      <Typography.Text
        style={{
          fontFamily: "Nunito",
          fontSize: "1rem",
          fontWeight: 700,
          color: colorValue,
        }}
      >
        {quantity.toLocaleString()}
      </Typography.Text>
    </Row>
  );
};

const ProgressInfo: React.FC<IProgressInfoProps> = ({
  icon,
  name,
  percent,
  status = [],
  total,
  color
}) => {
  return (
    <Row
      style={{
        borderRadius: 12,
        boxShadow: "2px 2px 15px rgba(70, 64, 67, 0.1)",
        padding: "1rem",
        marginBottom: '.5rem'
      }}
    >
      <Col span={5}>
        <Progress
          type="circle"
          percent={percent}
          size={60}
          strokeColor={{ from: color, to: color }}
        />
      </Col>
      <Col span={7}>
        <Typography.Title
          style={{
            fontSize: "1.75rem",
            fontWeight: 800,
            fontFamily: "Nunito",
            margin: 0,
          }}
        >
          {total.toLocaleString()}
        </Typography.Title>
        <Row
          style={{ fontSize: "1rem", fontWeight: 600, fontFamily: "Nunito", color: color }}
        >
          <div style={{ marginRight: "0.25rem" }}>{icon}</div>
          {name}
        </Row>
      </Col>
      <Col span={12}>
        {status.map((st, index) => (
          <StatusProgress
            key={index}
            colorStatus={st.colorStatus}
            name={st.name}
            quantity={st.quantity}
            colorValue={st.colorValue}
          />
        ))}
      </Col>
    </Row>
  );
};

export default ProgressInfo;
