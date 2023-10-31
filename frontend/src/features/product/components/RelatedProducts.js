import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const RelatedProducts = ({ category }) => {
  const { products } = useSelector((state) => state.products);

  return (
    <div>
      {category && products ? (
        <section className="related-product pb-100">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="text-2xl pl-6">Related Products</h3>
              </div>
            </div>
            <div className="flex flex-wrap">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <Product key={product.id} product={product} col={3} className="w-1/4 p-4" />
                ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default RelatedProducts;
