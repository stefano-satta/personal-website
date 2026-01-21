import { HTMLAttributes } from "react";

interface IconProps extends HTMLAttributes<HTMLDivElement> {
    icon: string | Partial<IconProject>;
}


const Icon = (props: IconProps) => {
    const {icon, className = '', style} = props;

    return (<i className={`${icon} ${className}`} style={style}/>)
}

export default Icon;