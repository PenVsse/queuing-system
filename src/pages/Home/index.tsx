import { Row, Col, Avatar, Typography } from "antd";

import MyBreadcrumb from "../../components/MyBreadcrumb";
import { useAppSelector } from "../../store/hook";

import defaultAvatar from "../../../public/images/no_avatar.png";
import InputField from "../../components/InputField";

const Home = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div>
      <MyBreadcrumb
        separator=">"
        items={[
          {
            title: "Thông tin cá nhân",
          },
        ]}
        user={user}
      />
      <Row style={{ paddingLeft: '2rem', paddingRight: '6rem' }}>
        <Row
          style={{
            backgroundColor: "#FFFFFF",
            padding: "2rem 1rem",
            marginTop: "5rem",
            borderRadius: 12,
          }}
        >
          <Col
            span={6}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Avatar
              src={defaultAvatar}
              alt="avatar"
              style={{ width: 240, height: 240, objectFit: "contain" }}
            />
            <Typography.Paragraph
              style={{
                fontSize: "1.5rem",
                fontFamily: "Nunito",
                fontWeight: 700,
                margin: ".75rem 0 0 0",
              }}
            >
              {user?.fullName}
            </Typography.Paragraph>
          </Col>
          <Col span={18}>
            <Row justify={"space-evenly"}>
              <InputField
                title="Tên người dùng"
                titleSize={"1rem"}
                value={user?.fullName || ""}
                disabled
                span={11}
                size="large"
              />
              <InputField
                title="Tên đăng nhập"
                titleSize={"1rem"}
                value={user?.userName || ""}
                disabled
                span={11}
                size="large"
              />
              <InputField
                title="Số điện thoại"
                titleSize={"1rem"}
                value={user?.phone || ""}
                disabled
                span={11}
                size="large"
              />
              <InputField
                title="Mật khẩu"
                titleSize={"1rem"}
                value={user?.password || ""}
                disabled
                span={11}
                size="large"
              />
              <InputField
                title="Email"
                titleSize={"1rem"}
                value={user?.email || ""}
                disabled
                span={11}
                size="large"
              />
              <InputField
                title="Vai trò"
                titleSize={"1rem"}
                value={user?.role.name || ""}
                disabled
                span={11}
                size="large"
              />
            </Row>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Home;
