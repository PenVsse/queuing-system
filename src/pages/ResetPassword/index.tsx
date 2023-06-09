import React, { useState } from "react";
import { Row, Col, Form, Button, Typography, Space } from "antd";
import InputField from "../../components/InputField";

import logo from "../../../public/images/Login_1.png";
import image from "../../../public/images/Login_3.png";
import FormReset from "./FormReset";

export interface emailField {
    value: string;
    error: string;
}

const ResetPassword: React.FC = () => {
    const [email, setEmail] = useState<emailField>({ value: "", error: "" });
    const [isOke, setIsOke] = useState<boolean>(false);

    const handleContinue = () => {
        if (email.value.trim() !== "" && email.error.trim() === "") setIsOke(true);
    }

    return (
        <Row style={{ minHeight: "100vh" }}>
            <Col
                md={10}
                style={{
                    backgroundColor: "#F6F6F6",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Row style={{ marginTop: "4rem", marginBottom: "3rem" }}>
                    <img src={logo} alt="logo" />
                </Row>
                {isOke ? (
                    <FormReset />
                ) : (
                    <Form style={{ width: "70%", marginTop: "2rem" }}>
                        <Form.Item style={{ margin: 0 }}>
                            <Typography.Title
                                style={{
                                    fontSize: "1.5rem",
                                    fontFamily: "Nunito",
                                    fontWeight: 700,
                                    textAlign: "center",
                                }}
                            >
                                Đặt lại mật khẩu
                            </Typography.Title>
                            <div style={{ textAlign: 'center', font: 'Nunito', fontWeight: '400', fontSize: '18px', }}>Vui lòng nhập email để đặt lại mật khẩu của bạn *</div>
                            <InputField
                                title
                                titleSize={"1rem"}
                                placeholder={"Email"}
                                size="large"
                                value={email.value}
                                invalidMessage={email.error}
                                onChange={(e) => {
                                    const value = e?.target.value.trim();
                                    if (value !== undefined) {
                                        if (value === "") {
                                            setEmail({
                                                value: "",
                                                error: "Email is required",
                                            });
                                        } else {
                                            setEmail({
                                                value: value,
                                                error: "",
                                            });
                                        }
                                    }
                                }}
                            />
                        </Form.Item>
                        <Form.Item style={{ marginTop: "2rem", marginBottom: "0.5rem" }}>
                            <Row justify="center">
                                <Space style={{ marginTop: "1rem" }} size={24}>
                                    <Button
                                        style={{
                                            borderColor: "#FF9138",
                                            width: "170px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                        size="large"
                                        onClick={() => history.back()}
                                    >
                                        Hủy bỏ
                                    </Button>
                                    <Button
                                        className="root_background root_font"
                                        style={{
                                            borderColor: "#FF9138",
                                            color: "#fff",
                                            width: "170px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                        size="large"
                                        onClick={handleContinue}
                                    >
                                        Tiếp tục
                                    </Button>
                                </Space>
                            </Row>
                        </Form.Item>
                    </Form>
                )}
            </Col>
            <Col
                md={14}
                style={{ display: "flex", alignItems: "center", position: "relative", backgroundColor: 'white' }}
            >
                <img src={image} alt="logo" style={{ marginLeft: "6rem" }} />
            </Col>
        </Row>
    );
};

export default ResetPassword;