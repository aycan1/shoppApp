import {  useState } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import { useDispatch } from "react-redux";
import { productActions } from "../../store/productlist-slice";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
 const dispatch = useDispatch();
  const filterSearchArea = (e) => {
    e.preventDefault();
    dispatch(productActions.filterSearchArea(searchInput));
  };

  return (
    <Disclosure as="nav" className="w-full flex-shrink-0 bg-blue-600">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo section */}
              <div className="flex items-center px-2 lg:px-0 xl:w-64">
                <div className="flex-shrink-0">
                <Link to={"/"}>
                  <h1 className="h-8 w-auto text-white">Eteration</h1>
                  </Link>
                </div>
              </div>

              {/* Search section */}
              <div className="flex flex-1 justify-center lg:justify-end">
                <div className="w-3/5 px-2 lg:px-2">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative text-indigo-200 focus-within:text-gray-400">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>
                    <form onSubmit={filterSearchArea}>
                      <input
                        onChange={(e) => setSearchInput(e.target.value)}
                        id="search"
                        name="search"
                        className="block w-full rounded-md border border-transparent bg-indigo-400 bg-opacity-25 py-2 pl-10 pr-3 leading-5 text-indigo-100 placeholder-indigo-200 focus:bg-white focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                        placeholder="Search"
                        type="text"
                      />
                    </form>
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden"></div>
              {/* Links section */}
              <div className="hidden lg:block lg:w-90">
                <div className="flex items-center justify-end">
                  <div className="flex"></div>
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-4 flex-shrink-0">
                    <div>
                      <h1 className="w-auto h-auto text-white">Aycan</h1>
                    </div>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
