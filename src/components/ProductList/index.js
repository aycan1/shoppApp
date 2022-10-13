import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../ProductItem";
import { filterFunction } from "../../heplers/utils";
import { productActions } from "../../store/productlist-slice";

export default function ProductList() {
  const productList = useSelector((state) => state.product.productList);
  const brandList = useSelector((state) => state.product.selectedBrandList);
  const modelList = useSelector((state) => state.product.selectedModelList);
  const searchList = useSelector((state) => state.product.searchText);
  const sortParam = useSelector((state) => state.product.sortParam);
  const currentPage = useSelector((state) => state.product.paginate);
  const renderList = filterFunction(
    brandList,
    modelList,
    searchList,
    productList,
    sortParam
  );
  const dispatch = useDispatch();
  dispatch(productActions.renderlist(renderList));
  const indexOfFirstPost = currentPage - 1 + 11 * (currentPage - 1);
  const indexOfLastPost = indexOfFirstPost + 11;
  const paginatedRenderList = renderList?.filter(
    (item, index) => index >= indexOfFirstPost && index <= indexOfLastPost
  );
  return (
    <div className="bg-white">
      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {paginatedRenderList?.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
