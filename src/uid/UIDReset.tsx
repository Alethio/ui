import * as React from "react";
import * as PropTypes from "prop-types";
// tslint:disable-next-line:import-blacklist
import { UIDReset as UIDResetBase, UIDConsumer } from "react-uid";

// We use legacy context API to pass the Consumer component for cases when we use multiple instances of the library on
// the same page (e.g. explorer plugin vs host)
/**
 * Used together with UIDConsumer in server-side rendering scenarios, ensuring the same element IDs are generated
 * on both server and client
 *
 * See react-uid npm package
 */
export class UIDReset extends React.Component<{}> {
    static childContextTypes = {
        UIDConsumer: PropTypes.any
    };

    getChildContext() {
        return {
            UIDConsumer
        };
    }

    render() {
        return <UIDResetBase>{this.props.children}</UIDResetBase>;
    }
}
