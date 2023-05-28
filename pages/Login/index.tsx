import { Row, Col, Typography, Form, Button, Spin } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import image from "../../../public/images/login_2.png";
import logo from "../../../public/images/login_1.png";
import InputField from "../../components/InputField";
import { useUser } from "../../hooks/useUsers";
import { db } from "../../config/firebaseConfig";
import { ILogin } from "../../types/auth";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../store/hook";
import { login as setLogin } from "../../store/slice/authSlice";

const loginSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  password: yup.string().required("password is required"),
});

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useUser(db);
  const dispatch = useAppDispatch();

  const { control, setError, getValues } = useForm<ILogin>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onLogin = async ({ username, password }: ILogin) => {
    const resp = await login({
      username,
      password,
    });

    return resp?.data();
  };

  const handleLogin = async () => {
    if (Object.keys(control?._formState.errors).length > 0) return;

    const data = getValues();
    let isError = false;
    for (const key in data) {
      if (data[key as keyof ILogin].trim() === "") {
        setError(key as keyof ILogin, {
          type: "manual",
          message: `${key} is required`,
        });
        isError = true;
      }
    }

    if (isError) return;

    setLoading(true);
    const { username, password } = data;
    const user = await onLogin({ username, password });

    if (user) {
      dispatch(setLogin({ user }));
    } else {
      setError("password", {
        type: "manual",
        message: `mật khẩu hoặc tên đăng nhập không chính xác`,
      });
    }

    setLoading(false);
  };

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
        <Form style={{ width: "70%" }}>
          <Form.Item style={{ margin: 0 }}>
            <Controller
              control={control}
              name="username"
              render={({ field, fieldState }) => {
                return (
                  <InputField
                    title="Tên đăng nhập *"
                    titleSize={"1rem"}
                    placeholder={"username"}
                    size="large"
                    {...field}
                    invalidMessage={
                      fieldState.error && fieldState.error.message
                    }
                  />
                );
              }}
            />
          </Form.Item>
          <Form.Item style={{ margin: 0 }}>
            <Controller
              control={control}
              name="password"
              render={({ field, fieldState }) => {
                return (
                  <InputField
                    title="Mật khẩu *"
                    titleSize={"1rem"}
                    placeholder={"password"}
                    size="large"
                    {...field}
                    invalidMessage={
                      fieldState.error && fieldState.error.message
                    }
                    type="password"
                  />
                );
              }}
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
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                size="large"
                onClick={handleLogin}
                disabled={loading}
              >
                {loading && <Spin size="small" style={{ marginRight: '.5rem' }}/>}
                Đăng nhập
              </Button>
            </Row>
          </Form.Item>
        </Form>
        <Form.Item>
          <Link className="root_color" to={"/reset-password"}>
            Quên mật khẩu?
          </Link>
        </Form.Item>
      </Col>
      <Col
        md={14}
        style={{ display: "flex", alignItems: "center", position: "relative" }}
      >
        <img src={image} alt="logo" style={{ marginLeft: "6rem" }} />
        <Row
          style={{
            position: "absolute",
            flexDirection: "column",
            right: "6rem",
          }}
        >
          <Typography
            className="root_color root_font"
            style={{ fontSize: "1.9rem", fontWeight: 400 }}
          >
            Hệ Thống
          </Typography>
          <Typography
            className="root_color root_font"
            style={{ margin: 0, fontSize: "2rem", fontWeight: 900 }}
          >
            QUẢN LÝ XẾP HÀNG
          </Typography>
        </Row>
      </Col>
    </Row>
  );
};

export default Login;
