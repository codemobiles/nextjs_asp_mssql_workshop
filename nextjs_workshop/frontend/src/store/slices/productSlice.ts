import { ProductData } from "@/models/product.model";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as serverService from "@/services/serverService";
import { RootState } from "../store";

interface ProductState {
  products: ProductData[];
}

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (keyword?: string | undefined) => {
    const result = await serverService.getProducts(keyword);
    return result;
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (data: ProductData) => {}
);

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
export const productSelector = (state: RootState) => state.productReducer;
