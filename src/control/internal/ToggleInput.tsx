import * as React from "react";
import styled from "../../styled-components";

interface IStyledInnerProps {
    disabled?: boolean;
    checked: boolean;
}

// We render the input non-visible, but correctly positioned to make the "required" attribute work properly
const StyledInput = styled.input`
    pointer-events: none;
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
`;

const ToggleInputWrapper = styled.div`
    padding: 4px 0 4px 24px;
    min-height: 24px;
    box-sizing: border-box;
    position: relative;
`;
const ToggleInputLabel = styled.label<IStyledInnerProps>`
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: ${({theme, disabled}) => disabled ? theme.colors.base.disabled : theme.colors.base.secondary.color};
`;
const ToggleInputLabelText = styled.div`
    margin-left: 4px;
`;
const ToggleInputIconWrapper = styled.div<IStyledInnerProps>`
    position: absolute;
    top: 0;
    left: 0;
    color: ${({theme, disabled, checked}) =>
        disabled ? theme.colors.base.disabled : checked
        ? theme.colors.base.accent.color : theme.colors.base.secondary.color};
`;

export interface IToggleInputProps {
    type: "checkbox" | "radio";
    id?: string;
    name?: string;
    value?: string | number;
    /** If false or unspecified, the checkbox/radio is unchecked (only controlled mode supported) */
    checked?: boolean;
    required?: boolean;
    disabled?: boolean;
    Icon(checked: boolean): React.ReactNode;
    onChange?(
        event: React.ChangeEvent<HTMLInputElement>,
        checked: boolean,
        name?: string,
        value?: string | number
    ): void;
}

export class ToggleInput extends React.PureComponent<IToggleInputProps> {
    render() {
        let { id, type, name, value, required, disabled, checked, Icon, children } = this.props;

        return (
            <ToggleInputWrapper>
                <ToggleInputLabel disabled={disabled} checked={checked || false}>
                    <ToggleInputIconWrapper disabled={disabled} checked={checked || false}>
                        <StyledInput
                            type={type}
                            id={id}
                            name={name}
                            value={value}
                            checked={checked || false}
                            required={required}
                            disabled={disabled}
                            onChange={this.onChange}
                        />
                        { Icon(checked || false) }
                    </ToggleInputIconWrapper>
                    { children && <ToggleInputLabelText>{children}</ToggleInputLabelText> }
                </ToggleInputLabel>
            </ToggleInputWrapper>
        );
    }

    private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (this.props.onChange && !this.props.disabled) {
            this.props.onChange(
                event,
                this.props.type === "radio" || !this.props.checked,
                this.props.name,
                this.props.value
            );
        }
    }
}
