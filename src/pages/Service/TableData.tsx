import React from "react";
import { Row, Table, Badge } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
    SERVICE_OPTION_STATUS,
} from "../../constants/option";
import { Link } from "react-router-dom";
import { IServiceTableProps, ServiceTable } from "../../types/pages/service";

const textFont = (size?: string | number) => ({
    fontFamily: "Nunito",
    fontWeight: 600,
    fontSize: size,
});

const TableData: React.FC<IServiceTableProps> = ({ data, loading }) => {
    const columns: ColumnsType<ServiceTable> = [
        {
            title: "Mã dịch vụ",
            dataIndex: "id",
            key: "id",
            render: (params) => {
                return <div style={{ ...textFont("14px") }}>{params}</div>;
            },
        },
        {
            title: "Tên dịch vụ",
            dataIndex: "name",
            key: "name",
            render: (params) => {
                return <div style={{ ...textFont("14px") }}>{params}</div>;
            },
        },
        {
            title: "Mô tả",
            dataIndex: "description",
            key: "description",
            render: (params) => {
                return <div style={{ ...textFont("14px") }}>{params}</div>;
            },
        },
        {
            title: "Trạng thái hoạt động",
            dataIndex: "status",
            key: "status",
            render: (params) => {
                const status = SERVICE_OPTION_STATUS.find(
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
            title: "Chi tiết",
            dataIndex: "detail",
            key: "detail",
            render: (_, record) => {
                return (
                    <Link to={`detail/${record.id}`} style={{ textDecoration: 'underline' }}>Chi tiết</Link>
                )
            }
        },
        {
            title: "Cập nhật",
            dataIndex: "update",
            key: "update",
            render: (_, record) => {
                return (
                    <Link to={`update/${record.id}`} style={{ textDecoration: 'underline' }}>Cập nhật</Link>
                )
            }
        },
    ];

    return (
        <Row style={{ width: "100%", marginTop: "1rem" }}>
            <Table style={{ width: "100%" }} columns={columns} dataSource={data} loading={loading} />
        </Row>
    );
};

export default TableData;