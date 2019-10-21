import * as React from "react";
import styled from "../styled-components";
import { CheckboxOnIcon } from "../icon/CheckboxOnIcon";
import { CheckboxOffIcon } from "../icon/CheckboxOffIcon";

interface IStyledInnerProps {
    disabled?: boolean;
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

const CheckboxWrapper = styled.div`
    padding: 4px 0 4px 28px;
    min-height: 24px;
    box-sizing: border-box;
    position: relative;
`;
const CheckboxLabel = styled.label<IStyledInnerProps>`
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: ${({theme, disabled}) => disabled ? theme.colors.base.disabled : theme.colors.base.primary.color};
`;
const CheckboxIconWrapper = styled.div<IStyledInnerProps>`
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
                    <CheckboxIconWrapper disabled={disabled}>
                        <StyledInput
                            type="checkbox"
                            id={id}
                            name={name}
                            value={value}
                            checked={checked || false}
                            required={required}
                            disabled={disabled}
                            onChange={this.onChange}
                        />
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
