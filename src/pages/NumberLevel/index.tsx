import React, { useEffect, useState } from "react";
import { Row, Col, Typography } from "antd";
import MyBreadcrumb from "../../components/MyBreadcrumb";
import { useAppSelector } from "../../store/hook";
import SearchHeader from "./SearchHeader";
import TableData from "./TableData";
import useAllocationNumber from "../../hooks/useAllocationNumber";
import { db } from "../../config/firebaseConfig";
import { ITableAllocateNumber } from "../../types/pages/allocateNumber";
import { HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const NumberLevel: React.FC = () => {
    const [data, setData] = useState<ITableAllocateNumber[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const { user } = useAppSelector((state) => state.auth);
    const { getAllAllocationNumber } = useAllocationNumber(db);
    const navigate = useNavigate();

    const getData = async () => {
        const dataResp = await getAllAllocationNumber();
        setData(dataResp as ITableAllocateNumber[]);
    };

    useEffect(() => {
        setLoading(true);
        getData().finally(() => setLoading(false));
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
                        title: "Danh sách cấp số",
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
                        Quản lý cấp số
                    </Typography.Title>
                    <SearchHeader />
                    <TableData data={data} loading={loading} />
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
                        Cấp số mới
                    </Typography.Text>
                </Row>
            </Row>
        </Row>
    );
};

export default NumberLevel;