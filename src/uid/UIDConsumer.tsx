import * as React from "react";
import * as PropTypes from "prop-types";
import { UIDProps } from "react-uid/dist/es5/context";
// tslint:disable-next-line:import-blacklist
import { UIDConsumer as UIDConsumerFallback } from "react-uid";

export interface IUIDConsumerProps {
    children: UIDProps["children"];
}

// We wrap UIDConsumer with a legacy context API for cases when we use multiple instances of the library on
// the same page (e.g. explorer plugin vs host)
/**
 * Generates a unique ID for an HTML element. Use together with UIDReset for server-side rendering.
 *
 * See react-uid npm package
 */
export class UIDConsumer extends React.Component<IUIDConsumerProps> {
    static contextTypes = {
        UIDConsumer: PropTypes.any
    };

    /** @internal */
    context: {
        UIDConsumer: React.ComponentType<UIDProps>;
    };

    render() {
        // Fallback to default UIDConsumer when there is no top provider
        let UIDConsumerBase = this.context.UIDConsumer || UIDConsumerFallback;
        return <UIDConsumerBase>{this.props.children }</UIDConsumerBase>;
    }
}
