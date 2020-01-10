import React from "react";
import { IExpanderBaseProps } from "./Expander";
import { ExpanderBase } from "./ExpanderBase";

interface IExpanderAccordionProps extends IExpanderBaseProps {

}

/** Component used for expanding the accordion component */
export class ExpanderAccordion extends React.Component<IExpanderAccordionProps> {

    render() {
        let { label, open, disabled, onClick, fullWidth } = this.props;
        return <ExpanderBase label={label} open={open} fullWidth={fullWidth} onClick={onClick}
            colors={(theme) => ({
                background: open ? theme.colors.accordion.expander.openBg : theme.colors.accordion.expander.bg,
                border: theme.colors.accordion.expander.border,
                text: disabled ?
                    theme.colors.accordion.expander.disabled :
                    open ? theme.colors.accordion.expander.openLabel : theme.colors.accordion.expander.label
            })}
            iconColor={(theme) => (
                open ? theme.colors.accordion.expander.openIcon : theme.colors.accordion.expander.Icon
            )} />;
    }
}
