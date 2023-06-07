import { Row, Col, Typography, Calendar, Select } from "antd";
import MyBreadcrumb from "../../components/MyBreadcrumb";
import { useAppSelector } from "../../store/hook";
import ProgressInfo from "./ProgressInfo";
import StaticItem from "./StaticItem";
import { Area } from "@ant-design/plots";

import { DesktopOutlined, WechatOutlined } from "@ant-design/icons";
import { RiStackLine } from "react-icons/ri";
import { BsBookmarkStar, BsCalendar, BsCalendarCheck } from "react-icons/bs";
import { FaUserClock } from "react-icons/fa";
import { useState } from "react";

const wrapperStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  borderRadius: "#FF9138",
};

const OPTION_DATE = [
  { value: 31, label: "Ngày" },
  { value: 7, label: "Tuần" },
  { value: 12, label: "Tháng" },
]

const Dashboard = () => {
  const { user } = useAppSelector((state) => state.auth);

  const [optionValue, setOptionValue] = useState<number>(OPTION_DATE[0].value);

  return (
    <Row>
      <MyBreadcrumb
        separator=">"
        items={[
          {
            title: "Dashboard",
          },
        ]}
        user={user}
      />
      <Row style={{ width: "100%", position: "absolute", maxHeight: "100vh" }}>
        <Col span={16} style={{ padding: "6rem 1rem 1rem 1rem" }}>
          <Typography.Title
            className="root_color"
            style={{
              fontFamily: "Nunito",
              fontSize: "1.75rem",
              fontWeight: 700,
            }}
          >
            Biểu đồ cấp số
          </Typography.Title>
          <Row justify={"space-evenly"}>
            <StaticItem
              span={6}
              icon={
                <div
                  style={{
                    backgroundColor: "rgba(166 194 255 / 49%)",
                    color: "#6695FB",
                    borderRadius: "50%",
                    width: 44,
                    height: 44,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <BsCalendar style={{ width: 20, height: 20 }} />
                </div>
              }
              name="Số thứ tự đã cấp"
              value={4221}
              percent={32.41}
              status="increase"
            />
            <StaticItem
              span={6}
              icon={
                <div
                  style={{
                    backgroundColor: "#E1F7E6",
                    color: "#35C75A",
                    borderRadius: "50%",
                    width: 44,
                    height: 44,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <BsCalendarCheck style={{ width: 20, height: 20 }} />
                </div>
              }
              name="Số thứ tự đã sử dụng"
              value={3721}
              percent={32.41}
              status="decrease"
            />
            <StaticItem
              span={6}
              icon={
                <div
                  style={{
                    backgroundColor: "#FFF3E9",
                    color: "#FFAC6A",
                    borderRadius: "50%",
                    width: 44,
                    height: 44,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaUserClock style={{ width: 20, height: 20 }} />
                </div>
              }
              name="Số thứ tự đã cấp"
              value={468}
              percent={56.41}
              status="increase"
            />
            <StaticItem
              span={6}
              icon={
                <div
                  style={{
                    backgroundColor: "#FEE9E9",
                    color: "#F86D6D",
                    borderRadius: "50%",
                    width: 44,
                    height: 44,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <BsBookmarkStar style={{ width: 20, height: 20 }} />
                </div>
              }
              name="Số thứ tự đã bỏ qua"
              value={32}
              percent={22.41}
              status="decrease"
            />
          </Row>
          <Row
            style={{
              borderRadius: 12,
              backgroundColor: "#fff",
              marginTop: ".5rem",
              padding: "1rem",
            }}
          >
            <Row
              style={{
                marginBottom: "2rem",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Row style={{ flexDirection: "column" }}>
                <Typography.Title
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    fontFamily: "Nunito",
                    marginBottom: "0.5rem",
                  }}
                >
                  {`Bảng thống kê ` + `${OPTION_DATE.find(opt => opt.value === optionValue)?.label}`.toLowerCase()}
                </Typography.Title>
                <Typography.Text
                  style={{ fontFamily: "Nunito", opacity: "0.8" }}
                >
                  Tháng 11/2021
                </Typography.Text>
              </Row>
              <Row style={{ alignItems: "center" }}>
                <Typography.Title
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    fontFamily: "Nunito",
                    margin: 0,
                    height: "fit-content",
                    marginRight: "1rem",
                  }}
                >
                  Xem theo
                </Typography.Title>
                <Select
                  size="large"
                  style={{ width: 120 }}
                  defaultValue={optionValue}
                  options={OPTION_DATE}
                  onChange={(value) => setOptionValue(value)}
                />
              </Row>
            </Row>
            <Area
              style={{
                width: "100%",
                height: "300px",
              }}
              xField="date"
              yField="value"
              data={Array.from({ length: OPTION_DATE.find(opt => opt.value === optionValue)?.value || 0 }, (_, index) => ({
                date: index + 1 + "",
                value: Math.floor(Math.random() * (5000)),
              }))}
            />
          </Row>
        </Col>
        <Col
          span={8}
          style={{
            backgroundColor: "#fff",
            height: "100vh",
            padding: "5rem 1rem 1rem 1rem",
            overflowY: "scroll",
          }}
        >
          <Typography.Title
            className="root_color"
            style={{
              fontFamily: "Nunito",
              fontSize: "1.75rem",
              fontWeight: 700,
            }}
          >
            Tổng quan
          </Typography.Title>
          <ProgressInfo
            icon={<DesktopOutlined />}
            name="Thiết bị"
            percent={90}
            total={4221}
            color="#FF9138"
            status={[
              {
                colorStatus: "#FF9138",
                colorValue: "#FF9138",
                name: "Đang hoạt động",
                quantity: 3799,
              },
              {
                colorStatus: "#7E7D88",
                colorValue: "#FF9138",
                name: "Ngưng hoạt động",
                quantity: 422,
              },
            ]}
          />
          <ProgressInfo
            icon={<WechatOutlined />}
            name="Dịch vụ"
            percent={76}
            total={276}
            color="#4277FF"
            status={[
              {
                colorStatus: "#4277FF",
                colorValue: "#4277FF",
                name: "Đang hoạt động",
                quantity: 210,
              },
              {
                colorStatus: "#7E7D88",
                colorValue: "#4277FF",
                name: "Ngưng hoạt động",
                quantity: 66,
              },
            ]}
          />
          <ProgressInfo
            icon={<RiStackLine />}
            name="Cấp số"
            percent={86}
            total={4221}
            color="#35C75A"
            status={[
              {
                colorStatus: "#35C75A",
                colorValue: "#35C75A",
                name: "Đã sử dụng",
                quantity: 3721,
              },
              {
                colorStatus: "#7E7D88",
                colorValue: "#35C75A",
                name: "Đang chờ",
                quantity: 486,
              },
              {
                colorStatus: "#FF9138",
                colorValue: "#35C75A",
                name: "Bỏ qua",
                quantity: 32,
              },
            ]}
          />
          <Row
            style={{
              borderRadius: 12,
              boxShadow: "2px 2px 15px rgba(70, 64, 67, 0.1)",
              padding: "1rem",
            }}
          >
            <div style={wrapperStyle}>
              <Calendar fullscreen={false} />
            </div>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default Dashboard;