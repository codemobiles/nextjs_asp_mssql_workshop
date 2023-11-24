import { ProductData } from "@/models/product.model";
import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
  products: ProductData[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: {},
  reducers: {},
});

export default productSlice.reducer;
