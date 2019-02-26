import * as React from "react";
import styled from "../styled-components";
import { CheckboxOnIcon } from "../icon/CheckboxOnIcon";
import { CheckboxOffIcon } from "../icon/CheckboxOffIcon";

const CheckboxWrapper = styled.div`
    padding: 8px 8px 8px 32px;
    position: relative;
`;
const CheckboxLabel = styled.label`
    text-transform: uppercase;
    display: block;
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    color: ${({theme}) => theme.colors.checkboxLabel};
`;
const CheckboxIconWrapper = styled.div`
    position: absolute;
    top: 4px;
    left: 4px;
    color: ${({theme}) => theme.colors.checkboxIcon};
`;

interface ICheckboxProps {
    id: string;
    name: string;
    value?: string | number;
    checked?: boolean;
    onChange?(
        event: React.ChangeEvent<HTMLInputElement>,
        checked: boolean,
        name: string,
        value?: string | number
    ): void;
}

export class Checkbox extends React.PureComponent<ICheckboxProps> {
    render() {
        return (
            <CheckboxWrapper>
                <input
                    type="checkbox"
                    id={this.props.id}
                    checked={this.props.checked || false}
                    value={this.props.value}
                    onChange={this.onChange}
                    style={{display: "none"}}
                />
                <CheckboxLabel htmlFor={this.props.id}>
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
