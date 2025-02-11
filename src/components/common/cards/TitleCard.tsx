import { BaseHTMLAttributes } from "react";

interface TitleCardProps extends BaseHTMLAttributes<HTMLHeadingElement> {
    title: string;
}


const TitleCard = ({ title, className = '' }: TitleCardProps) => {

    return (
        <h1 className={`pb-2 mb-5 ${className}`}>{title}</h1>
    )
}

export default TitleCard;