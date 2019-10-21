import * as React from "react";
import styled from "../styled-components";
import { CheckboxOnIcon } from "../icon/CheckboxOnIcon";
import { CheckboxOffIcon } from "../icon/CheckboxOffIcon";

const CheckboxWrapper = styled.div`
    padding: 8px 8px 8px 32px;
    position: relative;
`;
const CheckboxLabel = styled.label`
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: ${({theme}) => theme.colors.base.primary.color};
`;
const CheckboxIconWrapper = styled.div`
    position: absolute;
    top: 4px;
    left: 4px;
    color: ${({theme}) => theme.colors.base.accent.color};
`;

interface ICheckboxProps {
    id?: string;
    name?: string;
    value?: string | number;
    /** If false or unspecified, the checkbox is unchecked (only controlled mode supported) */
    checked?: boolean;
    onChange?(
        event: React.ChangeEvent<HTMLInputElement>,
        checked: boolean,
        name?: string,
        value?: string | number
    ): void;
}

export class Checkbox extends React.PureComponent<ICheckboxProps> {
    render() {
        return (
            <CheckboxWrapper>
                <CheckboxLabel>
                    <input
                        type="checkbox"
                        id={this.props.id}
                        name={this.props.name}
                        value={this.props.value}
                        checked={this.props.checked || false}
                        onChange={this.onChange}
                        style={{display: "none"}}
                    />
                    <CheckboxIconWrapper>
                        { this.props.checked ? <CheckboxOnIcon /> : <CheckboxOffIcon />}
                    </CheckboxIconWrapper>
                    {this.props.children}
                </CheckboxLabel>
            </CheckboxWrapper>
        );
    }

    private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (this.props.onChange) {
            this.props.onChange(event, !this.props.checked, this.props.name, this.props.value);
        }
    }
}
