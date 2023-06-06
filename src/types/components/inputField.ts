import { SizeType } from "antd/es/config-provider/SizeContext";
import { ReactNode } from "react";

export interface IInputFieldProps {
    title: string | ReactNode;
    titleSize: string | number;
    value?: string | number | undefined | null;
    defaultValue?: string | number | undefined | null;
    invalidMessage?: string;
    fontWeightTitle?: number;
    span?: number;
    placeholder?: string;
    size?: SizeType;
    type?: string;
    disabled?: boolean;
    suffix?: React.ReactNode;
    onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}