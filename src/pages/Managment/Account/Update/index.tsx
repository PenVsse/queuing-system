import React, { useEffect, useState } from "react";
import { Row, Col, Typography, Card, Space, Button } from "antd";
import { useAppSelector } from "../../../../store/hook";
import MyBreadcrumb from "../../../../components/MyBreadcrumb";
import { useParams } from "react-router-dom";
import InputField from "../../../../components/InputField";
import { IUser } from "../../../../types/auth";
import useFirestore from "../../../../hooks/useFirestore";
import { db } from "../../../../config/firebaseConfig";
import { USER_COLLECTION } from "../../../../constants/firestore";
import { where } from "firebase/firestore";
import SelectField from "../../../../components/SelectField";
import { textFont } from "../../../Device/TableData";
import {
    OPTION_ROLES,
    SERVICE_OPTION_STATUS,
} from "../../../../constants/option";

const Update: React.FC = () => {
    const [account, setAccount] = useState<IUser | null>(null);
    const { user } = useAppSelector((state) => state.auth);
    const param = useParams();
    const { getById } = useFirestore(db, USER_COLLECTION);

    const getData = async () => {
        if (param.id) {
            const data = await getById(where("userName", "==", param.id));
            setAccount(data as IUser);
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
                        title: "Cài đặt hệ thống",
                    },
                    {
                        title: "Quản lý tài khoản",
                        href: "/managment-account",
                    },
                    {
                        title: "Cập nhật tài khoản",
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
                            marginBottom: "1.5rem",
                        }}
                    >
                        Quản lý tài khoản
                    </Typography.Title>
                    {account && (
                        <Card style={{ height: "65vh" }}>
                            <Typography.Title
                                className="root_color"
                                style={{
                                    fontFamily: "Nunito",
                                    fontSize: "1.5rem",
                                    fontWeight: 700,
                                }}
                            >
                                Thông tin tài khoản
                            </Typography.Title>
                            <Row style={{ width: "100%", justifyContent: "space-between" }}>
                                <InputField
                                    title={
                                        <>
                                            {`Họ tên: `}
                                            <label style={{ color: "red" }}>*</label>
                                        </>
                                    }
                                    titleSize={"1rem"}
                                    span={11}
                                    defaultValue={account?.fullName}
                                />
                                <InputField
                                    title={
                                        <>
                                            {`Tên đăng nhập: `}
                                            <label style={{ color: "red" }}>*</label>
                                        </>
                                    }
                                    titleSize={"1rem"}
                                    span={11}
                                    defaultValue={account?.userName}
                                />
                                <InputField
                                    title={
                                        <>
                                            {`Số điện thoại: `}
                                            <label style={{ color: "red" }}>*</label>
                                        </>
                                    }
                                    titleSize={"1rem"}
                                    span={11}
                                    defaultValue={account?.phone}
                                />
                                <InputField
                                    title={
                                        <>
                                            {`Mật khẩu: `}
                                            <label style={{ color: "red" }}>*</label>
                                        </>
                                    }
                                    titleSize={"1rem"}
                                    span={11}
                                    defaultValue={account?.password}
                                    type="password"
                                />
                                <InputField
                                    title={
                                        <>
                                            {`Email: `}
                                            <label style={{ color: "red" }}>*</label>
                                        </>
                                    }
                                    titleSize={"1rem"}
                                    span={11}
                                    defaultValue={account?.email}
                                />
                                <InputField
                                    title={
                                        <>
                                            {`Nhập lại mật khẩu: `}
                                            <label style={{ color: "red" }}>*</label>
                                        </>
                                    }
                                    titleSize={"1rem"}
                                    span={11}
                                    defaultValue={account?.password}
                                    type="password"
                                />
                                <Col span={11}>
                                    <SelectField
                                        title={
                                            <>
                                                {`Vai trò: `}
                                                <label style={{ color: "red" }}>*</label>
                                            </>
                                        }
                                        styleTitle={{ ...textFont("1rem") }}
                                        styleSelect={{ width: "100%" }}
                                        options={OPTION_ROLES}
                                        defaultValue={OPTION_ROLES[1].value}
                                    />
                                </Col>
                                <Col span={11}>
                                    <SelectField
                                        title={
                                            <>
                                                {`Tình trạng: `}
                                                <label style={{ color: "red" }}>*</label>
                                            </>
                                        }
                                        styleTitle={{ ...textFont("1rem") }}
                                        styleSelect={{ width: "100%" }}
                                        options={SERVICE_OPTION_STATUS}
                                        defaultValue={
                                            SERVICE_OPTION_STATUS.find(
                                                (status) => status.value === account.status
                                            )?.value
                                        }
                                    />
                                </Col>
                                <Col
                                    span={24}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: "1.5rem",
                                    }}
                                >
                                    <label style={{ color: "red", marginRight: ".5rem" }}>
                                        *
                                    </label>
                                    <Typography.Text
                                        style={{ fontFamily: "Nunito", fontWeight: 500 }}
                                    >
                                        Là trường thông tin bắt buộc
                                    </Typography.Text>
                                </Col>
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
                                Cập nhật
                            </Button>
                        </Space>
                    </Row>
                </Col>
            </Row>
        </Row>
    );
};

export default Update;