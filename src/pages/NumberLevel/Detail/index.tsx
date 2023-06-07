import React, { useEffect, useState } from "react";
import { Row, Col, Typography, Card, Badge } from "antd";
import MyBreadcrumb from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import { useParams } from "react-router-dom";
import Info from "../../Device/Detail/Info";
import { ITableAllocateNumber } from "../../../types/pages/allocateNumber";
import useAllocationNumber from "../../../hooks/useAllocationNumber";
import { db } from "../../../config/firebaseConfig";
import {
    ALLOCATION_NUMBER_OPTION_ORIGIN,
    ALLOCATION_NUMBER_OPTION_STATUS,
    DEVICE_OPTION_SERVICES,
} from "../../../constants/option";
import { AiOutlineRollback } from "react-icons/ai";

const Detail: React.FC = () => {
    const [AllocationNumber, setAllocationNumber] =
        useState<ITableAllocateNumber | null>(null);
    const { user } = useAppSelector((state) => state.auth);
    const param = useParams();
    const { getAllocationNumberById } = useAllocationNumber(db);

    const getData = async () => {
        if (param.id) {
            const data = await getAllocationNumberById(param.id);
            setAllocationNumber(data as ITableAllocateNumber);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const status = ALLOCATION_NUMBER_OPTION_STATUS.find(
        (opt) => opt.value === AllocationNumber?.status
    )

    return (
        <Row style={{ position: "relative" }}>
            <MyBreadcrumb
                separator=">"
                user={user}
                items={[
                    {
                        title: "Cấp số",
                    },
                    {
                        title: "Danh sách cấp số",
                        href: "/number-level",
                    },
                    {
                        title: "Chi tiết",
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
                        Quản lý cấp số
                    </Typography.Title>
                    <Card style={{ marginTop: "1.5rem", height: "75vh" }}>
                        <Typography.Title
                            className="root_color"
                            style={{
                                fontFamily: "Nunito",
                                fontSize: "1.5rem",
                                fontWeight: 700,
                            }}
                        >
                            Thông tin cấp số
                        </Typography.Title>
                        <Row style={{ width: "100%" }}>
                            <Info
                                span={12}
                                label="Họ tên"
                                value={AllocationNumber?.customerName}
                            />
                            <Info
                                span={12}
                                label="Nguồn cấp"
                                value={
                                    ALLOCATION_NUMBER_OPTION_ORIGIN.find(
                                        (opt) => opt.value === AllocationNumber?.originId
                                    )?.label
                                }
                            />
                            <Info
                                span={12}
                                label="Tên dịch vụ"
                                value={
                                    DEVICE_OPTION_SERVICES.find(
                                        (opt) => opt.value === AllocationNumber?.serviceId
                                    )?.label
                                }
                            />
                            <Info
                                span={12}
                                label="Trạng thái"
                                value={
                                    <>
                                        <Badge
                                            color={status?.color}
                                            status="processing"
                                            style={{ marginRight: ".25rem" }}
                                        />
                                        {status?.label}
                                    </>
                                }
                            />
                            <Info span={12} label="Số thứ tự" value={AllocationNumber?.id} />
                            <Info
                                span={12}
                                label="Số điện thoại"
                                value={AllocationNumber?.phone}
                            />
                            <Info
                                span={12}
                                label="Thời gian cấp"
                                value={AllocationNumber?.date}
                            />
                            <Info span={12} label="Email" value={AllocationNumber?.email} />
                            <Info
                                span={12}
                                label="Hạn sử dụng"
                                value={AllocationNumber?.expiry}
                            />
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row
                style={{
                    position: "absolute",
                    right: 0,
                    top: "22vh",
                    backgroundColor: "#FFF2E7",
                    flexDirection: "column",
                    padding: "1rem .5rem",
                    width: 84,
                    borderRadius: "8px 0px 0px 8px",
                    boxShadow: "0px 0px 6px #E7E9F2",
                    alignItems: "center",
                    cursor: "pointer",
                }}
                onClick={() => history.back()}
            >
                <Row
                    className="root_background"
                    style={{ padding: ".45rem", borderRadius: 8, width: "fit-content" }}
                >
                    <AiOutlineRollback style={{ color: "#fff" }} />
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
                        Quay lại
                    </Typography.Text>
                </Row>
            </Row>
        </Row>
    );
};

export default Detail;