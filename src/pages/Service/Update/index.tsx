import { Row, Col, Typography, Card, Checkbox, Space, Button } from "antd";
import React, { useEffect, useState } from "react";
import MyBreadcrumb from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import AllocateNumber from "../AllocateNumber";
import TextAreaField from "../../../components/TextAreaField";
import InputField from "../../../components/InputField";
import { ServiceTable } from "../../../types/pages/service";
import useService from "../../../hooks/useService";
import { db } from "../../../config/firebaseConfig";
import { useParams } from "react-router-dom";

const Update: React.FC = () => {
    const [service, setService] = useState<ServiceTable | null>(null);
    const { user } = useAppSelector((state) => state.auth);
    const { getServiceById } = useService(db);
    const param = useParams();

    const getData = async () => {
        if (param.id) {
            const data = await getServiceById(param.id);
            setService(data as ServiceTable);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Row style={{ position: "relative" }}>
            <MyBreadcrumb
                separator=">"
                user={user}
                items={[
                    {
                        title: "Dịch vụ",
                    },
                    {
                        title: "Danh sách dịch vụ",
                        href: "/service",
                    },
                    {
                        title: "Thêm dịch vụ",
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
                        Quản lý dịch vụ
                    </Typography.Title>
                </Col>
                <Col span={24} style={{ padding: "0 4rem 0 1rem" }}>
                    {service && (
                        <Card style={{ minHeight: "fit-content", borderRadius: 16 }}>
                            <Typography.Title
                                className="root_color"
                                style={{
                                    fontFamily: "Nunito",
                                    fontSize: "1.45rem",
                                    fontWeight: 700,
                                    marginBottom: "1rem",
                                }}
                            >
                                Thông tin dịch vụ
                            </Typography.Title>
                            <Row style={{ width: "100%" }}>
                                <Row style={{ width: "50%", paddingRight: ".5rem" }}>
                                    <InputField
                                        title={
                                            <>
                                                {`Mã dịch vụ: `}
                                                <label style={{ color: "red" }}>*</label>
                                            </>
                                        }
                                        titleSize="1rem"
                                        defaultValue={service.id}
                                        fontWeightTitle={600}
                                        size="middle"
                                        span={24}
                                        placeholder="Nhập mã dịch vụ"
                                    />
                                    <InputField
                                        title={
                                            <>
                                                {`Tên dịch vụ: `}
                                                <label style={{ color: "red" }}>*</label>
                                            </>
                                        }
                                        titleSize="1rem"
                                        defaultValue={service.name}
                                        fontWeightTitle={600}
                                        size="middle"
                                        span={24}
                                        placeholder="Nhập tên dịch vụ"
                                    />
                                </Row>
                                <Row style={{ width: "50%", paddingLeft: ".5rem" }}>
                                    <TextAreaField
                                        title="Mô tả"
                                        titleSize="1rem"
                                        defaultValue={service.description}
                                        fontWeightTitle={600}
                                        size="middle"
                                        span={24}
                                        placeholder="Mô tả dịch vụ"
                                    />
                                </Row>
                            </Row>
                            <Typography.Title
                                className="root_color"
                                style={{
                                    fontFamily: "Nunito",
                                    fontSize: "1.45rem",
                                    fontWeight: 700,
                                    marginBottom: "1rem",
                                }}
                            >
                                Quy tắc cấp số
                            </Typography.Title>
                            <AllocateNumber
                                icon={
                                    <span style={{ marginRight: 8 }}>
                                        <Checkbox />
                                    </span>
                                }
                                label_1="Tăng tự động từ:"
                                styleLabel={{
                                    fontFamily: "Nunito",
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                }}
                                from={1}
                                label_2="đến"
                                to={999}
                            />
                            <AllocateNumber
                                icon={
                                    <span style={{ marginRight: 8 }}>
                                        <Checkbox />
                                    </span>
                                }
                                label_1="Prefix:"
                                styleLabel={{
                                    fontFamily: "Nunito",
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                }}
                                from={1}
                            />
                            <AllocateNumber
                                icon={
                                    <span style={{ marginRight: 8 }}>
                                        <Checkbox />
                                    </span>
                                }
                                label_1="Surfix:"
                                styleLabel={{
                                    fontFamily: "Nunito",
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                }}
                                from={1}
                            />
                            <AllocateNumber
                                icon={
                                    <span style={{ marginRight: 8 }}>
                                        <Checkbox />
                                    </span>
                                }
                                label_1="Reset mỗi ngày"
                                styleLabel={{
                                    fontFamily: "Nunito",
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                }}
                            />
                            <Row
                                style={{ width: "100%", marginTop: "1rem", marginBottom: "2rem" }}
                            >
                                <label style={{ color: "red", marginRight: ".25rem" }}>*</label>
                                <Typography.Text
                                    style={{ fontFamily: "Nunito", color: "#7E7D88" }}
                                >
                                    Là trường thông tin bắt buộc
                                </Typography.Text>
                            </Row>
                        </Card>
                    )}
                    <Row justify="center" style={{ marginTop: "1rem" }}>
                        <Space size={24}>
                            <Button
                                size="large"
                                style={{ padding: "0 2rem" }}
                                onClick={() => history.back()}
                            >
                                Hủy bỏ
                            </Button>
                            <Button type="primary" size="large" style={{ padding: "0 2rem" }}>
                                Thêm dịch vụ
                            </Button>
                        </Space>
                    </Row>
                </Col>
            </Row>
        </Row>
    );
};

export default Update;