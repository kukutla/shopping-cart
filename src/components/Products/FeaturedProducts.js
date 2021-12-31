import React from "react";

import Loading from "../Loading";
import ProductList from "../Products/ProductList";
import { ProductContext } from "../../context/products";

export default function FeaturedProducts() {
  const { loading, featured } = React.useContext(ProductContext);

  if (loading) return <Loading />;
  return (
    <article>
      return <ProductList title="featured products" products={featured} />
    </article>
  );
}
