import * as React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { ValueBox, IValueBoxProps } from "../../layout/content/box/ValueBox";
import { RelativeTimeFormatter, IRelativeTimeTranslations } from "../../util/time/RelativeTimeFormatter";
import { TooltipRegular } from "../../overlay/tooltip/TooltipRegular";
import { ClickThreshold } from "../../util/react/ClickThreshold";
import styled from "../../styled-components";
import { CopyValueButton } from "../../control/button/CopyValueButton";
import { IClipboard } from "../IClipboard";

const TimeElapsedContentRoot = styled.div`
    user-select: none;
    cursor: pointer;
`;

const CopyValueButtonWrapper = styled.div`
    margin: 0 0 0 16px;
`;

enum DisplayMode {
    AbsoluteTime,
    RelativeTime
}

export { IRelativeTimeTranslations } from "../../util/time/RelativeTimeFormatter";

export interface ITimeElapsedBoxProps {
    /** Unix timestamp of event for which the elapsed time is calculated */
    timestamp: number;
    nonclickable?: boolean;
    locale: string | undefined;
    /**
     * Translations: 'future' and 'past' use %s, all others use %d for replacements.
     * If undefined, uses default English translations
     *
     * Example: { future: "in %s", past: "%s ago", s: "1 second", ss: "%d seconds", ... }
     */
    translations: IRelativeTimeTranslations | undefined;
    clipboard: IClipboard;
    variant?: IValueBoxProps["variant"];
}

@observer
export class TimeElapsedBox extends React.Component<ITimeElapsedBoxProps> {
    @observable
    private currentTime: number;
    @observable
    private displayMode = DisplayMode.RelativeTime;
    private timeoutId: number;

    componentDidMount() {
        this.updateCurrentTime();
    }

    componentDidUpdate(prevProps: ITimeElapsedBoxProps) {
        if (this.props.timestamp !== prevProps.timestamp) {
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            this.updateCurrentTime();
        }
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    render() {
        let value: string;
        if (this.displayMode === DisplayMode.RelativeTime) {
            value = new RelativeTimeFormatter(this.props.translations).formatDiff(
                this.currentTime * 1000, this.props.timestamp * 1000
            );
        } else if (this.displayMode === DisplayMode.AbsoluteTime) {
            value = new Date(this.props.timestamp * 1000).toLocaleDateString(this.props.locale, {
                timeZone: "UTC",
                timeZoneName: "short",
                year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric"
            });
        } else {
            throw new Error(`Unsupported display mode "${DisplayMode[this.displayMode]}"`);
        }
        let box = (
            <ValueBox variant={this.props.variant}>
                <TimeElapsedContentRoot>
                    {value}
                </TimeElapsedContentRoot>
            </ValueBox>
        );
        return (
            <TooltipRegular content={
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div>{this.props.timestamp}</div>
                    <CopyValueButtonWrapper>
                        <CopyValueButton value={"" + this.props.timestamp} clipboard={this.props.clipboard}/>
                    </CopyValueButtonWrapper>
                </div>
            }>
                { this.props.nonclickable ? box :
                <ClickThreshold onClick={this.cycleDisplayMode}>
                    { box }
                </ClickThreshold>
                }
            </TooltipRegular>
        );
    }

    private cycleDisplayMode = () => {
        if (this.displayMode === DisplayMode.RelativeTime) {
            this.displayMode = DisplayMode.AbsoluteTime;
        } else if (this.displayMode === DisplayMode.AbsoluteTime) {
            this.displayMode = DisplayMode.RelativeTime;
        } else {
            throw new Error(`Unknown display mode "${this.displayMode}`);
        }
    }

    private updateCurrentTime = () => {
        this.currentTime = Math.floor(Date.now() / 1000);
        this.timeoutId = setTimeout(this.updateCurrentTime, this.computeRefreshInterval());
    }

    private computeRefreshInterval() {
        // Refresh every second if interval is under a minute, or every minute otherwise
        return this.currentTime - this.props.timestamp > 60 ? 60000 : 1000;
    }
}
