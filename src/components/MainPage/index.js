import { useEffect, useState } from "react";

import Pagination from "../Pagination";
import Sorting from "../Sorting";
import Filters from "../Filters";
import ProductList from "../ProductList";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/productlist-slice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MainPage() {
  const [searchInput, setSearchInput] = useState("");
  const [brandList, setBrandList] = useState([]);
  const [modelList, setModelList] = useState([]);
  const productList = useSelector((state) => state.product.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    setBrandList(
      productList.map((item) => ({ brand: item.brand, id: item.id }))
    );
    setModelList(
      productList.map((item) => ({ model: item.model, id: item.id }))
    );
  }, [productList]);

  const filterSearchArea = (e) => {
    e.preventDefault();
    dispatch(productActions.filterSearchArea(searchInput));
  };

  return (
    <div className="w-4/5">
      {/* Background color split screen for large screens */}
      
      <div className="relative flex min-h-screen flex-col">
      

        {/* 3 column wrapper */}
        <div className="mx-auto w-full  flex-grow lg:flex xl:px-6">
          {/* Left sidebar & main wrapper */}
          <div className="min-w-0 flex-1 bg-white xl:flex">
            <div className="border-b border-gray-200 bg-white xl:w-64 xl:flex-shrink-0 xl:border-b-0 xl:border-r xl:border-gray-200">
              <div className="h-full py-6 pl-4 pr-6 sm:pl-6 lg:pl-8 xl:pl-0">
                {/* Start left column area */}
                <div className="relative h-full" style={{ minHeight: "12rem" }}>
                  <Sorting />
                  <Filters key="brandList" brandList={brandList} />
                  <Filters key="modelList" modelList={modelList} />
                </div>
              </div>
            </div>
            <div className="bg-white lg:min-w-0 lg:flex-1">
              <div className="h-5/6 py-6 px-4 sm:px-6 lg:px-8">
                {/* Start main area*/}
                <div
                  className="relative h-4/6"
                  style={{ minHeight: "36rem" }}
                >
                  <ProductList />
                  <Pagination className="static mt-5 h-1/6"/>
                {/* End main area */}
                </div>
               
              </div>
             
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}
