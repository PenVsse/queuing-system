import React from "react";
import { Row } from "antd";
import SelectField from "../../../components/SelectField";
import { textFont } from "../../Device/TableData";
import { OPTION_ROLES } from "../../../constants/option";
import InputField from "../../../components/InputField";
import { BsSearch } from "react-icons/bs";

const SearchHeader: React.FC = () => {
    return (
        <Row justify="space-between">
            <SelectField
                title="Tên vai trò"
                styleTitle={{ ...textFont("1rem") }}
                styleSelect={{ ...textFont("1rem"), width: 300 }}
                size="large"
                options={OPTION_ROLES}
                defaultValue={OPTION_ROLES[0].value}
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
                        <BsSearch className="root_color" style={{ fontSize: "1.25rem" }} />
                    }
                />
            </Row>
        </Row>
    );
};

export default SearchHeader;