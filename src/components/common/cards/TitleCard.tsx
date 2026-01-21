import { BaseHTMLAttributes } from "react";

interface TitleCardProps extends BaseHTMLAttributes<HTMLHeadingElement> {
    title: string;
}


const TitleCard = ({ title, className = '' }: TitleCardProps) => {

    return (
        <h3 className={`pb-2 mb-5 text-uppercase ${className}`}>{title}</h3>
    )
}

export default TitleCard;