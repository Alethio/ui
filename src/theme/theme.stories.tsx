import React from "react";
import { storiesOf } from "@storybook/react";
import { createPalette } from "./createPalette";
import styled from "../styled-components";
import { IThemeColors } from "./ITheme";

const palette = createPalette();

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const PaletteColor = styled<{ color: string; }, "div">("div")`
    border: 1px grey solid;
    width: 200px;
    height: 100px;
    background-color: ${props => props.color};
`;

const ThemeColor = styled<{ small?: boolean; colorThunk(themeColors: IThemeColors): string; }, "div">("div")`
    border: 1px grey solid;
    width: ${props => props.small ? "100px" : "200px"};
    height: 100px;
    background-color: ${props => props.colorThunk(props.theme.colors)};
    margin-right: 8px;
`;

interface IDualColor { color: string; contrast: string; }
const DualColor: React.StatelessComponent<{ colorThunk(themeColors: IThemeColors): IDualColor; }> = ({ colorThunk }) =>
    <Container>
        <ThemeColor small colorThunk={colors => colorThunk(colors).color} />
        <ThemeColor small colorThunk={colors => colorThunk(colors).contrast} />
    </Container>;

storiesOf("theme/theme", module)
    .addParameters({
        info: {
            disable: true
        }
    })
    .add("palette", () => <Container>
        { Object.keys(palette).map(k => <div>
            <PaletteColor color={(palette as any)[k]}></PaletteColor>
            {k}
        </div>) }
    </Container>)
    .add("colors", () => <div>
        <h1>Base colors</h1>
        <h2>Content background</h2>
        <Container>
            <div>
                <ThemeColor colorThunk={colors => colors.base.bg.main} />
                main
            </div>
            <div>
                <ThemeColor colorThunk={colors => colors.base.bg.alt} />
                alternate (alt)
            </div>
        </Container>
        <h2>Sets (color/contrast)</h2>
        <Container>
            <div>
                <DualColor colorThunk={colors => colors.base.primary} />
                primary
            </div>
            <div>
                <DualColor colorThunk={colors => colors.base.secondary} />
                secondary
            </div>
            <div>
                <DualColor colorThunk={colors => colors.base.highlight} />
                highlight
            </div>
            <div>
                <DualColor colorThunk={colors => colors.base.accent} />
                accent
            </div>
        </Container>
        <h2>Status</h2>
        <Container>
            <div>
                <ThemeColor colorThunk={colors => colors.base.status.success} />
                success
            </div>
            <div>
                <ThemeColor colorThunk={colors => colors.base.status.warn} />
                warn
            </div>
            <div>
                <ThemeColor colorThunk={colors => colors.base.status.error} />
                error
            </div>
        </Container>
        <h1>General</h1>
        <Container>
            <div>
                <ThemeColor colorThunk={colors => colors.error} />
                error
            </div>
            <div>
                <ThemeColor colorThunk={colors => colors.link} />
                link
            </div>
            <div>
                <ThemeColor colorThunk={colors => colors.base.disabled} />
                disabled
            </div>
        </Container>
        <h1>Components</h1>
        <h2>Toolbar</h2>
        <Container>
            <div>
                <ThemeColor colorThunk={colors => colors.toolbarIcon} />
                toolbarIcon
            </div>
            <div>
                <ThemeColor colorThunk={colors => colors.toolbarIconHover} />
                toolbarIconHover
            </div>
        </Container>
    </div>);
