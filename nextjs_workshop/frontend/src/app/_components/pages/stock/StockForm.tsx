"use client";
import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect } from "react";
import { RootState, useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux";
import { getProducts, productSelector } from "@/store/slices/productSlice";
import { NumericFormat } from "react-number-format";
import dayjs from "dayjs";
import { Typography } from "@mui/material";
import Image from "next/image";
const columns: GridColDef[] = [
  { field: "productId", headerName: "ID", width: 70 },
  {
    field: "image",
    headerName: "Image",
    width: 70,
    renderCell(params) {
      return (
        <Image
          alt="product image"
          src="https://codemobiles.com/biz/images/cm_logo.svg?ref=10"
          width={70}
          height={70}
        />
      );
    },
  },
  { field: "name", headerName: "Name", width: 500 },
  {
    field: "price",
    headerName: "Price",
    width: 130,
    renderCell({ value }) {
      return (
        <Typography variant="body1">
          <NumericFormat
            value={value}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={2}
            fixedDecimalScale={true}
            suffix="฿"
          />
        </Typography>
      );
    },
  },
  { field: "stock", headerName: "Stock", width: 130 },
  {
    field: "createdAt",
    headerName: "Timestamp",
    width: 230,
    renderCell: ({ value }) => (
      <Typography variant="body1">
        {dayjs(value).format("DD/MM/YYYY HH:mm")}
      </Typography>
    ),
  },
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
