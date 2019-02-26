import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface ICheckboxOnIconProps extends ISvgIconProps {

}

export class CheckboxOnIcon extends React.Component<ICheckboxOnIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <polygon points="0 0 24 0 24 24 0 24"></polygon>
                    <path d={
                        // tslint:disable-next-line:max-line-length
                        "M9.1277704,4 L14.8722296,4 C16.6552671,4 17.3018396,4.18565122 17.9536914,4.53426541 C18.6055433,4.88287959 19.1171204,5.39445674 19.4657346,6.04630859 C19.8143488,6.69816044 20,7.34473292 20,9.1277704 L20,14.8722296 C20,16.6552671 19.8143488,17.3018396 19.4657346,17.9536914 C19.1171204,18.6055433 18.6055433,19.1171204 17.9536914,19.4657346 C17.3018396,19.8143488 16.6552671,20 14.8722296,20 L9.1277704,20 C7.34473292,20 6.69816044,19.8143488 6.04630859,19.4657346 C5.39445674,19.1171204 4.88287959,18.6055433 4.53426541,17.9536914 C4.18565122,17.3018396 4,16.6552671 4,14.8722296 L4,9.1277704 C4,7.34473292 4.18565122,6.69816044 4.53426541,6.04630859 C4.88287959,5.39445674 5.39445674,4.88287959 6.04630859,4.53426541 C6.69816044,4.18565122 7.34473292,4 9.1277704,4 Z M15,8.5 L10.51,13 L8.5,11 L7,12.5 L10.51,16 L16.5,10 L15,8.5 Z"
                    } fill="currentColor" fillRule="nonzero"></path>
                </g>
            </SvgIcon>
        );
    }
}
