import { Row, Space } from "antd";
import React, { CSSProperties } from "react";
import SelectField from "../../components/SelectField";
import {
  DEVICE_OPTION_STATUS_CONNECT,
  DEVICE_OPTION_STATUS_ACTIVE,
} from "../../constants/option";
import InputField from "../../components/InputField";

import { SearchOutlined } from '@ant-design/icons';

const styleTitle: CSSProperties = {
  fontSize: "1rem",
  fontWeight: 600,
  fontFamily: "Nunito",
  marginBottom: ".25rem",
};

const styleSelect: CSSProperties = {
  width: "300px",
};

const SearchHeader: React.FC = () => {
  return (
    <Row justify='space-between'>
      <Row>
        <Space size={24}>
          <SelectField
            title="Trạng thái hoạt động"
            styleTitle={styleTitle}
            styleSelect={styleSelect}
            size="large"
            defaultValue={[1]}
            options={DEVICE_OPTION_STATUS_ACTIVE}
          />
          <SelectField
            title="Trạng thái kết nối"
            styleTitle={styleTitle}
            styleSelect={styleSelect}
            size="large"
            defaultValue={[1]}
            options={DEVICE_OPTION_STATUS_CONNECT}
          />
        </Space>
      </Row>
      <Row style={{ width: 300 }}>
        <InputField
            span={24}
            title="Từ khóa"
            titleSize={"1rem"}
            fontWeightTitle={600}
            value={''}
            placeholder="Nhập từ khóa"
            size="large"
            suffix={
                <SearchOutlined className="root_color" style={{ fontSize: '1.25rem' }}/>
            }
        />
      </Row>
    </Row>
  );
};

export default SearchHeader;
