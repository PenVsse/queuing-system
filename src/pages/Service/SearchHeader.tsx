import { Row, Space } from "antd";
import React, { CSSProperties } from "react";
import { SearchOutlined } from "@ant-design/icons";

import SelectField from "../../components/SelectField";
import SelectDate from "../../components/SelectDate";
import InputField from "../../components/InputField";
import { SERVICE_OPTION_STATUS } from "../../constants/option";

const styleFont: CSSProperties = {
    fontFamily: "Nunito",
};

const SearchHeader: React.FC = () => {
    return (
        <Row justify="space-between">
            <Row>
                <Space size={24}>
                    <SelectField
                        title="Trạng thái hoạt động"
                        styleSelect={{
                            ...styleFont,
                            fontSize: "1rem",
                            width: 300,
                        }}
                        styleTitle={{
                            ...styleFont,
                            fontSize: "1rem",
                            fontWeight: 600,
                            marginBottom: ".25rem",
                        }}
                        size="large"
                        options={SERVICE_OPTION_STATUS}
                        defaultValue={SERVICE_OPTION_STATUS[0].value}
                    />
                    <SelectDate
                        title="Chọn thời gian"
                        styleTitle={{
                            ...styleFont,
                            fontSize: "1rem",
                            fontWeight: 600,
                            marginBottom: ".25rem",
                        }}
                        styleDate={{
                            fontSize: "1rem",
                            width: 300,
                        }}
                    />
                </Space>
            </Row>
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
                        <SearchOutlined
                            className="root_color"
                            style={{ fontSize: "1.25rem" }}
                        />
                    }
                />
            </Row>
        </Row>
    );
};

export default SearchHeader;