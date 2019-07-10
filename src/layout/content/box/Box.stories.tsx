import React from "react";
import { storiesOf } from "@storybook/react";
import { Box } from "./Box";

storiesOf("layout/content/box/" + Box.displayName, module)
    .addDecorator(storyFn => <div style={{ display: "flex" }}>{storyFn()}</div>)
    .add("default", () => (
        <Box colors={theme => ({
            text: theme.colors.base.primary.color,
            background: "transparent",
            border: "red"
        })} metrics={{
            height: 28,
            textPaddingTop: 0,
            textPaddingX: 8,
            fontSize: 20,
            iconSize: 24,
            lineHeight: 24,
            fontWeight: 500,
            letterSpacing: "normal"
        }}>Content</Box>
    ));
