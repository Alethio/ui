import * as React from "react";
import { IMenuItemProps, MenuItem } from "./menu/MenuItem";

export interface IOptionProps extends IMenuItemProps {
    value: string;
}

export class Option extends React.Component<IOptionProps> {
    render() {
        return <MenuItem {...this.props} />;
    }
}
