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

/** Component used for expanding the select component */
export class ExpanderSelect extends React.Component<IExpanderSelectProps> {

    render() {
        let { label, open, disabled, onClick, fullWidth } = this.props;
        return <ExpanderBase label={label} open={open} fullWidth={fullWidth} onClick={onClick}
            colors={(theme) => ({
                background: open ? theme.colors.select.expander.openBg : theme.colors.select.expander.bg,
                border: theme.colors.select.expander.border,
                text: disabled ?
                    theme.colors.select.expander.disabled :
                    open ? theme.colors.select.expander.openLabel : theme.colors.select.expander.label
            })}
            iconColor={(theme) => (
                open ? theme.colors.select.expander.openIcon : theme.colors.select.expander.Icon
            )} />;
    }
}
