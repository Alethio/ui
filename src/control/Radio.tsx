import * as React from "react";
import { observer } from "mobx-react";
import styled from "../styled-components";
import { RadioOnIcon } from "../icon/RadioOnIcon";
import { RadioOffIcon } from "../icon/RadioOffIcon";

const RadioWrapper = styled.div`
    padding: 8px 8px 8px 32px;
    position: relative;
`;
const RadioLabel = styled.label`
    text-transform: uppercase;
    display: block;
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    color: ${({theme}) => theme.colors.checkboxLabel};
`;
const RadioIconWrapper = styled.div`
    position: absolute;
    top: 4px;
    left: 4px;
    color: ${({theme}) => theme.colors.checkboxIcon};
`;

interface IRadioProps {
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

@observer
export class Radio extends React.Component<IRadioProps> {
    render() {
        return (
            <RadioWrapper>
                <input
                    type="radio"
                    id={this.props.id}
                    name={"radio_" + this.props.name}
                    value={this.props.value}
                    checked={this.props.checked || false}
                    onChange={this.onChange}
                    style={{display: "none"}}
                />
                <RadioLabel htmlFor={this.props.id}>
                    <RadioIconWrapper>
                        { this.props.checked ? <RadioOnIcon /> : <RadioOffIcon />}
                    </RadioIconWrapper>
                    {this.props.children}
                </RadioLabel>
            </RadioWrapper>
        );
    }

    private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (this.props.onChange) {
            this.props.onChange(event, true, this.props.name, this.props.value);
        }
    }
}
