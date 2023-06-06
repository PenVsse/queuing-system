import React from "react";
import { Row, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IRole, IRoleTable } from "../../../types/pages/managment";
import { Link } from "react-router-dom";

const TableData: React.FC<IRoleTable> = ({ data, loading }) => {
    const columns: ColumnsType<IRole> = [
        {
            title: "Tên vai trò",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Số người dùng",
            dataIndex: "members",
            key: "members",
        },
        {
            title: "Mô tả",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Cập nhật",
            dataIndex: "update",
            key: "update",
            render: (_, record) => {
                return (
                    <Link
                        style={{ textDecoration: "underline" }}
                        to={`update/${record.id}`}
                    >
                        Cập nhật
                    </Link>
                );
            },
        },
    ];

    return (
        <Row style={{ width: "100%", marginTop: "1rem" }}>
            <Table
                style={{ width: "100%" }}
                columns={columns}
                dataSource={data}
                loading={loading}
            />
        </Row>
    );
};

export default TableData;