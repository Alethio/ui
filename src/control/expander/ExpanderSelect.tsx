import React from "react";
import { ExpanderBase, IExpanderBaseProps } from "./ExpanderBase";

interface IExpanderWithValueProps extends IExpanderBaseSelectProps {
    value?: number;
    locale: string;
}

interface IExpanderWithoutValueProps extends IExpanderBaseSelectProps {
    value?: never;
}

type IExpanderBaseSelectProps = Omit<IExpanderBaseProps, "colors" | "iconColor">;

type IExpanderSelectProps = IExpanderWithoutValueProps | IExpanderWithValueProps;

const hasPropsWithValue = (props: IExpanderSelectProps): props is IExpanderWithValueProps => {
    return (props as IExpanderWithValueProps).value !== void 0;
};

/** Component used for expanding the select component */
export class ExpanderSelect extends React.Component<IExpanderSelectProps> {

    render() {
        let { label, open, disabled, onClick, fullWidth } = this.props;
        let value: number | undefined;
        let locale: string | undefined;
        if (hasPropsWithValue(this.props)) {
            value = this.props.value;
            locale = this.props.locale;
        }

        return <ExpanderBase label={label} open={open} fullWidth={fullWidth} onClick={onClick}
            value={value} locale={locale!} disabled={disabled}
            colors={(theme) => {
                let colors = {...(open ? theme.colors.select.expander.open : theme.colors.select.expander.closed)};

                if (disabled) {
                    colors.border = colors.text = colors.value = theme.colors.select.expander.disabled;
                }

                return colors;
            }} />;
    }
}
