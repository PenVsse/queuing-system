import React, { useEffect, useState } from "react";
import { Row, Col, Typography, Card, Button, Space } from "antd";
import { useParams } from "react-router-dom";
import { IDevice } from "../../../types/pages/device";
import { useDevice } from "../../../hooks/useDevice";
import { db } from "../../../config/firebaseConfig";
import MyBreadcrumb from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import InputField from "../../../components/InputField";
import SelectField from "../../../components/SelectField";
import {
  DEVICE_OPTION_SERVICES,
  DEVICE_OPTION_TYPE,
} from "../../../constants/option";
import SelectMulti from "../../../components/SelectMulti";

const Update: React.FC = () => {
  const [device, setDevice] = useState<IDevice | null>(null);
  const { user } = useAppSelector((state) => state.auth);
  const param = useParams();
  const { getDeviceById } = useDevice(db);

  const getData = async () => {
    if (param.id) {
      const data = (await getDeviceById(param.id)) as IDevice;
      setDevice(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
            title: "Danh sách thiết bị",
            href: "/device",
          },
          {
            title: "Cập nhật thiết bị",
          },
        ]}
      />
      <Row style={{ width: "100%", position: "absolute", maxHeight: "100vh" }}>
        <Col span={24} style={{ padding: "6rem 7rem .5rem 1rem" }}>
          <Typography.Title
            className="root_color"
            style={{
              fontFamily: "Nunito",
              fontSize: "1.75rem",
              fontWeight: 700,
            }}
          >
            Quản lý thiết bị
          </Typography.Title>
        </Col>
        <Col span={24} style={{ padding: "0 4rem 0 1rem" }}>
          {device && (
            <Card style={{ minHeight: "fit-content", borderRadius: 16 }}>
              <Typography.Title
                className="root_color"
                style={{
                  fontFamily: "Nunito",
                  fontSize: "1.45rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                }}
              >
                Thông tin thiết bị
              </Typography.Title>
              <Row justify="space-between">
                <InputField
                  title={
                    <>
                      {`Mã thiết bị: `}
                      <label style={{ color: "red" }}>*</label>
                    </>
                  }
                  titleSize="1rem"
                  defaultValue={device?.id}
                  fontWeightTitle={600}
                  size="middle"
                  span={11}
                />
                <Col
                  span={11}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  {device && (
                    <SelectField
                      title={
                        <>
                          {`Loại thiết bị: `}
                          <label style={{ color: "red" }}>*</label>
                        </>
                      }
                      styleSelect={{
                        width: "100%",
                        fontFamily: "Nunito",
                      }}
                      styleTitle={{
                        fontFamily: "Nunito",
                        fontSize: "1rem",
                        fontWeight: 600,
                      }}
                      options={DEVICE_OPTION_TYPE}
                      defaultValue={
                        DEVICE_OPTION_TYPE.find(
                          (type) => type.value === device?.type
                        )?.value
                      }
                    />
                  )}
                </Col>
                <InputField
                  title={
                    <>
                      {`Tên thiết bị: `}
                      <label style={{ color: "red" }}>*</label>
                    </>
                  }
                  titleSize="1rem"
                  defaultValue={device?.name}
                  fontWeightTitle={600}
                  size="middle"
                  span={11}
                />
                <InputField
                  title={
                    <>
                      {`Tên đăng nhập: `}
                      <label style={{ color: "red" }}>*</label>
                    </>
                  }
                  titleSize="1rem"
                  defaultValue={device?.username}
                  fontWeightTitle={600}
                  size="middle"
                  span={11}
                />
                <InputField
                  title={
                    <>
                      {`Địa chỉ IP: `}
                      <label style={{ color: "red" }}>*</label>
                    </>
                  }
                  titleSize="1rem"
                  defaultValue={device?.ip}
                  fontWeightTitle={600}
                  size="middle"
                  span={11}
                />
                <InputField
                  title={
                    <>
                      {`Mật khẩu: `}
                      <label style={{ color: "red" }}>*</label>
                    </>
                  }
                  titleSize="1rem"
                  defaultValue={device?.password}
                  fontWeightTitle={600}
                  size="middle"
                  span={11}
                />
              </Row>
              <SelectMulti
                title={
                  <>
                    {`Dịch vụ sử dụng: `}
                    <label style={{ color: "red" }}>*</label>
                  </>
                }
                style={{ width: "100%" }}
                titleSize={"1rem"}
                fontWeightTitle={600}
                span={24}
                placeholder="Chọn dịch vụ"
                options={DEVICE_OPTION_SERVICES}
              />
              <Row
                style={{
                  width: "100%",
                  marginTop: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <label style={{ color: "red", marginRight: ".25rem" }}>*</label>
                <Typography.Text
                  style={{ fontFamily: "Nunito", color: "#7E7D88" }}
                >
                  Là trường thông tin bắt buộc
                </Typography.Text>
              </Row>
            </Card>
          )}
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
                Cập nhật
              </Button>
            </Space>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default Update;
