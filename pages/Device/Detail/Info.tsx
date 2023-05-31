import { Row, Col, Typography } from "antd";
import React from "react";
import { IInfoProps } from "../../../types/pages/device";

const Info: React.FC<IInfoProps> = ({ label, value, span }) => {
  return (
    <Col span={span} style={{ marginBottom: '.75rem' }}>
      <Row>
        <Col span={8}>
          <Typography.Text style={{ fontFamily: 'Nunito', fontSize: '1rem', fontWeight: 600 }}>{`${label}:`}</Typography.Text>
        </Col>
        <Col span={16}>
        <Typography.Text style={{ fontFamily: 'Nunito', fontSize: '1rem' }}>
            {value}
        </Typography.Text>
        </Col>
      </Row>
    </Col>
  );
};

export default Info;
