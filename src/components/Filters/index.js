import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/productlist-slice";

export default function Filters(props) {
  const selectedBrandList = useSelector(
    (state) => state.product.selectedBrandList
  );
  const selectedModelList = useSelector(
    (state) => state.product.selectedModelList
  );
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [filterBrndArr, setFilterBrndArr] = useState(selectedBrandList);
  const [filterMdlArr, setFilterMdlArr] = useState(selectedModelList);

  const filterBrand = (product) => {
    let index = filterBrndArr.indexOf(product);

    if (index >= 0) {
      const filtedarr = filterBrndArr.filter((item) => item !== product);
      setFilterBrndArr(filtedarr);
    } else {
      setFilterBrndArr((prevArray) => [...prevArray, product]);
    }
  };
  useEffect(() => {
    dispatch(productActions.filterBrand(filterBrndArr));
  }, [filterBrndArr]);

  const filterModel = (product) => {
    let index = filterMdlArr.indexOf(product);

    if (index >= 0) {
      const filtedarr = filterMdlArr.filter((item) => item !== product);
      setFilterMdlArr(filtedarr);
    } else {
      setFilterMdlArr((prevArray) => [...prevArray, product]);
    }
  };
  useEffect(() => {
    dispatch(productActions.filterModel(filterMdlArr));
  }, [filterMdlArr]);

  const filterText = (value) => {
    props.brandList ? filterBrand(value) : filterModel(value);
  };

  return (
    <div className="border p-4 rounded mt-3">
      <div className="w-full max-w-lg lg:max-w-xs">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            onChange={(e) => filterText(e.target.value)}
            id="search"
            name="search"
            className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
      <fieldset className="space-y-5 h-44 overflow-y-scroll">
        <legend className="sr-only">Notifications</legend>

        {props.brandList
          ? props.brandList.map((product) => (
              <div
                className="relative flex items-start"
                key={product.id}
                brand={product.brand}
              >
                <div className="flex h-5 items-center">
                  <input
                    id={product.id}
                    aria-describedby="comments-description"
                    name="comments"
                    type="checkbox"
                    onChange={() => filterBrand(product.brand)}
                    value="checked"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="comments"
                    className="font-medium text-gray-700"
                  >
                    {product.brand}
                  </label>
                </div>
              </div>
            ))
          : props.modelList.map((product) => (
              <div
                className="relative flex items-start"
                key={product.id}
                brand={product.brand}
              >
                <div className="flex h-5 items-center">
                  <input
                    id={product.id}
                    aria-describedby="comments-description"
                    name="comments"
                    type="checkbox"
                    onClick={() => filterModel(product.model)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="comments"
                    className="font-medium text-gray-700"
                  >
                    {product.model}
                  </label>
                </div>
              </div>
            ))}
      </fieldset>
    </div>
  );
}
