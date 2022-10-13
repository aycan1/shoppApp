import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";

const product = {
  name: "Zip Tote Basket",
  href: "#",
  description:
    "The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg",
  imageAlt: "Back angled view with bag open and handles to the side.",
};

export default function ProductDetail() {
  const dispatch = useDispatch();

  const addToChart = (product) => {
    dispatch(cartActions.addToChart(product));
  };
  const productList = useSelector((state) => state.product.productList);
  const { productId } = useParams();
  const product = productList.find((item) => item.id === productId);
  
  return (
    <div className="relative flex w-3/5 items-center ml-44 mt-10 overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
      <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
            <img src={product.image} className="object-cover object-center" />
          </div>
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
            {product.name}
          </h2>
          <h2 className="text-lg font-semibold text-blue-700">
            {product.price} ₺
          </h2>
          <section aria-labelledby="information-heading" className="mt-3">
            <h3 id="information-heading" className="sr-only">
              Product information
            </h3>

            <div className="mt-6">
              <h4 className="sr-only">Description</h4>

              <p className="text-sm text-gray-700">{product.description}</p>
            </div>
            <div className="mt-6">
              <button
                onClick={() => addToChart(product)}
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 py-3 px-8 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Add to Chart
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
