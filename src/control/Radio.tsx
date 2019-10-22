import * as React from "react";
import { observer } from "mobx-react";
import { RadioOnIcon } from "../icon/RadioOnIcon";
import { RadioOffIcon } from "../icon/RadioOffIcon";
import { IToggleInputProps, ToggleInput } from "./internal/ToggleInput";

export interface IRadioProps extends Omit<IToggleInputProps, "Icon" | "type"> {
}

@observer
export class Radio extends React.Component<IRadioProps> {
    render() {
        return <ToggleInput
            {...this.props}
            type="radio"
            Icon={checked => checked ? <RadioOnIcon /> : <RadioOffIcon />}
        />;
    }
}
