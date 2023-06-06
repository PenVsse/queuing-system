import React, { useEffect, useState } from "react";
import { Row, Col, Typography } from "antd";
import MyBreadcrumb from "../../components/MyBreadcrumb";
import { useAppSelector } from "../../store/hook";
import SelectDate from "../../components/SelectDate";
import { IReport } from "../../types/pages/report";
import TableData from "./TableData";
import useReport from "../../hooks/useReport";
import { db } from "../../config/firebaseConfig";
import { BsFillSave2Fill } from "react-icons/bs";

const Report: React.FC = () => {
    const [reports, setReports] = useState<IReport[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const { user } = useAppSelector((state) => state.auth);
    const { getReports } = useReport(db);

    const getData = async () => {
        const data = await getReports();
        setReports(data as IReport[]);
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
                        title: "Báo cáo",
                    },
                    {
                        title: "Lập báo cáo",
                    },
                ]}
            />
            <Row style={{ width: "100%", position: "absolute", maxHeight: "100vh" }}>
                <Col span={24} style={{ padding: "6rem 7rem 1rem 1rem" }}>
                    <SelectDate
                        title="Chọn thời gian"
                        styleTitle={{
                            fontFamily: "Nunito",
                            fontSize: "1rem",
                            fontWeight: 600,
                        }}
                        styleDate={{
                            width: 320,
                        }}
                    />
                    <TableData data={reports} loading={loading} />
                </Col>
            </Row>
            <Row
                style={{
                    position: "absolute",
                    right: 0,
                    top: "25vh",
                    backgroundColor: "#FFF2E7",
                    flexDirection: "column",
                    padding: '1rem .5rem',
                    width: 84,
                    borderRadius: '8px 0px 0px 8px',
                    boxShadow: '0px 0px 6px #E7E9F2',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}
            >
                <Row
                    className="root_background"
                    style={{ padding: ".45rem", borderRadius: 8, width: "fit-content" }}
                >
                    <BsFillSave2Fill style={{ color: "#fff" }} />
                </Row>
                <Row>
                    <Typography.Text
                        className="root_color"
                        style={{ fontFamily: "Nunito", fontSize: "1rem", fontWeight: 600, textAlign: 'center' }}
                    >
                        Tải về
                    </Typography.Text>
                </Row>
            </Row>
        </Row>
    );
};

export default Report;