import { createSlice } from "@reduxjs/toolkit";

const initial = {
  itemlist: [],
  selectedItems: [],
  selectedItem: null,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initial,
  reducers: {
    cartProductPlus(state, action) {
      let newItemIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[newItemIndex].quantity++;
      state.selectedItems[newItemIndex].totalPrice =
        state.selectedItems[newItemIndex].quantity *
        state.selectedItems[newItemIndex].price;
      const updatedTotalAmount = +state.totalAmount + +action.payload.price;
      state.totalAmount = updatedTotalAmount;
      localStorage.setItem("totalAmount", state.totalAmount);
      localStorage.setItem(
        "selectedItems",
        JSON.stringify(state.selectedItems)
      );
    },
    cartProductMin(state, action) {
      let newItemIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.selectedItems[newItemIndex].quantity > 0) {
        state.selectedItems[newItemIndex].quantity--;
        state.selectedItems[newItemIndex].totalPrice =
          state.selectedItems[newItemIndex].quantity *
          state.selectedItems[newItemIndex].price;
        const updatedTotalAmount = +state.totalAmount - +action.payload.price;
        state.totalAmount = updatedTotalAmount;
      } else {
        alert("sepette ürün kalmadı");
      }
      localStorage.setItem("totalAmount", state.totalAmount);
      localStorage.setItem(
        "selectedItems",
        JSON.stringify(state.selectedItems)
      );
    },
    addToChart(state, action) {
      let existingItem = state.selectedItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        let newItemIndex = state.selectedItems.findIndex(
          (item) => item.id === action.payload.id
        );
        state.selectedItems[newItemIndex].quantity++;
        state.selectedItems[newItemIndex].totalPrice =
          state.selectedItems[newItemIndex].quantity *
          state.selectedItems[newItemIndex].price;
        const updatedTotalAmount =
          state.totalAmount + +action.payload.price * +action.payload.quantity;
        state.totalAmount = updatedTotalAmount;
      } else {
        const updatedTotalAmount =
          state.totalAmount + +action.payload.price * +action.payload.quantity;
        state.totalAmount = updatedTotalAmount;
        state.selectedItem = action.payload;
        state.selectedItems = [...state.selectedItems, state.selectedItem];
      }
      localStorage.setItem("totalAmount", state.totalAmount);
      localStorage.setItem(
        "selectedItems",
        JSON.stringify(state.selectedItems)
      );
    },
    checkout(state) {
      state.selectedItems = [];
      state.totalAmount = 0;
      state.selectedItem = null;
      localStorage.setItem("totalAmount", state.totalAmount);
      localStorage.setItem(
        "selectedItems",
        JSON.stringify(state.selectedItems)
      );
    },
    gotoDetail(state, action) {
  
    },
    setCart(state, action) {
     
      state.selectedItems = action.payload.selectedItems;
      state.totalAmount = +action.payload.totalAmount;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
