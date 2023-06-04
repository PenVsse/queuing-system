import React from "react";
import { Table, Badge } from "antd";
import {
    IServiceDetailTableProps,
    ServiceDetail,
} from "../../../types/pages/service";
import type { ColumnsType } from "antd/es/table";
import { textFont } from "../../Device/TableData";
import { SERVICE_OPTION_STATUS_DETAIL } from "../../../constants/option";

const TableDetail: React.FC<IServiceDetailTableProps> = ({ data }) => {
    const columns: ColumnsType<ServiceDetail> = [
        {
            title: "Số thứ tự",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
            render: (value) => (
                <div style={{ ...textFont("14px") }}>
                    <Badge
                        color={
                            SERVICE_OPTION_STATUS_DETAIL.find((st) => st.value === value)
                                ?.color
                        }
                        status="processing"
                        style={{ marginRight: ".25rem" }}
                    />
                    {SERVICE_OPTION_STATUS_DETAIL.find((st) => st.value === value)?.label}
                </div>
            ),
        },
    ];

    return <Table columns={columns} dataSource={data} />;
};

export default TableDetail;