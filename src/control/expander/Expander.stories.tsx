import React from "react";
import { storiesOf } from "@storybook/react";
import { Expander } from "./Expander";
import styled from "../../styled-components";

import { ExpanderBase } from "./ExpanderBase";
import { ExpanderSelect } from "./ExpanderSelect";

const ContentArea = styled.div`
    display: flex;
    background: ${props => props.theme.colors.base.bg.main};
    padding: 8px;
`;

storiesOf("control/" + Expander.name, module)
    .addParameters({
        info: {
            propTablesExclude: [ContentArea]
        }
    })
    .addDecorator(storyFn => <ContentArea>{storyFn()}</ContentArea>)
    .add("default", () => (
        <Expander label="Label" open={false} />
    ))
    .add("open state", () => (
        <Expander label="Label" open={true} />
    ))
    .add("with number", () => (
        <Expander label="Label with number" value={20} locale="en-US" open={false} />
    ))
    .add("number with full width", () => (
        <div style={{ width: 500 }}>
            <Expander label="Label" locale="en-US" value={20} open={false} fullWidth />
        </div>
    ))
    .add("disabled", () => (
        <Expander label="Label" locale="en-US" open={false} disabled />
    ))
    .add("ExpanderBase", () => ([
        <ExpanderBase label="Closed" locale="en-US" open={false} colors={(theme) => ({
            background: false ? theme.colors.select.expander.openBg : theme.colors.select.expander.bg,
            border: theme.colors.select.expander.openIcon,
            text: false ?
                theme.colors.select.expander.disabled :
                false ? theme.colors.select.expander.openLabel : theme.colors.select.expander.label
        })}
        iconColor={(theme) => (
            false ? theme.colors.select.expander.openIcon : theme.colors.select.expander.Icon
        )}/>,
        <ExpanderBase label="Open" locale="en-US" open={true} colors={(theme) => ({
            background: open ? theme.colors.select.expander.openBg : theme.colors.select.expander.bg,
            border: theme.colors.select.expander.openIcon,
            text: false ?
                theme.colors.select.expander.disabled :
                open ? theme.colors.select.expander.openLabel : theme.colors.select.expander.label
        })}
        iconColor={(theme) => (
            open ? theme.colors.select.expander.openIcon : theme.colors.select.expander.Icon
        )}/>
    ]))
    .add("ExpanderSelect", () => ([
        <ExpanderSelect label="Closed" open={false} />,
        <ExpanderSelect label="Open" open={true} />
    ]));
