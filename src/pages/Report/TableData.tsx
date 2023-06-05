import React from "react";
import { Row, Table, Badge } from "antd";
import { IReport, IReportTable } from "../../types/pages/report";
import type { ColumnsType } from "antd/es/table";
import {
    ALLOCATION_NUMBER_OPTION_ORIGIN,
    ALLOCATION_NUMBER_OPTION_STATUS,
    DEVICE_OPTION_SERVICES,
} from "../../constants/option";
import { textFont } from "../Device/TableData";

const TableData: React.FC<IReportTable> = ({ data, loading }) => {
    const columns: ColumnsType<IReport> = [
        {
            title: "Số thứ tự",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Tên dịch vụ",
            dataIndex: "serviceId",
            key: "serviceId",
            render: (value) =>
                DEVICE_OPTION_SERVICES.find((opt) => opt.value === value)?.label,
        },
        {
            title: "Thời gian cấp",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Tình trạng",
            dataIndex: "status",
            key: "status",
            render: (value) => {
                const status = ALLOCATION_NUMBER_OPTION_STATUS.find(
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
            title: "Nguồn cấp",
            dataIndex: "originId",
            key: "originId",
            render: (value) =>
                ALLOCATION_NUMBER_OPTION_ORIGIN.find((opt) => opt.value === value)
                    ?.label,
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