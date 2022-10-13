import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";

export default function TotalCost() {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const checkout = () => {
    dispatch(cartActions.checkout());
    
  };

  return (
    <div className="border p-2 mt-3 rounded">
      <section
        aria-labelledby="summary-heading"
        className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
      >
        <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
          Order summary
        </h2>

        <dl className="mt-6 space-y-4">
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <dt className="text-base font-medium text-gray-900">Order total</dt>
            <dd className="text-base font-medium text-gray-900">
              {totalAmount} ₺
            </dd>
          </div>
        </dl>

        <div className="mt-6">
          <NavLink to="/">
            {" "}
            <button
              onClick={checkout}
              type="submit"
              className="w-full rounded-md border border-transparent bg-blue-600 py-1 px-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Checkout
            </button>
          </NavLink>
        </div>
      </section>
    </div>
  );
}
