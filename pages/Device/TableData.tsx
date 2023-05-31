import React from "react";
import { Row, Table, Badge } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DeviceTable, IDeviceTableProps } from "../../types/pages/device";
import {
  DEVICE_OPTION_STATUS_ACTIVE,
  DEVICE_OPTION_STATUS_CONNECT,
} from "../../constants/option";
import { Link } from "react-router-dom";

const textFont = (size?: string | number) => ({
  fontFamily: "Nunito",
  fontWeight: 600,
  fontSize: size,
});

const TableData: React.FC<IDeviceTableProps> = ({ data, loading }) => {
  const columns: ColumnsType<DeviceTable> = [
    {
      title: "Mã thiết bị",
      dataIndex: "id",
      key: "id",
      render: (params) => {
        return <div style={{ ...textFont("14px") }}>{params}</div>;
      },
    },
    {
      title: "Tên thiết bị",
      dataIndex: "name",
      key: "name",
      render: (params) => {
        return <div style={{ ...textFont("14px") }}>{params}</div>;
      },
    },
    {
      title: "Địa chỉ IP",
      dataIndex: "ip",
      key: "ip",
      render: (params) => {
        return <div style={{ ...textFont("14px") }}>{params}</div>;
      },
    },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "statusActive",
      key: "statusActive",
      render: (params) => {
        const status = DEVICE_OPTION_STATUS_ACTIVE.find(
          (status) => status.value === params
        );
        return (
          <div style={{ ...textFont("14px") }}>
            <Badge
              color={status?.color}
              status="processing"
              style={{ marginRight: ".25rem" }}
            />
            {status?.label}
          </div>
        );
      },
    },
    {
      title: "Trạng thái kết nối",
      dataIndex: "statusConnect",
      key: "statusConnect",
      render: (params) => {
        const status = DEVICE_OPTION_STATUS_CONNECT.find(
          (status) => status.value === params
        );
        return (
          <div style={{ ...textFont("14px") }}>
            <Badge
              color={status?.color}
              status="processing"
              style={{ marginRight: ".25rem" }}
            />
            {status?.label}
          </div>
        );
      },
    },
    {
      title: "Dịch vụ sử dụng",
      dataIndex: "service",
      key: "service",
      render: (params) => {
        return <div style={{ ...textFont("14px") }}>{params.join(", ")}</div>;
      },
    },
    {
      title: "Chi tiết",
      dataIndex: "detail",
      key: "detail",
      render: (_, record) => {
        return(
            <Link to={`detail/${record.id}`} style={{ textDecoration: 'underline' }}>Chi tiết</Link>
            )
      }
    },
    {
      title: "Cập nhật",
      dataIndex: "update",
      key: "update",
      render: (_, record) => {
        return(
            <Link to={`update/${record.id}`} style={{ textDecoration: 'underline' }}>Cập nhật</Link>
            )
      }
    },
  ];

  return (
    <Row style={{ width: "100%", marginTop: "1rem" }}>
      <Table style={{ width: "100%" }} columns={columns} dataSource={data} loading={loading}/>
    </Row>
  );
};

export default TableData;
