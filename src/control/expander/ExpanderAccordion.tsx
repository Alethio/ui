import React from "react";
import { ExpanderBase, IExpanderBaseProps } from "./ExpanderBase";

interface IExpanderWithValueProps extends IExpanderBaseAccordionProps {
    value?: number;
    locale: string;
}

interface IExpanderWithoutValueProps extends IExpanderBaseAccordionProps {
    value?: never;
}

type IExpanderBaseAccordionProps = Omit<IExpanderBaseProps, "colors" | "iconColor">;

type IExpanderAccordionProps = IExpanderWithoutValueProps | IExpanderWithValueProps;

const hasPropsWithValue = (props: IExpanderAccordionProps): props is IExpanderWithValueProps => {
    return (props as IExpanderWithValueProps).value !== void 0;
};

/** Component used for expanding the accordion component */
export class ExpanderAccordion extends React.Component<IExpanderAccordionProps> {

    render() {
        let { label, open, disabled, onClick, onResize, fullWidth } = this.props;
        let value: number | undefined;
        let locale: string | undefined;
        if (hasPropsWithValue(this.props)) {
            value = this.props.value;
            locale = this.props.locale;
        }
        return <ExpanderBase label={label} open={open} fullWidth={fullWidth} onClick={onClick} onResize={onResize}
            value={value} locale={locale!} disabled={disabled}
            colors={(theme) => {
                let colors = {...(open ? theme.colors.accordion.expander.open :
                    theme.colors.accordion.expander.closed)};

                if (disabled) {
                    colors.border = colors.text = colors.value = theme.colors.accordion.expander.disabled;
                }

                return colors;
            }} />;
    }
}
