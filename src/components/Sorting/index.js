import { useDispatch } from "react-redux";
import { productActions } from "../../store/productlist-slice";

const notificationMethods = [
  { id: 1, title: "Old to new" },
  { id: 2, title: "New to old" },
  { id: 3, title: "Price height to low" },
  { id: 4, title: "Price low to height" },
];

export default function Sorting() {
  const dispatch = useDispatch();

  const sortList = (e) => {
    dispatch(productActions.sortList(e));
   
  };

  return (
    <div className="border p-4 rounded">
      <label className="text-base font-medium text-gray-900">Sort By</label>

      <fieldset className="mt-4">
        <legend className="sr-only">Notification method</legend>
        <div className="space-y-4">
          {notificationMethods.map((notificationMethod) => (
            <div key={notificationMethod.id} className="flex items-center">
              <input
                onClick={(e) => sortList(e.target.id)}
                id={notificationMethod.id}
                name="notification-method"
                type="radio"
                // defaultChecked={notificationMethod.id === "email"}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                // htmlFor={notificationMethod.id}
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                {notificationMethod.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
