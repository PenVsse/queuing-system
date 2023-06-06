import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import MyBreadcrumb from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import SelectDate from "../../../components/SelectDate";
import { textFont } from "../../Device/TableData";
import InputField from "../../../components/InputField";
import { BsSearch } from "react-icons/bs";
import TableData from "./TableData";
import { ILog } from "../../../types/pages/managment";
import useFirestore from "../../../hooks/useFirestore";
import { db } from "../../../config/firebaseConfig";
import { LOGS_COLLECTION } from "../../../constants/firestore";

const Log: React.FC = () => {
    const [logs, setLogs] = useState<ILog[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const { user } = useAppSelector((state) => state.auth);
    const { getAll } = useFirestore(db, LOGS_COLLECTION);

    const getData = async () => {
        const data = await getAll();
        setLogs(data as ILog[]);
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
                        title: "Cài đặt hệ thống",
                    },
                    {
                        title: "Nhật ký hoạt động",
                    },
                ]}
            />
            <Row style={{ width: "100%", position: "absolute", maxHeight: "100vh" }}>
                <Col span={24} style={{ padding: "6rem 7rem 1rem 1rem" }}>
                    <Row
                        style={{
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <SelectDate
                            title="Chọn thời gian"
                            styleTitle={{ ...textFont("1rem") }}
                            styleDate={{ width: 300 }}
                        />
                        <Row style={{ width: 300 }}>
                            <InputField
                                span={24}
                                title="Từ khóa"
                                titleSize={"1rem"}
                                fontWeightTitle={600}
                                value={""}
                                placeholder="Nhập từ khóa"
                                size="large"
                                suffix={
                                    <BsSearch
                                        className="root_color"
                                        style={{ fontSize: "1.25rem" }}
                                    />
                                }
                            />
                        </Row>
                    </Row>
                    <TableData data={logs} loading={loading} />
                </Col>
            </Row>
        </Row>
    );
};

export default Log;