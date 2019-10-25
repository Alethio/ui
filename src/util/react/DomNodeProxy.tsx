import * as React from "react";
import * as ReactDOM from "react-dom";

export interface IEventProxyProps<T> {
    children: Element | React.ReactElement<{}>;
    onMount(el: T): void;
    onUnmount?(el: T): void;
}

/**
 * Higher-order component that provides access to the wrapped underlying HTML element, even if we provided
 * a React component as a child and not a DOM element. This allows us to prevent adding another wrapper <div>
 * which affects the layout (e.g. can break flex layout because the wrapped element will no longer be a direct
 * child of its parent)
 */
export class DomNodeProxy<T extends Element = HTMLElement> extends React.Component<IEventProxyProps<T>> {
    private innerRef: T;

    render() {
        let child = React.Children.only(this.props.children);

        return (
            React.cloneElement(child as any, {
                ref: (r: T) => {
                    this.innerRef = r instanceof Element ? r : ReactDOM.findDOMNode(r) as any;
                }
            })
        );
    }

    componentDidMount() {
        this.props.onMount(this.innerRef);
    }

    componentWillUnmount() {
        if (this.props.onUnmount) {
            this.props.onUnmount(this.innerRef);
        }
    }
}
