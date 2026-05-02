import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllproductApi,
  getproductByIdApi,
} from "../service/apiCollections";

const initialState = {
  productList: [],
  isLoading: true,
  selectedProduct: null,
};

export const getAllproductAsync = createAsyncThunk(
  "product/getall",
  async () => {
    try {
      const response = await getAllproductApi();
      return response;
    } catch (error) {
      return error;
    }
  },
);
export const getproductByIdAsync = createAsyncThunk(
  "product/getProductDetails",
  async (id) => {
    try {
      const response = await getproductByIdApi(id);
      console.log(response)
      return response;
    } catch (error) {
      return error;
    }
  },
);

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllproductAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllproductAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload.data;
      })
      .addCase(getproductByIdAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getproductByIdAsync.fulfilled, (state, action) => {
        ((state.isLoading = false),
          (state.selectedProduct = action.payload.data));
      });
  },
});

export default ProductSlice.reducer;
