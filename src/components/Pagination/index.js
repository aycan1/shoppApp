import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/productlist-slice";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  const renderList = useSelector((state) => state.product.renderList);
  const indexOfFirstPost = currentPage - 1 + 12 * (currentPage - 1);
  const indexOfLastPost = indexOfFirstPost + 12;

  useEffect(() => {
    dispatch(productActions.paginate(currentPage));
  }, [currentPage]);

  const pageNum = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };
  const prevPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  let pages = [];
  if (renderList?.length > 11) {
    for (let i = 1; i <= Math.ceil(renderList?.length / 12); i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);
  }

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              onClick={prevPage}
              href="#"
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-indigo-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5 " aria-hidden="true" />
            </a>
            {pages.map((number) => (
              <a
                onClick={() => pageNum(number)}
                key={number}
                href="#"
                aria-current="page"
                className="relative z-10 inline-flex items-center border bg-indigo-50 hover:bg-gray-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
              >
                {number}
              </a>
            ))}
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}

            <a
              onClick={nextPage}
              href="#"
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-indigo-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
