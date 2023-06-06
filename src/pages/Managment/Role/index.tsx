import React, { useEffect, useState } from "react";
import { Row, Col, Typography } from "antd";
import MyBreadcrumb from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import InputField from "../../../components/InputField";
import { BsSearch } from "react-icons/bs";
import useFirestore from "../../../hooks/useFirestore";
import { db } from "../../../config/firebaseConfig";
import { ROLES_COLLECTION } from "../../../constants/firestore";
import { IRole } from "../../../types/pages/managment";
import TableData from "./TableData";
import { useNavigate } from "react-router-dom";
import { HiPlus } from "react-icons/hi";

const Role: React.FC = () => {
    const [roles, setRoles] = useState<IRole[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const { user } = useAppSelector((state) => state.auth);
    const { getAll } = useFirestore(db, ROLES_COLLECTION);
    const navigate = useNavigate();

    const getData = async () => {
        const data = await getAll();
        setRoles(data as IRole[]);
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
                        title: "Quản lý vai trò",
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
                            marginBottom: 0,
                        }}
                    >
                        Danh sách vai trò
                    </Typography.Title>
                    <Row style={{ width: "100%", justifyContent: "space-between" }}>
                        <div></div>
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
                    <TableData data={roles} loading={loading} />
                </Col>
            </Row>
            <Row
                style={{
                    position: "absolute",
                    right: 0,
                    top: "32vh",
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
                        Thêm vai trò
                    </Typography.Text>
                </Row>
            </Row>
        </Row>
    );
};

export default Role;