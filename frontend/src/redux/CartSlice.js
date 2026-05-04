import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addItemToCartApi } from "../service/apiCollections";

const initialState = {
  cartItems: [
  
  ],
  totalItems: 0,
  isLoading: true,
};

export const addItemToCartAsync = createAsyncThunk(
  "cart/additem",
  async (product) => {
    try {
      const response = await addItemToCartApi({ product: product._id })
      console.log(product)
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    pushItemToCartList:(state, action) => {
        state.isLoading = false;
        state.cartItems.push(action.payload);
      }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addItemToCartAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addItemToCartAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems.push(action.payload.product);
      });
  },
});

export default CartSlice.reducer;
