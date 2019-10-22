import * as React from "react";
import styled from "../../styled-components";
import { Box, IBoxProps } from "../../layout/content/box/Box";
import { IBoxColorsThunk } from "../../layout/content/box/IBoxColorsThunk";
import { ITheme } from "../../theme/ITheme";
import { HoverState } from "../../util/react/HoverState";

const StyledBox = styled(Box)`
    transition: background-color .2s ease-in-out, border-color .2s ease-in-out;
`;

type InteractionState = "normal" | "active" | "disabled";
type GetColorSetFn = (state: InteractionState) => IBoxColorsThunk<ITheme>;

const getColorSet: GetColorSetFn = (state) => (theme) => theme.colors.menu.item[state];

export interface IMenuItemProps {
    disabled?: boolean;
    Icon?: IBoxProps["Icon"];
}

export class MenuItem extends React.Component<IMenuItemProps> {
    render() {
        let { disabled, Icon, children } = this.props;
        return (
            <HoverState>
                {(hover) =>
                    <StyledBox
                        Icon={Icon}
                        iconPlacement={"left"}
                        colors={getColorSet(!disabled ? hover ? "active" : "normal" : "disabled")}
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
                    >{children}</StyledBox>
                }
            </HoverState>
        );
    }
}
