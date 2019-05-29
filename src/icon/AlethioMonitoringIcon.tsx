import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IAlethioMonitoringIconProps extends ISvgIconProps {
}

export class AlethioMonitoringIcon extends React.PureComponent<IAlethioMonitoringIconProps> {
    render() {
        return (
            <SvgIcon viewBoxSize={729} {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <path
                        // tslint:disable-next-line:max-line-length
                        d="M531,379.91 C455.5826,379.926568 394.457117,441.075929 394.470002,516.493329 C394.482888,591.91073 455.629264,653.039199 531.046665,653.029996 C606.464066,653.020792 667.595521,591.877401 667.59,516.46 C667.587348,480.23857 653.194529,445.502022 627.57836,419.893355 C601.962191,394.284687 567.221429,379.902043 531,379.91 Z M531,622.91 C472.206372,622.893432 424.557118,575.220301 424.570003,516.426672 C424.582888,457.633043 472.253035,409.980803 531.046664,409.990006 C589.840294,409.999208 637.49552,457.66637 637.49,516.46 C637.492655,544.70096 626.2731,571.785567 606.300912,591.752128 C586.328725,611.718689 559.240958,622.930612 531,622.92 L531,622.91 Z"
                        fill="currentColor" fillRule="nonzero"></path>
                    <path
                        // tslint:disable-next-line:max-line-length
                        d="M531,398 C465.559783,398.016571 412.523438,451.079781 412.540008,516.519997 C412.556577,581.960214 465.619786,634.99656 531.060003,634.979992 C596.500219,634.963425 649.536566,581.900217 649.52,516.46 C649.514697,485.033684 637.024186,454.896908 614.796799,432.680773 C592.569412,410.464639 562.426315,397.98939 531,398 L531,398 Z M531,608.86 C479.979935,608.86 438.62,567.500065 438.62,516.48 C438.62,465.459935 479.979935,424.1 531,424.1 C582.020065,424.1 623.38,465.459935 623.38,516.48 C623.368956,567.492255 582.012256,608.840001 531,608.84 L531,608.86 Z"
                        fill="currentColor" fillRule="nonzero"></path>
                    <path
                        // tslint:disable-next-line:max-line-length
                        d="M151.72,121.38 L151.72,513 L304.35,349 L369.92,418.9 C391.394967,388.848565 420.956613,365.507869 455.17,351.59 L455.17,121.38 L151.72,121.38 Z"
                    ></path>
                    <path
                        // tslint:disable-next-line:max-line-length
                        d="M304.35,349 L151.72,513 L151.72,121.38 L455.17,121.38 L455.17,351.56 C474.524409,343.721958 495.018922,339.065189 515.86,337.77 L515.86,60.69 L91,60.69 L91,667.28 L151.69,602.58 L305.35,438.78 L310.21,443.96 L341.5,477.31 C347.607691,456.37135 357.205847,436.613822 369.89,418.87 L304.35,349 Z"
                        fill="currentColor" fillRule="nonzero"></path>
                    <rect fill="currentColor" fillRule="nonzero" x="515.21" y="455.67" width="30.34" height="121.38"
                    ></rect>
                    <rect fill="currentColor" fillRule="nonzero"
                        // tslint:disable-next-line:max-line-length
                        transform="translate(530.380000, 516.460000) rotate(90.000000) translate(-530.380000, -516.460000) "
                        x="515.21" y="455.77" width="30.34" height="121.38"></rect>
                    <rect x="0" y="0" width="728.28" height="728.28"></rect>
                </g>
            </SvgIcon>
        );
    }
}
