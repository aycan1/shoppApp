import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import MainPage from "./components/MainPage";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { getProductList } from "./store/productlist-slice";
import { cartActions } from "./store/cart-slice";
import Wrapper from "./Wrapper/Wrapper";

function App() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  useEffect(() => {
    const totalAmount = localStorage.getItem("totalAmount");
    const selectedItems = JSON.parse(localStorage.getItem("selectedItems"));
    if (selectedItems !== null && totalAmount !== null){
      dispatch(cartActions.setCart({totalAmount:totalAmount ,selectedItems:selectedItems}))
    }
    
  }, []);

  return (
    <div className="flex">
      <Wrapper>
        {" "}
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/:productId" exact>
            <ProductDetail />
          </Route>
          <Route path="/*" exact>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Wrapper>
    </div>
  );
}

export default App;
