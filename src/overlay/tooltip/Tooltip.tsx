import * as React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { IPopoverProps, Popover } from "../Popover";
import { DomNodeProxy } from "../../util/react/DomNodeProxy";
import { MultiHover } from "../../util/react/MultiHover";

export interface ITooltipProps extends Omit<IPopoverProps, "visible"> {
    /** Time since mouse enter event until tooltip is shown (millis) */
    showDelay?: number;
    /** Time since mouse leave event until tooltip is hidden (millis) */
    hideDelay?: number;
}

/**
 * Tooltip component primitive, without specific styling
 */
@observer
export class Tooltip extends React.Component<ITooltipProps> {
    static defaultProps: Pick<ITooltipProps, "showDelay" | "hideDelay"> = {
        showDelay: 400,
        hideDelay: 400
    };

    @observable
    private visible = false;
    private multiHover: MultiHover<true>;

    constructor(props: ITooltipProps) {
        super(props);

        this.multiHover = new MultiHover<true>({ enterDelay: this.props.showDelay, leaveDelay: this.props.hideDelay });
        this.multiHover.onActiveChange.subscribe(visible => this.visible = visible || false);
    }

    componentDidUpdate(prevProps: ITooltipProps) {
        if (this.props.showDelay !== prevProps.showDelay) {
            this.multiHover.applyOpts({ enterDelay: this.props.showDelay});
        }
        if (this.props.hideDelay !== prevProps.hideDelay) {
            this.multiHover.applyOpts({ leaveDelay: this.props.hideDelay});
        }
    }

    render() {
        let { showDelay: _unused, hideDelay: _unused2, content, ...otherProps } = this.props;

        let target = React.Children.only(this.props.children);

        return (
            <Popover
                visible={this.visible}
                content={<div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    {content}
                </div>}
                {...otherProps}
            >
                <DomNodeProxy
                    onMount={el => {
                        el.addEventListener("mouseenter", this.handleMouseEnter);
                        el.addEventListener("mouseleave", this.handleMouseLeave);
                    }}
                    onUnmount={el => {
                        el.removeEventListener("mouseenter", this.handleMouseEnter);
                        el.removeEventListener("mouseleave", this.handleMouseLeave);
                    }}
                >
                    { target }
                </DomNodeProxy>
            </Popover>
        );
    }

    private handleMouseEnter = () => {
        this.multiHover.enter(true);
    }

    private handleMouseLeave = () => {
        this.multiHover.leave();
    }
}
