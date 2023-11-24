"use client";
import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useEffect } from "react";
import { RootState, useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux";
import { getProducts, productSelector } from "@/store/slices/productSlice";
import { NumericFormat } from "react-number-format";
import dayjs from "dayjs";
import { Fab, Link, Typography } from "@mui/material";
import Image from "next/image";
import { productImageURL } from "@/utils/commonUtil";
import { Add } from "@mui/icons-material";
const columns: GridColDef[] = [
  { field: "productId", headerName: "ID", width: 70 },
  {
    field: "image",
    headerName: "Image",
    width: 70,
    renderCell({ value }) {
      return (
        <Image
          alt="product image"
          src={productImageURL(value)}
          width={40}
          height={40}
          style={{ objectFit: "contain" }}
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

  const CustomToolbar: React.FunctionComponent<{
    setFilterButtonEl: React.Dispatch<
      React.SetStateAction<HTMLButtonElement | null>
    >;
  }> = ({ setFilterButtonEl }) => (
    <GridToolbarContainer>
      <GridToolbarFilterButton ref={setFilterButtonEl} />
      <Link href="/stock/add">
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
        >
          <Add />
        </Fab>
      </Link>
    </GridToolbarContainer>
  );

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
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}
