import React from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/20/solid";
import { discountedPrice } from "./../../../app/constants";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
const Product = ({ product }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2" style={{ display: 'flex' }}>
      <div className="bg-white shadow-lg rounded-lg" style={{ flex: 1 }}>
        <div className="p-3">
          <Link to={`/product-detail/${product.id}`}>
            <img
              className="w-full"
              src={product.thumbnail}
              alt="Product Img"
              style={{ height: '200px', objectFit: 'cover' }}
            />
          </Link>
        </div>
        <div className="p-3">
          <h5 className="text-lg font-semibold">
            <Link to={`/product-detail/${product.id}`}>{product.title}</Link>
          </h5>
          <div className="mt-2">
          <p className="text-xl line-through tracking-tight text-gray-900">
                ₹{product.price}
              </p>
              <p className="text-3xl tracking-tight text-gray-900">
                ₹{discountedPrice(product)}
              </p>
          </div>
          {/* Reviews */}
          <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                </div>
              </div>
          <div className="mt-4">
            <Link
              to={`/product-detail/${product.id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded-full inline-block"
            >
              View Details <i className="fa fa-plus"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
