import { Row, Space } from "antd";
import React from "react";
import SelectField from "../../components/SelectField";
import { textFont } from "../Device/TableData";
import {
    ALLOCATION_NUMBER_OPTION_ORIGIN,
    ALLOCATION_NUMBER_OPTION_STATUS,
    DEVICE_OPTION_SERVICES,
} from "../../constants/option";
import SelectDate from "../../components/SelectDate";
import InputField from "../../components/InputField";
import { BsSearch } from "react-icons/bs";

type ISearchHeaderProps = {
    status: number;
    setStatus: React.Dispatch<React.SetStateAction<number>>
}

const SearchHeader: React.FC<ISearchHeaderProps> = ({ status, setStatus }) => {
    return (
        <Row justify={'space-between'}>
            <Space>
                <SelectField
                    title="Tên dịch vụ"
                    styleTitle={{
                        ...textFont("1rem"),
                        fontWeight: 600,
                    }}
                    styleSelect={{
                        width: 170,
                    }}
                    size="large"
                    options={[{ value: 0, label: "Tất cả" }, ...DEVICE_OPTION_SERVICES]}
                    defaultValue={0}
                />
                <SelectField
                    title="Tình trạng"
                    styleTitle={{
                        ...textFont("1rem"),
                        fontWeight: 600,
                    }}
                    styleSelect={{
                        width: 170,
                    }}
                    size="large"
                    options={ALLOCATION_NUMBER_OPTION_STATUS}
                    defaultValue={status}
                    onChange={(value) => setStatus(value)}
                />
                <SelectField
                    title="Nguồn cấp"
                    styleTitle={{
                        ...textFont("1rem"),
                        fontWeight: 600,
                    }}
                    styleSelect={{
                        width: 170,
                    }}
                    size="large"
                    options={ALLOCATION_NUMBER_OPTION_ORIGIN}
                    defaultValue={ALLOCATION_NUMBER_OPTION_ORIGIN[0].value}
                />
                <SelectDate
                    title="Chọn thời gian"
                    styleTitle={{
                        fontFamily: "Nunito",
                        fontSize: "1rem",
                        fontWeight: 600,
                        marginBottom: ".25rem",
                    }}
                    styleDate={{
                        fontSize: "1rem",
                        width: 300,
                    }}
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
            </Space>
        </Row>
    );
};

export default SearchHeader;