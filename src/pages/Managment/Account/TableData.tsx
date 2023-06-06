import React from "react";
import { Row, Table, Badge } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IUser, IUserTable } from "../../../types/auth";
import { SERVICE_OPTION_STATUS } from "../../../constants/option";
import { Link } from "react-router-dom";
import { textFont } from "../../Device/TableData";

const TableData: React.FC<IUserTable> = ({ data, loading }) => {
    const columns: ColumnsType<IUser> = [
        {
            title: "Tên đăng nhập",
            dataIndex: "userName",
            key: "userName",
        },
        {
            title: "Họ tên",
            dataIndex: "fullName",
            key: "fullName",
        },
        {
            title: "Số điện thoại",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Vai trò",
            dataIndex: "role",
            key: "role",
            render: (role: { id: number; name: string }) => {
                return role.name;
            },
        },
        {
            title: "Trạng thái hoạt động",
            dataIndex: "status",
            key: "status",
            render: (value: number) => {
                const status = SERVICE_OPTION_STATUS.find(
                    (status) => status.value === value
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
                    <Link
                        to={`update/${record.userName}`}
                        style={{ textDecoration: "underline" }}
                    >
                        Chi tiết
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