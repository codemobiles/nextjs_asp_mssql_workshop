"use client";
import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductData } from "@/models/product.model";

type Props = {};

export default function StockAddPage({}: Props) {
  // setup react hook form
  const { control, handleSubmit } = useForm<ProductData>();

  return (
    <Box>
      <form
        onSubmit={handleSubmit((values) => {
          alert(JSON.stringify(values));
        })}
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField {...field} fullWidth label="Name" sx={{ mt: 1 }} />
          )}
        />

        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <TextField {...field} fullWidth label="Price" sx={{ mt: 1 }} />
          )}
        />

        <Controller
          name="stock"
          control={control}
          render={({ field }) => (
            <TextField {...field} fullWidth label="Stock" sx={{ mt: 1 }} />
          )}
        />

        <Button variant="contained" fullWidth sx={{ mt: 8 }}>
          Submit
        </Button>
      </form>
    </Box>
  );
}
