import * as React from "react";
import { CheckboxOnIcon } from "../icon/CheckboxOnIcon";
import { CheckboxOffIcon } from "../icon/CheckboxOffIcon";
import { IToggleInputProps, ToggleInput } from "./internal/ToggleInput";

export interface ICheckboxProps extends Pick<IToggleInputProps, Exclude<keyof IToggleInputProps, "Icon" | "type">> {
}

export class Checkbox extends React.PureComponent<ICheckboxProps> {
    render() {
        return <ToggleInput
            {...this.props}
            type="checkbox"
            Icon={checked => checked ? <CheckboxOnIcon /> : <CheckboxOffIcon />}
        />;
    }
}
