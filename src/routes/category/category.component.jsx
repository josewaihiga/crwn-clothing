import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";

import {Container, Title} from "./category.styles";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  console.log(products);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <Container>{products && products.map((product) => <ProductCard key={product.id} product={product} />)}</Container>
    </Fragment>
  );
};

export default Category;
