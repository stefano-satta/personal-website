import {HTMLAttributes} from "react";

interface CategoryTitleCardProps extends HTMLAttributes<HTMLSpanElement>{
    categoryTitle: string,
}


const CategoryTitleCard = ({ categoryTitle, className}: CategoryTitleCardProps) => {
    
    return (
        <span className={`category-title text-uppercase mb-2 ${className}`}>
            { categoryTitle }
        </span>
    )
}

export default CategoryTitleCard;