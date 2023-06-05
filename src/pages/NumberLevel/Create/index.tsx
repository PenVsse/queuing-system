import React from "react";
import { Row, Col, Typography, Card, Select, Space, Button } from "antd";
import MyBreadcrumb from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import { DEVICE_OPTION_SERVICES } from "../../../constants/option";

const Create: React.FC = () => {
    const { user } = useAppSelector((state) => state.auth);

    return (
        <Row style={{ position: "relative" }}>
            <MyBreadcrumb
                separator=">"
                user={user}
                items={[
                    {
                        title: "Thiết bị",
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
                                options={DEVICE_OPTION_SERVICES}
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
                            <Button size="large" type="primary" style={{ width: 120 }}>
                                In số
                            </Button>
                        </Space>
                    </Card>
                </Col>
            </Row>
        </Row>
    );
};

export default Create;