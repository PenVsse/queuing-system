import React, { useEffect, useState } from "react";
import { Row, Col, Typography } from "antd";
import MyBreadcrumb from "../../components/MyBreadcrumb";
import { useAppSelector } from "../../store/hook";
import SearchHeader from "./SearchHeader";
import TableData from "./TableData";
import { HiPlus } from "react-icons/hi";
import { DeviceTable } from "../../types/pages/device";
import { useDevice } from "../../hooks/useDevice";
import { db } from "../../config/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Device: React.FC = () => {

  const [devices, setDevices] = useState<DeviceTable[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { getDevices } = useDevice(db);
  const navigate = useNavigate();

  const getData = async () => {
    const data = await getDevices();
    const dataTable = data.map(device => ({ ...device, key: device.id }));
    setDevices(dataTable as DeviceTable[]);
  }

  console.log(devices);
  

  useEffect(() => {
    setIsLoading(true);
    getData().finally(() => setIsLoading(false));
  }, [])

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
            title: "Danh sách thiết bị",
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
            }}
          >
            Danh sách thiết bị
          </Typography.Title>
          <SearchHeader />
          <TableData data={devices} loading={isLoading} />
        </Col>
      </Row>
      <Row
        style={{
          position: "absolute",
          right: 0,
          top: "36vh",
          backgroundColor: "#FFF2E7",
          flexDirection: "column",
          padding: '1rem .5rem',
          width: 84,
          borderRadius: '8px 0px 0px 8px',
          boxShadow: '0px 0px 6px #E7E9F2',
          alignItems: 'center',
          cursor: 'pointer'
        }}
        onClick={() => navigate('create')}
      >
        <Row
          className="root_background"
          style={{ padding: ".45rem", borderRadius: 8, width: "fit-content" }}
        >
          <HiPlus style={{ color: "#fff" }} />
        </Row>
        <Row>
          <Typography.Text
            className="root_color"
            style={{ fontFamily: "Nunito", fontSize: "1rem", fontWeight: 600, textAlign: 'center' }}
          >
            Thêm thiết bị
          </Typography.Text>
        </Row>
      </Row>
    </Row>
  );
};

export default Device;
