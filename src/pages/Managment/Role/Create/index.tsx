import React from "react";
import { Row, Col, Typography, Card, Checkbox, Space, Button } from "antd";
import { useAppSelector } from "../../../../store/hook";
import MyBreadcrumb from "../../../../components/MyBreadcrumb";
import InputField from "../../../../components/InputField";
import TextAreaField from "../../../../components/TextAreaField";

const Create: React.FC = () => {
    const { user } = useAppSelector((state) => state.auth);


    return (
        <Row style={{ position: "relative" }}>
            <MyBreadcrumb
                separator=">"
                user={user}
                items={[
                    {
                        title: "Cài đặt hệ thống",
                    },
                    {
                        title: "Thêm vai trò",
                    },
                ]}
            />
            <Row style={{ width: "100%", position: "absolute", maxHeight: "100vh" }}>
                <Col span={24} style={{ padding: "6rem 1rem 1rem 1rem" }}>
                    <Typography.Title
                        className="root_color"
                        style={{
                            fontFamily: "Nunito",
                            fontSize: "1.75rem",
                            fontWeight: 700,
                            marginBottom: 0,
                        }}
                    >
                        Danh sách vai trò
                    </Typography.Title>
                    <Card style={{ marginTop: "1.5rem" }}>
                        <Typography.Title
                            className="root_color"
                            style={{
                                fontFamily: "Nunito",
                                fontSize: "1.25rem",
                                fontWeight: 700,
                                marginBottom: ".75rem",
                            }}
                        >
                            Thông tin vai trò
                        </Typography.Title>
                        <Row style={{ width: "100%" }}>
                            <Col span={12} style={{ paddingRight: ".5rem" }}>
                                <Row style={{ width: "100%" }}>
                                    <InputField
                                        title={
                                            <>
                                                {`Tên vai trò: `}
                                                <label style={{ color: "red" }}>*</label>
                                            </>
                                        }
                                        titleSize={"1rem"}
                                        defaultValue={""}
                                        placeholder="Nhập vai trò"
                                        size="large"
                                        span={24}
                                        fontWeightTitle={600}
                                    />
                                    <TextAreaField
                                        title="Mô tả"
                                        titleSize={"1rem"}
                                        placeholder="Nhập mô tả"
                                        defaultValue={""}
                                        size="large"
                                        span={24}
                                        fontWeightTitle={600}
                                    />
                                    <Col
                                        span={24}
                                        style={{ display: "flex", alignItems: "center" }}
                                    >
                                        <label style={{ color: "red", marginRight: ".5rem" }}>
                                            *
                                        </label>
                                        <Typography.Text
                                            style={{ fontFamily: "Nunito", fontWeight: 500 }}
                                        >
                                            Là trường thông tin bắt buộc
                                        </Typography.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12} style={{ paddingLeft: ".5rem" }}>
                                <Typography.Paragraph
                                    style={{
                                        fontFamily: "Nunito",
                                        fontSize: "1rem",
                                        fontWeight: 600,
                                        marginBottom: ".75rem",
                                    }}
                                >
                                    Phân quyền chức năng:{" "}
                                    <label style={{ color: "red" }}>*</label>
                                </Typography.Paragraph>
                                <Row style={{ width: "100%" }}>
                                    <Col
                                        span={24}
                                        style={{
                                            backgroundColor: "#FFF2E7",
                                            borderRadius: 8,
                                            padding: "1rem",
                                        }}
                                    >
                                        <Row style={{ width: "100%", marginBottom: "1rem" }}>
                                            <Typography.Title
                                                className="root_color"
                                                style={{
                                                    fontFamily: "Nunito",
                                                    fontSize: "1rem",
                                                    fontWeight: 700,
                                                    marginBottom: ".75rem",
                                                }}
                                            >
                                                Nhóm chức năng A
                                            </Typography.Title>
                                            <Col
                                                span={24}
                                                style={{ display: "flex", alignItems: "center" }}
                                            >
                                                <Checkbox style={{ marginRight: ".25rem" }} />{" "}
                                                <Typography.Text style={{ fontFamily: "Nunito" }}>
                                                    Tất cả
                                                </Typography.Text>
                                            </Col>
                                            <Col
                                                span={24}
                                                style={{ display: "flex", alignItems: "center" }}
                                            >
                                                <Checkbox style={{ marginRight: ".25rem" }} />{" "}
                                                <Typography.Text style={{ fontFamily: "Nunito" }}>
                                                    Chức năng X
                                                </Typography.Text>
                                            </Col>
                                            <Col
                                                span={24}
                                                style={{ display: "flex", alignItems: "center" }}
                                            >
                                                <Checkbox style={{ marginRight: ".25rem" }} />{" "}
                                                <Typography.Text style={{ fontFamily: "Nunito" }}>
                                                    Chức năng Y
                                                </Typography.Text>
                                            </Col>
                                            <Col
                                                span={24}
                                                style={{ display: "flex", alignItems: "center" }}
                                            >
                                                <Checkbox style={{ marginRight: ".25rem" }} />{" "}
                                                <Typography.Text style={{ fontFamily: "Nunito" }}>
                                                    Chức năng Z
                                                </Typography.Text>
                                            </Col>
                                        </Row>
                                        <Row style={{ width: "100%", marginBottom: "1rem" }}>
                                            <Typography.Title
                                                className="root_color"
                                                style={{
                                                    fontFamily: "Nunito",
                                                    fontSize: "1rem",
                                                    fontWeight: 700,
                                                    marginBottom: ".75rem",
                                                }}
                                            >
                                                Nhóm chức năng B
                                            </Typography.Title>
                                            <Col
                                                span={24}
                                                style={{ display: "flex", alignItems: "center" }}
                                            >
                                                <Checkbox style={{ marginRight: ".25rem" }} />{" "}
                                                <Typography.Text style={{ fontFamily: "Nunito" }}>
                                                    Tất cả
                                                </Typography.Text>
                                            </Col>
                                            <Col
                                                span={24}
                                                style={{ display: "flex", alignItems: "center" }}
                                            >
                                                <Checkbox style={{ marginRight: ".25rem" }} />{" "}
                                                <Typography.Text style={{ fontFamily: "Nunito" }}>
                                                    Chức năng X
                                                </Typography.Text>
                                            </Col>
                                            <Col
                                                span={24}
                                                style={{ display: "flex", alignItems: "center" }}
                                            >
                                                <Checkbox style={{ marginRight: ".25rem" }} />{" "}
                                                <Typography.Text style={{ fontFamily: "Nunito" }}>
                                                    Chức năng Y
                                                </Typography.Text>
                                            </Col>
                                            <Col
                                                span={24}
                                                style={{ display: "flex", alignItems: "center" }}
                                            >
                                                <Checkbox style={{ marginRight: ".25rem" }} />{" "}
                                                <Typography.Text style={{ fontFamily: "Nunito" }}>
                                                    Chức năng Z
                                                </Typography.Text>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                    <Row justify="center" style={{ marginTop: "1rem" }}>
                        <Space size={24}>
                            <Button
                                size="large"
                                style={{ padding: "0 2rem" }}
                                onClick={() => history.back()}
                            >
                                Hủy bỏ
                            </Button>
                            <Button type="primary" size="large" style={{ padding: "0 2rem" }}>
                                Thêm
                            </Button>
                        </Space>
                    </Row>
                </Col>
            </Row>
        </Row>
    );
};

export default Create;