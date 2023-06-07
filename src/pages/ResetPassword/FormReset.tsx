import React from "react";
import { Row, Form, Typography, Space, Button } from "antd";
import InputField from "../../components/InputField";

const FormReset: React.FC = () => {
    return (
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
                    Đặt lại mật khẩu mới
                </Typography.Title>
                <InputField
                    title="Mật khẩu"
                    titleSize={"1rem"}
                    placeholder={"Mật khẩu"}
                    size="large"
                    type="password"
                />
                <InputField
                    title="Nhập lại mật khẩu"
                    titleSize={"1rem"}
                    placeholder={"Nhập lại mật khẩu"}
                    size="large"
                    type="password"
                />
            </Form.Item>
            <Form.Item style={{ marginTop: "2rem", marginBottom: "0.5rem" }}>
                <Row justify="center">
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
                    >
                        Xác nhận
                    </Button>
                </Row>
            </Form.Item>
        </Form>
    );
};

export default FormReset;