import {OverlayTrigger, Tooltip} from "react-bootstrap";
import {BaseHTMLAttributes, HTMLAttributes, PropsWithChildren} from "react";

interface CustomTooltipProps {
    text: string;
    placement?: 'top' | 'bottom' | 'right' | 'left';
}

const CustomTooltip = (props: PropsWithChildren<CustomTooltipProps>) => {
    const {text, placement = 'bottom', children} = props;

    return (
        <OverlayTrigger
            key={placement}
            placement={placement}
            overlay={
                <Tooltip id={`tooltip-${placement}`}>
                    {text}
                </Tooltip>
            }
        >
            <div>{ children }</div>
        </OverlayTrigger>
    )
}

export default CustomTooltip;