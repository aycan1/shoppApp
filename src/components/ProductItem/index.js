import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const addToChart = (product) => {
    dispatch(cartActions.addToChart(product));

  };

  return (
    <div key={product.id}>
      
      <div className="relative">
      <Link to={`/${product.id}`}>
        <div className="relative h-72 w-full overflow-hidden rounded-lg">
          
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center"
          />
          
        </div>
        
        <div className="relative mt-4">
        <p className="relative text-lg font-semibold text-blue-700">
          {product.price} ₺
          </p>
          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
          />
          
        </div>
        </Link>
      </div>
      
      <div className="mt-6">
        
        <a
          onClick={() => addToChart(product)}
          href={product.href}
          className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
        >
          Add to cart<span className="sr-only">{product.name}</span>
        </a>
      </div>
      
    </div>
  );
};

export default ProductItem;
