import CategoryItem from "../category-item/category-item.component";
import "./categories-container.styles.scss";

const CatergoriesContainer = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CatergoriesContainer;
