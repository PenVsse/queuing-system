import { Row, Col, Card, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyBreadcrumb from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import Info from "./Info";
import { useDevice } from "../../../hooks/useDevice";
import { db } from "../../../config/firebaseConfig";
import { IDevice } from "../../../types/pages/device";
import { DEVICE_OPTION_TYPE } from "../../../constants/option";
import { FaPencilAlt } from "react-icons/fa";

const Detail: React.FC = () => {
  const [device, setDevice] = useState<IDevice | null>(null);
  const { user } = useAppSelector((state) => state.auth);
  const { getDeviceById } = useDevice(db);
  const param = useParams();
  const navigate = useNavigate();

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
            title: "Chi tiết thiết bị",
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
        <Col span={24} style={{ padding: "0 7rem 0 1rem" }}>
          <Card style={{ minHeight: "70vh", borderRadius: 16 }}>
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
            <Row>
              <Info span={12} label="Mã thiết bị" value={device?.id} />
              <Info span={12} label="Loại thiết bị" value={DEVICE_OPTION_TYPE.find(type => device?.type === type.value)?.label} />
              <Info span={12} label="Tên thiết bị" value={device?.name} />
              <Info span={12} label="Tên đăng nhập" value={device?.username} />
              <Info span={12} label="Địa chỉ IP" value={device?.ip} />
              <Info span={12} label="Mật khẩu" value={device?.password} />
              <Col span={24} style={{ marginBottom: ".75rem" }}>
                <Row>
                  <Typography.Text
                    style={{
                      fontFamily: "Nunito",
                      fontSize: "1rem",
                      fontWeight: 600,
                      marginBottom: ".35rem",
                    }}
                  >{`Dịch vụ sử dụng:`}</Typography.Text>
                </Row>
                <Row>
                  <Typography.Text
                    style={{ fontFamily: "Nunito", fontSize: "1rem" }}
                  >
                    {device?.service.join(', ')}
                  </Typography.Text>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row
        style={{
          position: "absolute",
          right: 0,
          top: "24vh",
          backgroundColor: "#FFF2E7",
          flexDirection: "column",
          padding: "1rem .5rem",
          width: 84,
          borderRadius: "8px 0px 0px 8px",
          boxShadow: "0px 0px 6px #E7E9F2",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => navigate(`/device/update/${device?.id}`)}
      >
        <Row
          className="root_background"
          style={{ padding: ".45rem", borderRadius: 8, width: "fit-content" }}
        >
          <FaPencilAlt style={{ color: "#fff" }} />
        </Row>
        <Row>
          <Typography.Text
            className="root_color"
            style={{
              fontFamily: "Nunito",
              fontSize: "1rem",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Cập nhật thiết bị
          </Typography.Text>
        </Row>
      </Row>
    </Row>
  );
};

export default Detail;
