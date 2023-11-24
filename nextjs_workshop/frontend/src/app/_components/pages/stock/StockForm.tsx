"use client";
import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect } from "react";
import { RootState, useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux";
import { getProducts, productSelector } from "@/store/slices/productSlice";
import { NumericFormat } from "react-number-format";
import dayjs from "dayjs";

const columns: GridColDef[] = [
  { field: "productId", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 500 },
  {
    field: "price",
    headerName: "Price",
    width: 130,
    renderCell({ value }) {
      return <b>{value}</b>;
    },
  },
  { field: "stock", headerName: "Stock", width: 130 },
  { field: "created", headerName: "Created", width: 250 },
  // price, stock
];

export default function StockForm() {
  const dispatch = useAppDispatch();
  const productReducer = useSelector(productSelector);

  useEffect(() => {
    // on created
    console.log("StockForm Created");
    dispatch(getProducts());

    // on destroyed
    return () => {
      console.log("StockForm Destroyed");
    };
  }, [dispatch]);

  return (
    <div className="h-full w-full">
      <DataGrid
        getRowId={(row) => row.productId}
        rows={productReducer.products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
