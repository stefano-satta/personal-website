import { BaseHTMLAttributes } from "react";
import { Badge } from "react-bootstrap";

interface PillProps extends BaseHTMLAttributes<HTMLDivElement> {
    label: string;
    bgColor?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    textColor?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

const Pill = ({className, style, label, id, bgColor, textColor}: PillProps) => {

    return (
        <Badge id={id}
            className={className}
            style={style}
            bg={bgColor}
            text={textColor}
            pill>
            {label}
        </Badge>
    )
}

export default Pill;