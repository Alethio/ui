import React from "react";
import { storiesOf } from "@storybook/react";
import { ExternalLink } from "./ExternalLink";

storiesOf("control/" + ExternalLink.name, module)
    .add("default", () => (
        <ExternalLink href="JavaScript:void(0)">An external link</ExternalLink>
    ));
