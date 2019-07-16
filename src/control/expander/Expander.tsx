import * as React from "react";
import { ValueBox } from "../../layout/content/box/ValueBox";
import styled, { css } from "../../styled-components";
import { ExpanderIcon } from "./ExpanderIcon";
import { Number } from "../../data/Number";

interface IExpanderRootProps {
    disabled?: boolean;
    onClick(): void;
}

const ExpanderRoot = styled<IExpanderRootProps, "div">("div")`
    cursor: ${props => props.disabled ? "default" : "pointer"};
    user-select: none;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.04);
`;

const ExpanderLabel = styled.div`
    margin-right: 8px;
`;

interface IOpenProps {
    open: boolean;
    disabled?: boolean;
}

const ExpanderValue = styled<IOpenProps, "span">("span")`
    color: ${props => props.disabled ?
        props.theme.colors.expanderDisabled :
        props.open ? props.theme.colors.expanderOpenValue : props.theme.colors.expanderValue};
    margin-left: 8px;
    margin-right: 8px;
`;

const StyledValueBox = styled(ValueBox)`
    transition: background-color .2s ease-in-out, border-color .2s ease-in-out;
    border-radius: 4px;
`;

interface IExpanderContentProps {
    fullWidth?: boolean;
}

const ExpanderContent = styled<IExpanderContentProps, "div">("div")`
    display: flex;
    ${props => props.fullWidth ? css`
    width: 100%;

    & ${ExpanderValue} {
        flex-grow: 1;
        text-align: right;
    }
    ` : ``}
`;

const hasPropsWithValue = (props: IExpanderBaseProps): props is IExpanderWithValueProps => {
    return (props as IExpanderWithValueProps).value !== void 0;
};

export interface IExpanderWithValueProps extends IExpanderBaseProps {
    value: number;
    locale: string;
}

export interface IExpanderWithoutValueProps extends IExpanderBaseProps {
    value?: never;
}

export interface IExpanderBaseProps {
    label: string;
    open: boolean;
    /** Full width mode (expand to 100% of container) */
    fullWidth?: boolean;
    disabled?: boolean;
    onClick?(): void;
    onResize?(): void;
}

export type IExpanderProps = IExpanderWithoutValueProps | IExpanderWithValueProps;

/** Component used for accordions and other expanding content */
export class Expander extends React.Component<IExpanderProps> {
    render() {
        let value: number | undefined;
        let locale: string | undefined;
        if (hasPropsWithValue(this.props)) {
            value = this.props.value;
            locale = this.props.locale;
        }
        let { label, open, disabled } = this.props;
        return (
            <ExpanderRoot onClick={this.handleClick} disabled={disabled}>
                <StyledValueBox
                    colors={(theme) => ({
                        background: open ? theme.colors.expanderOpenBg : theme.colors.expanderBg,
                        text:  disabled ?
                            theme.colors.expanderDisabled :
                            open ? theme.colors.expanderOpenLabel : theme.colors.expanderLabel
                    })}
                    variant="big"
                    fullWidth={this.props.fullWidth}
                >
                    <ExpanderContent fullWidth={this.props.fullWidth}>
                        <ExpanderLabel>{label}</ExpanderLabel>
                        { value !== void 0 ?
                        <ExpanderValue open={open} disabled={disabled}>
                            <Number locale={locale!} value={value} />
                        </ExpanderValue>
                        : null }
                        <ExpanderIcon expanded={open} />
                    </ExpanderContent>
                </StyledValueBox>
            </ExpanderRoot>
        );
    }

    private handleClick = () => {
        if (this.props.onClick && !this.props.disabled) {
            this.props.onClick();
        }
    }

    componentDidUpdate(prevProps: IExpanderProps) {
        if (prevProps.label !== this.props.label ||
            (prevProps as IExpanderWithValueProps).value !== (this.props as IExpanderWithValueProps).value
        ) {
            const onResize = this.props.onResize;
            if (onResize) {
                // setTimeout because of async rendering
                setTimeout(onResize);
            }
        }
    }
}
