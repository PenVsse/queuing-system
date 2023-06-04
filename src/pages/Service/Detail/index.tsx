import { Col, Row, Typography, Card, Space, Divider } from "antd";
import React, { useEffect, useState } from "react";
import MyBreadcrumb from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import Info from "../../Device/Detail/Info";
import { useNavigate, useParams } from "react-router-dom";
import useService from "../../../hooks/useService";
import { db } from "../../../config/firebaseConfig";
import { ServiceTable } from "../../../types/pages/service";
import AllocateNumber from "../AllocateNumber";
import SelectField from "../../../components/SelectField";
import SelectDate from "../../../components/SelectDate";
import InputField from "../../../components/InputField";
import { BsPen, BsSearch } from "react-icons/bs";
import { SERVICE_OPTION_STATUS_DETAIL } from "../../../constants/option";
import TableDetail from "./TableDetail";
import { AiOutlineRollback } from "react-icons/ai";

const Detail: React.FC = () => {
    const [service, setService] = useState<ServiceTable | null>(null);
    const { user } = useAppSelector((state) => state.auth);
    const param = useParams();
    const { getServiceById } = useService(db);
    const navigate = useNavigate();

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
                        title: "Thiết bị",
                    },
                    {
                        title: "Danh sách thiết bị",
                        href: "/device",
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
                            marginBottom: "2rem",
                        }}
                    >
                        Quản lý dịch vụ
                    </Typography.Title>
                    <Row style={{ width: "100%" }}>
                        <Col span={9} style={{ paddingRight: "0.5rem" }}>
                            <Card style={{ minHeight: "75vh" }}>
                                {service && (
                                    <Row>
                                        <Typography.Title
                                            className="root_color"
                                            style={{
                                                fontFamily: "Nunito",
                                                fontSize: "1.45rem",
                                                fontWeight: 700,
                                            }}
                                        >
                                            Quản lý dịch vụ
                                        </Typography.Title>
                                        <Info label="Mã dịch vụ" value={service.id} span={24} />
                                        <Info label="Tên dịch vụ" value={service.name} span={24} />
                                        <Info label="Mô tả" value={service.description} span={24} />
                                        <Typography.Title
                                            className="root_color"
                                            style={{
                                                fontFamily: "Nunito",
                                                fontSize: "1.45rem",
                                                fontWeight: 700,
                                            }}
                                        >
                                            Quy tắc cấp số
                                        </Typography.Title>
                                        <Col span={24}>
                                            <AllocateNumber
                                                label_1="Tăng tự động:"
                                                from={1}
                                                label_2="đến"
                                                to={999}
                                                styleLabel={{
                                                    fontFamily: "Nunito",
                                                    fontWeight: 600,
                                                    fontSize: "1rem",
                                                }}
                                            />
                                        </Col>
                                        <Col span={24}>
                                            <AllocateNumber
                                                label_1="Prefix:"
                                                from={1}
                                                styleLabel={{
                                                    fontFamily: "Nunito",
                                                    fontWeight: 600,
                                                    fontSize: "1rem",
                                                }}
                                            />
                                        </Col>
                                        <Col span={24}>
                                            <AllocateNumber
                                                label_1="Reset mỗi ngày"
                                                styleLabel={{
                                                    fontFamily: "Nunito",
                                                    fontWeight: 600,
                                                    fontSize: "1rem",
                                                }}
                                            />
                                        </Col>
                                        <Col span={24}>
                                            <AllocateNumber
                                                label_1="Ví dụ: 201 - 2021"
                                                styleLabel={{
                                                    fontFamily: "Nunito",
                                                    fontSize: "1rem",
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                )}
                            </Card>
                        </Col>
                        <Col span={15} style={{ paddingLeft: ".5rem" }}>
                            <Card>
                                <Space>
                                    <SelectField
                                        title="Trạng thái"
                                        styleTitle={{
                                            fontFamily: "Nunito",
                                            fontSize: "1rem",
                                            fontWeight: 600,
                                        }}
                                        styleSelect={{
                                            width: 150,
                                        }}
                                        size="large"
                                        options={SERVICE_OPTION_STATUS_DETAIL}
                                        defaultValue={SERVICE_OPTION_STATUS_DETAIL[0].value}
                                    />
                                    <SelectDate
                                        title="Chọn thời gian"
                                        styleTitle={{
                                            fontFamily: "Nunito",
                                            fontSize: "1rem",
                                            fontWeight: 600,
                                        }}
                                        styleDate={{
                                            width: 300,
                                        }}
                                    />
                                    <InputField
                                        title="Từ khóa"
                                        titleSize={"1rem"}
                                        size="large"
                                        fontWeightTitle={600}
                                        placeholder="Nhập từ khóa"
                                        suffix={<BsSearch className="root_color" />}
                                    />
                                </Space>
                                {service && <TableDetail data={service?.list} />}
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row
                style={{
                    position: "absolute",
                    right: 0,
                    top: "36vh",
                    backgroundColor: "#FFF2E7",
                    flexDirection: "column",
                    padding: "1rem .5rem",
                    width: 90,
                    borderRadius: "8px 0px 0px 8px",
                    boxShadow: "0px 0px 6px #E7E9F2",
                    alignItems: "center",
                    cursor: "pointer",
                }}
            >
                <Row justify={'center'} onClick={() => navigate(`/service/update/${service?.id}`)}>
                    <Row
                        className="root_background"
                        style={{ padding: ".45rem", borderRadius: 8, width: "fit-content" }}
                    >
                        <BsPen style={{ color: "#fff" }} />
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
                            Cập nhật danh sách
                        </Typography.Text>
                    </Row>
                </Row>
                <Divider />
                <Row justify={'center'} onClick={() => history.back()}>
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
        </Row>
    );
};

export default Detail;