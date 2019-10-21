import * as React from "react";
import { observer } from "mobx-react";
import styled from "../styled-components";
import { RadioOnIcon } from "../icon/RadioOnIcon";
import { RadioOffIcon } from "../icon/RadioOffIcon";

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

const RadioWrapper = styled.div`
    padding: 4px 0 4px 28px;
    min-height: 24px;
    box-sizing: border-box;
    position: relative;
`;
const RadioLabel = styled.label<IStyledInnerProps>`
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: ${({theme, disabled}) => disabled ? theme.colors.base.disabled : theme.colors.base.primary.color};
`;
const RadioIconWrapper = styled.div<IStyledInnerProps>`
    position: absolute;
    top: 0;
    left: 0;
    color: ${({theme, disabled}) => disabled ? theme.colors.base.disabled : theme.colors.base.accent.color};
`;

interface IRadioProps {
    id?: string;
    name?: string;
    value?: string | number;
    /** If false or unspecified, the radio is unchecked (only controlled mode supported) */
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

@observer
export class Radio extends React.Component<IRadioProps> {
    render() {
        let { id, name, value, required, disabled, checked, children } = this.props;

        return (
            <RadioWrapper>
                <RadioLabel disabled={disabled}>
                    <RadioIconWrapper disabled={disabled}>
                        <StyledInput
                            type="radio"
                            id={id}
                            name={name}
                            value={value}
                            checked={checked || false}
                            required={required}
                            disabled={disabled}
                            onChange={this.onChange}
                            style={{display: "none"}}
                        />
                        { checked ? <RadioOnIcon /> : <RadioOffIcon />}
                    </RadioIconWrapper>
                    {children}
                </RadioLabel>
            </RadioWrapper>
        );
    }

    private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (this.props.onChange && !this.props.disabled) {
            this.props.onChange(event, true, this.props.name, this.props.value);
        }
    }
}
