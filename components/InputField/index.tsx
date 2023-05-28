import React from "react";
import { Col, Input, Typography } from "antd"

import { IInputFieldProps } from "../../types/components/inputField";

const InputField: React.FC<IInputFieldProps> = ({ title, titleSize, value, invalidMessage, span, placeholder, size, type, disabled,  ...props }) => {

    return (
        <Col span={span} style={{ margin: '0.5rem 0' }}>
            <Typography.Paragraph
                style={{
                    color: invalidMessage && 'red',
                    fontSize: titleSize,
                    marginBottom: '0.25rem'
                }}
            >
                {title}
            </Typography.Paragraph>
            <Input
                value={value}
                placeholder={placeholder}
                {...props}
                spellCheck={false}
                size={size}
                style={{
                    border: invalidMessage && `1px solid red`,
                    borderRadius: '8px'
                }}
                type={type}
                disabled={disabled}
            />
            {invalidMessage && <Typography.Text style={{ fontSize: '0.8rem', color: 'red' }}>
                {invalidMessage}
            </Typography.Text>}
        </Col>
    )
}

export default InputField;
