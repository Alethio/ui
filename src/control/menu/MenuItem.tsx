import * as React from "react";
import styled from "styled-components";
import { Box, IBoxProps } from "../../layout/content/box/Box";
import { IBoxColorsThunk } from "../../layout/content/box/IBoxColorsThunk";
import { ITheme } from "../../theme/ITheme";
import { HoverState } from "../../util/react/HoverState";

const StyledBox = styled(Box)`
    transition: background-color .2s ease-in-out, border-color .2s ease-in-out;
`;

type InteractionState = "normal" | "hover" | "selected" | "disabled";
type GetColorSetFn = (state: InteractionState) => IBoxColorsThunk<ITheme>;

const getColorSet: GetColorSetFn = (state) => (theme) => theme.colors.menu.item[state];

export interface IMenuItemProps {
    disabled?: boolean;
    selected?: boolean;
    Icon?: IBoxProps["Icon"];
    onClick?(): void;
}

const getState = (disabled: boolean, hover: boolean, selected: boolean) => {
    if (disabled) {
        return "disabled";
    } else if (selected) {
        return "selected";
    } else if (hover) {
        return "hover";
    } else {
        return "normal";
    }
};
export class MenuItem extends React.Component<IMenuItemProps> {
    render() {
        let { disabled, Icon, children, selected } = this.props;
        return <div onClick={this.handleClick}>
            <HoverState>
                {(hover) => {
                    let state: InteractionState = getState(disabled!, hover, selected!);
                    let colorSet = getColorSet(state);
                    return <StyledBox
                        Icon={Icon}
                        iconPlacement={"left"}
                        colors={colorSet}
                        fullWidth
                        metrics={{
                            // TODO: extract these metrics because they are the same as Button metricss
                            fontSize: 12,
                            lineHeight: 14,
                            fontWeight: 400,
                            height: 32,
                            iconSize: 24,
                            letterSpacing: .4,
                            textPaddingTop: 7,
                            textPaddingX: 16
                        }}
                    >{children}</StyledBox>;
                }}
            </HoverState>
        </div>;
    }

    private handleClick = () => {
        if (!this.props.disabled && this.props.onClick) {
            this.props.onClick();
        }
    }
}
