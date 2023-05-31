import React from "react"
import { Row, Col, Typography, Space, Button, Card } from 'antd';
import MyBreadcrumb from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import InputField from "../../../components/InputField";
import { DEVICE_OPTION_SERVICES, DEVICE_OPTION_TYPE } from "../../../constants/option";
import SelectField from "../../../components/SelectField";
import SelectMulti from "../../../components/SelectMulti";

const Create:React.FC = () => {

    const { user } = useAppSelector(state => state.auth);

    return(
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
            title: "Thêm thiết bị",
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
            Quản lý thiết bị
          </Typography.Title>
        </Col>
        <Col span={24} style={{ padding: "0 4rem 0 1rem" }}>
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
              Thông tin thiết bị
            </Typography.Title>
            <Row justify="space-between">
              <InputField
                title={
                  <>
                    {`Mã thiết bị: `}
                    <label style={{ color: "red" }}>*</label>
                  </>
                }
                titleSize="1rem"
                defaultValue={''}
                fontWeightTitle={600}
                size="middle"
                span={11}
                placeholder="Nhập mã thiết bị"
              />
              <Col
                span={11}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                  <SelectField
                    title={
                      <>
                        {`Loại thiết bị: `}
                        <label style={{ color: "red" }}>*</label>
                      </>
                    }
                    styleSelect={{
                      width: "100%",
                      fontFamily: "Nunito",
                    }}
                    styleTitle={{
                      fontFamily: "Nunito",
                      fontSize: "1rem",
                      fontWeight: 600,
                    }}
                    options={DEVICE_OPTION_TYPE}
                    placeholder="Chọn loại thiết bị"
                  />
              </Col>
              <InputField
                title={
                  <>
                    {`Tên thiết bị: `}
                    <label style={{ color: "red" }}>*</label>
                  </>
                }
                titleSize="1rem"
                defaultValue={''}
                fontWeightTitle={600}
                size="middle"
                span={11}
                placeholder="Nhập tên thiết bị"
              />
              <InputField
                title={
                  <>
                    {`Tên đăng nhập: `}
                    <label style={{ color: "red" }}>*</label>
                  </>
                }
                titleSize="1rem"
                defaultValue={''}
                fontWeightTitle={600}
                size="middle"
                span={11}
                placeholder="Nhập tài khoản"
              />
              <InputField
                title={
                  <>
                    {`Địa chỉ IP: `}
                    <label style={{ color: "red" }}>*</label>
                  </>
                }
                titleSize="1rem"
                defaultValue={''}
                fontWeightTitle={600}
                size="middle"
                span={11}
                placeholder="Nhập địa chỉ IP"
              />
              <InputField
                title={
                  <>
                    {`Mật khẩu: `}
                    <label style={{ color: "red" }}>*</label>
                  </>
                }
                titleSize="1rem"
                defaultValue={''}
                fontWeightTitle={600}
                size="middle"
                span={11}
                placeholder="Nhập mật khẩu"
              />
            </Row>
            <SelectMulti
              title={
                <>
                  {`Dịch vụ sử dụng: `}
                  <label style={{ color: "red" }}>*</label>
                </>
              }
              style={{ width: "100%" }}
              titleSize={"1rem"}
              fontWeightTitle={600}
              span={24}
              placeholder="Chọn dịch vụ"
              options={DEVICE_OPTION_SERVICES}
            />
            <Row
              style={{ width: "100%", marginTop: "1rem", marginBottom: "2rem" }}
            >
              <label style={{ color: "red", marginRight: ".25rem" }}>*</label>
              <Typography.Text
                style={{ fontFamily: "Nunito", color: "#7E7D88" }}
              >
                Là trường bắt buộc
              </Typography.Text>
            </Row>
          </Card>
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
                Thêm thiết bị
              </Button>
            </Space>
          </Row>
        </Col>
      </Row>
    </Row>
    )
}

export default Create;