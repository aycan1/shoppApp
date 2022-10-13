import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export default function ProductChart() {
  const dispatch = useDispatch();
  const selectedItems = useSelector((state) => state.cart.selectedItems);

  const cartProductMin = (product) => {
    dispatch(cartActions.cartProductMin(product));
  };
  const cartProductPlus = (product) => {
    dispatch(cartActions.cartProductPlus(product));
  };

  return (
    <div className="border rounded">
      <div className="mx-auto max-w-4xl py-4 px-4 sm:py-2sm:px-6 lg:px-8">
        <h1 className="text-xl font-bold tracking-tight text-gray-900">
          Shopping Cart
        </h1>
        <form className="mt-4">
          <div>
            <h2 className="sr-only">Items in your shopping cart</h2>

            <ul
              role="list"
              className="divide-y divide-gray-200 border-t border-b border-gray-200"
            >
              {selectedItems.map((product, productIdx) => (
                <>
                  {product.quantity > 0 && (
                    <li key={product.id} className="flex py-3 sm:py-10">
                      <div className="relative flex flex-1 flex-col justify-between sm:ml-6">
                        <div>
                          <div className="flex justify-between sm:grid sm:grid-cols-2">
                            <div className="pr-6">
                              <h3 className="text-sm">
                                <a
                                  href={product.href}
                                  className="font-medium text-gray-700 hover:text-gray-800"
                                >
                                  {product.name}
                                </a>
                              </h3>
                              <p className="mt-1 text-sm text-gray-500">
                                {product.price} ₺
                              </p>
                            </div>
                          </div>

                          <div className="mt-4 flex items-center sm:absolute sm:top-0 sm:left-1/2 sm:mt-0 sm:block">
                            <label
                              htmlFor={`quantity-${productIdx}`}
                              className="sr-only"
                            >
                              Quantity, {product.name}
                            </label>
                            <div className="flex">
                              <button
                                onClick={() => cartProductMin(product)}
                                type="button"
                                className="block mr-3 h-6 w-6 rounded-md border border-gray-300 font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                              >
                                -
                              </button>
                              <h1 className="mx-1">{product.quantity}</h1>

                              <button
                                onClick={() => cartProductPlus(product)}
                                type="button"
                                className="block h-6 w-6 rounded-md border border-gray-300 font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  )}
                </>
              ))}
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}
