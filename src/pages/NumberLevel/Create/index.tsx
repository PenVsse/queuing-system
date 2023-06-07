import React, { useState } from "react";
import { Row, Col, Typography, Modal, Card, Select, Space, Button } from "antd";
import MyBreadcrumb from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import { DEVICE_OPTION_SERVICES } from "../../../constants/option";
import { textFont } from "../../Device/TableData";
import styled from "styled-components";

const MyModal = styled(Modal)`
  .ant-modal-content {
    padding: 1rem 0 0 0 !important;
    width: 360px;
    margin: 0 auto;
    border-radius: 12px;
    overflow: hidden;
  }
`

const Create: React.FC = () => {
    const { user } = useAppSelector((state) => state.auth);
    const [selectedService, setSelectedService] = useState<number>(
        DEVICE_OPTION_SERVICES[0].value
    );
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Row style={{ position: "relative" }}>
            <MyBreadcrumb
                separator=">"
                user={user}
                items={[
                    {
                        title: "Cấp số",
                    },
                    {
                        title: "Danh sách cấp số",
                        href: "/number-level",
                    },
                    {
                        title: "Cấp số mới",
                    },
                ]}
            />
            <Row style={{ width: "100%", position: "absolute", maxHeight: "100vh" }}>
                <Col span={24} style={{ padding: "6rem 1rem .5rem 1rem" }}>
                    <Typography.Title
                        className="root_color"
                        style={{
                            fontFamily: "Nunito",
                            fontSize: "1.75rem",
                            fontWeight: 700,
                        }}
                    >
                        Quản lý cấp số
                    </Typography.Title>
                    <Card style={{ marginTop: "1.5rem", height: "72vh" }}>
                        <Row justify="center">
                            <Typography.Title
                                className="root_color"
                                style={{
                                    fontFamily: "Nunito",
                                    fontSize: "2rem",
                                    fontWeight: 700,
                                    width: "100%",
                                    textAlign: "center",
                                }}
                            >
                                Cấp số mới
                            </Typography.Title>
                            <Typography.Title
                                style={{
                                    fontFamily: "Nunito",
                                    fontSize: "1.25rem",
                                    fontWeight: 700,
                                    width: "100%",
                                    textAlign: "center",
                                }}
                            >
                                Dịch vụ khách hàng lựa chọn
                            </Typography.Title>
                            <Select
                                style={{
                                    width: 400,
                                }}
                                size="large"
                                value={selectedService}
                                options={DEVICE_OPTION_SERVICES}
                                onChange={(value) => setSelectedService(value)}
                                placeholder="Chọn dịch vụ"
                            />
                        </Row>
                        <Space
                            style={{
                                marginTop: "4rem",
                                display: "flex",
                                justifyContent: "center",
                            }}
                            size={28}
                        >
                            <Button
                                size="large"
                                type="default"
                                style={{ width: 120 }}
                                onClick={() => history.back()}
                            >
                                Hủy bỏ
                            </Button>
                            <Button
                                size="large"
                                type="primary"
                                style={{ width: 120 }}
                                onClick={() => setOpen(true)}
                            >
                                In số
                            </Button>
                        </Space>
                    </Card>
                </Col>
            </Row>

            <MyModal open={open} onCancel={() => setOpen(false)} footer={null}>
                <Row justify="center" style={{ margin: "1rem 0 .5rem 0" }}>
                    <Typography.Text
                        style={{
                            ...textFont("1.5rem"),
                            fontWeight: 600,
                            color: "#535261",
                            textAlign: "center",
                        }}
                    >
                        Số thứ tự được cấp
                    </Typography.Text>
                </Row>
                <Row justify={"center"}>
                    <Typography.Text
                        className="root_color"
                        style={{
                            ...textFont("2.5rem"),
                            fontWeight: 700,
                            color: "#535261",
                            textAlign: "center",
                        }}
                    >
                        2001021
                    </Typography.Text>
                </Row>
                <Row justify={"center"} style={{ marginBottom: '2em' }}>
                    <Typography.Text>
                        {`DV: ${DEVICE_OPTION_SERVICES.find(
                            (opt) => opt.value === selectedService
                        )?.label
                            }`}
                        <strong style={{ marginLeft: ".5rem" }}>{`(tại quầy số 1)`}</strong>
                    </Typography.Text>
                </Row>
                <Row className="root_background" style={{ padding: '1rem 0' }}>
                    <Col span={24} style={{ margin: '.25rem 0', display: 'flex', justifyContent: 'center' }}>
                        <Typography.Text style={{ color: '#fff', ...textFont('1rem') }}>Thời gian cấp: 09:30 11/10/2021</Typography.Text>
                    </Col>
                    <Col span={24} style={{ margin: '.25rem 0', display: 'flex', justifyContent: 'center' }}>
                        <Typography.Text style={{ color: '#fff', ...textFont('1rem') }}>Hạn sử dụng: 17:30 11/10/2021</Typography.Text>
                    </Col>
                </Row>
            </MyModal>
        </Row>
    );
};

export default Create;