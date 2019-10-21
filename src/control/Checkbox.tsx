import * as React from "react";
import styled from "../styled-components";
import { CheckboxOnIcon } from "../icon/CheckboxOnIcon";
import { CheckboxOffIcon } from "../icon/CheckboxOffIcon";

interface IStyledInputProps {
    disabled?: boolean;
}

const CheckboxWrapper = styled.div`
    padding: 4px 0 4px 28px;
    min-height: 24px;
    box-sizing: border-box;
    position: relative;
`;
const CheckboxLabel = styled.label<IStyledInputProps>`
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: ${({theme, disabled}) => disabled ? theme.colors.base.disabled : theme.colors.base.primary.color};
`;
const CheckboxIconWrapper = styled.div<IStyledInputProps>`
    position: absolute;
    top: 0;
    left: 0;
    color: ${({theme, disabled}) => disabled ? theme.colors.base.disabled : theme.colors.base.accent.color};
`;

interface ICheckboxProps {
    id?: string;
    name?: string;
    value?: string | number;
    /** If false or unspecified, the checkbox is unchecked (only controlled mode supported) */
    checked?: boolean;
    required?: boolean;
    disabled?: boolean;
    onChange?(
        event: React.ChangeEvent<HTMLInputElement>,
        checked: boolean,
        name?: string,
        value?: string | number
    ): void;
}

export class Checkbox extends React.PureComponent<ICheckboxProps> {
    render() {
        let { id, name, value, required, disabled, checked, children } = this.props;

        return (
            <CheckboxWrapper>
                <CheckboxLabel disabled={disabled}>
                    <input
                        type="checkbox"
                        id={id}
                        name={name}
                        value={value}
                        checked={checked || false}
                        required={required}
                        disabled={disabled}
                        onChange={this.onChange}
                        style={{display: "none"}}
                    />
                    <CheckboxIconWrapper disabled={disabled}>
                        { checked ? <CheckboxOnIcon /> : <CheckboxOffIcon />}
                    </CheckboxIconWrapper>
                    {children}
                </CheckboxLabel>
            </CheckboxWrapper>
        );
    }

    private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (this.props.onChange && !this.props.disabled) {
            this.props.onChange(event, !this.props.checked, this.props.name, this.props.value);
        }
    }
}
