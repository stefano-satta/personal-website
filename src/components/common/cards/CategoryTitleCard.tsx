const CategoryTitleCard = ({ categoryTitle}: {categoryTitle: string}) => {
    
    return (
        <span className="category-title text-uppercase mb-2">{ categoryTitle }</span>
    )
}

export default CategoryTitleCard;