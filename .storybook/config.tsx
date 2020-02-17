import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { ThemeProvider } from "styled-components";
import { createTheme } from "../src/theme/createTheme";
import { createPalette } from "../src/theme/createPalette";

const req = require.context("../src", true, /.stories.tsx?$/);

function loadStories() {
    req.keys().forEach(req);
}

addDecorator(withInfo({
    inline: true,
    source: false
}));
addDecorator(storyFn => <ThemeProvider theme={createTheme(createPalette())}>
    {storyFn()}
</ThemeProvider>);

configure(loadStories, module);
