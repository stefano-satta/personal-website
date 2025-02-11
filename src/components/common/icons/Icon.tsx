import { HTMLAttributes } from "react";

interface IconProps extends HTMLAttributes<HTMLDivElement> {
    icon: string;
}


const Icon = (props: IconProps) => {
    const {icon, className = '', style} = props;

    return (<i className={`${icon} ${className}`} style={style}/>)
}

export default Icon;