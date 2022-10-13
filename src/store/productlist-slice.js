import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProductList = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await fetch(
      "https://5fc9346b2af77700165ae514.mockapi.io/products"
    );
    const pureResponse = await response.json();
    const formattedResponse = pureResponse.map((product) => {
      return {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        description: product.description,
        model: product.model,
        brand: product.brand,
        createAt: product.createdAt,
        quantity: 1,
      };
    });
    return formattedResponse;
  }
);
const initial = {
  productList: [],
  isLoading: false,
  filteredList: [],
  selectedBrandList: [],
  selectedModelList: [],
  searchText: "",
  sortParam: 0,
  paginate: [],
  renderList: [],
};
const productListSlice = createSlice({
  name: "product",
  initialState: initial,
  extraReducers: {
    [getProductList.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductList.fulfilled]: (state, action) => {
      state.productList = action.payload;
      state.isLoading = false;
    },
    [getProductList.rejected]: (state) => {
      state.isLoading = false;
    },
  },
  reducers: {
    filterSearchArea(state, action) {
      state.searchText = action.payload;
 
    },
    filterBrand(state, action) {
      state.selectedBrandList = action.payload;
   
    },
    filterModel(state, action) {
      state.selectedModelList = action.payload;
    
    },
    sortList(state, action) {
      state.sortParam = +action.payload;
    },
    paginate(state, action) {
      state.paginate = action.payload;
    },
    renderlist(state, action) {
      state.renderList = action.payload;
    },
  },
});

export const productActions = productListSlice.actions;

export default productListSlice;
