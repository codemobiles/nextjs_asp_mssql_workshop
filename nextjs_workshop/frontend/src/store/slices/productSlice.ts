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

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async () => {}
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (values: ProductData) => {
    try {
      let data = new FormData();
      data.append("name", values.name);
      data.append("price", String(values.price));
      data.append("stock", String(values.stock));
      if (values.file) {
        data.append("file", values.file);
      }
      const response = await serverService.addProduct(data);
      return response;
    } catch (e) {
      console.log(JSON.stringify(e));
      return null;
    }
  }
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
