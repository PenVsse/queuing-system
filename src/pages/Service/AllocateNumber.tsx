import React from "react";
import { Row, Typography, Input, Col } from "antd";
import { IAllocateNumberProps } from "../../types/pages/service";

const AllocateNumber: React.FC<IAllocateNumberProps> = ({
    icon,
    label_1,
    label_2,
    from,
    to,
    styleLabel,
}) => {
    return (
        <Row style={{ height: 40, alignItems: "center", marginBottom: '.5rem' }}>
            {icon}
            <Col style={{ minWidth: 120 }}>
                <Typography.Text style={styleLabel}>{label_1}</Typography.Text>
            </Col>
            {from && <Input style={{ width: 60, height: '100%', margin: "0 1rem" }} defaultValue={from} />}

            {label_2 && (
                <Col style={{ minWidth: 32 }}>
                    <Typography.Text style={styleLabel}>{label_2}</Typography.Text>
                </Col>
            )}
            {to && <Input style={{ width: 60, height: '100%', margin: "0 1rem" }} defaultValue={to} />}
        </Row>
    );
};

export default AllocateNumber;