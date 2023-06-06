import React from "react";
import { Row, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { ILog, ILogTable } from "../../../types/pages/managment";

const TableData: React.FC<ILogTable> = ({ data, loading }) => {
    const columns: ColumnsType<ILog> = [
        {
            title: "Tên đăng nhập",
            dataIndex: "username",
            key: "username",
        },
        {
            title: "Thời gian tác động",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "IP thực hiện",
            dataIndex: "ip",
            key: "ip",
        },
        {
            title: "Thao tác thực hiện",
            dataIndex: "description",
            key: "description",
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