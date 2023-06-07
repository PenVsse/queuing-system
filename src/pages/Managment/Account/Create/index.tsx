import React from "react";
import { Row, Col, Typography, Card, Space, Button } from "antd";
import { useAppSelector } from "../../../../store/hook";
import MyBreadcrumb from "../../../../components/MyBreadcrumb";
import { textFont } from "../../../Device/TableData";
import {
    OPTION_ROLES,
    SERVICE_OPTION_STATUS,
} from "../../../../constants/option";
import SelectField from "../../../../components/SelectField";
import InputField from "../../../../components/InputField";

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
                        title: "Quản lý tài khoản",
                        href: "/managment-account",
                    },
                    {
                        title: "Thêm tài khoản",
                    },
                ]}
            />
            <Row style={{ width: "100%", position: "absolute", maxHeight: "100vh" }}>
                <Col span={24} style={{ padding: "6rem 7rem 1rem 1rem" }}>
                    <Typography.Title
                        className="root_color"
                        style={{
                            fontFamily: "Nunito",
                            fontSize: "1.75rem",
                            fontWeight: 700,
                            marginBottom: "1.5rem",
                        }}
                    >
                        Quản lý tài khoản
                    </Typography.Title>
                    <Card style={{ height: "65vh" }}>
                        <Typography.Title
                            className="root_color"
                            style={{
                                fontFamily: "Nunito",
                                fontSize: "1.5rem",
                                fontWeight: 700,
                            }}
                        >
                            Thông tin tài khoản
                        </Typography.Title>
                        <Row style={{ width: "100%", justifyContent: "space-between" }}>
                            <InputField
                                title={
                                    <>
                                        {`Họ tên: `}
                                        <label style={{ color: "red" }}>*</label>
                                    </>
                                }
                                titleSize={"1rem"}
                                span={11}
                                defaultValue={""}
                                placeholder="Nhập họ tên"
                            />
                            <InputField
                                title={
                                    <>
                                        {`Tên đăng nhập: `}
                                        <label style={{ color: "red" }}>*</label>
                                    </>
                                }
                                titleSize={"1rem"}
                                span={11}
                                defaultValue={""}
                                placeholder="Nhập tên đăng nhập"
                            />
                            <InputField
                                title={
                                    <>
                                        {`Số điện thoại: `}
                                        <label style={{ color: "red" }}>*</label>
                                    </>
                                }
                                titleSize={"1rem"}
                                span={11}
                                defaultValue={""}
                                placeholder="Nhập số điện thoại"
                            />
                            <InputField
                                title={
                                    <>
                                        {`Mật khẩu: `}
                                        <label style={{ color: "red" }}>*</label>
                                    </>
                                }
                                titleSize={"1rem"}
                                span={11}
                                defaultValue={""}
                                placeholder="Nhập mật khẩu"
                                type="password"
                            />
                            <InputField
                                title={
                                    <>
                                        {`Email: `}
                                        <label style={{ color: "red" }}>*</label>
                                    </>
                                }
                                titleSize={"1rem"}
                                span={11}
                                defaultValue={""}
                                placeholder="Nhập email"
                            />
                            <InputField
                                title={
                                    <>
                                        {`Nhập lại mật khẩu: `}
                                        <label style={{ color: "red" }}>*</label>
                                    </>
                                }
                                titleSize={"1rem"}
                                span={11}
                                defaultValue={""}
                                placeholder="Nhập lại mật khẩu"
                                type="password"
                            />
                            <Col span={11}>
                                <SelectField
                                    title={
                                        <>
                                            {`Vai trò: `}
                                            <label style={{ color: "red" }}>*</label>
                                        </>
                                    }
                                    styleTitle={{ ...textFont("1rem") }}
                                    styleSelect={{ width: "100%" }}
                                    options={OPTION_ROLES}
                                    defaultValue={OPTION_ROLES[1].value}
                                />
                            </Col>
                            <Col span={11}>
                                <SelectField
                                    title={
                                        <>
                                            {`Tình trạng: `}
                                            <label style={{ color: "red" }}>*</label>
                                        </>
                                    }
                                    styleTitle={{ ...textFont("1rem") }}
                                    styleSelect={{ width: "100%" }}
                                    options={SERVICE_OPTION_STATUS}
                                    defaultValue={SERVICE_OPTION_STATUS[0].value}
                                />
                            </Col>
                            <Col
                                span={24}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: "1.5rem",
                                }}
                            >
                                <label style={{ color: "red", marginRight: ".5rem" }}>*</label>
                                <Typography.Text
                                    style={{ fontFamily: "Nunito", fontWeight: 500 }}
                                >
                                    Là trường thông tin bắt buộc
                                </Typography.Text>
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