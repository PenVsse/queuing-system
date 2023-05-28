import { SizeType } from "antd/es/config-provider/SizeContext";

export interface IInputFieldProps {
    title: string;
    titleSize: string | number;
    value: string | number;
    invalidMessage?: string;
    span?: number;
    placeholder?: string;
    size?: SizeType;
    type?: string;
    disabled?: boolean;
}