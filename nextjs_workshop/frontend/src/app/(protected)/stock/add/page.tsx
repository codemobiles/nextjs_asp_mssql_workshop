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
  const defaultValues: ProductData = { name: "", price: 100, stock: 200 };
  const { control, handleSubmit } = useForm({ defaultValues });

  return (
    <Box>
      <form onSubmit={handleSubmit(() => {})}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField {...field} fullWidth label="Name" sx={{ mt: 1 }} />
          )}
        />

        <TextField fullWidth label="Price" sx={{ mt: 1 }} />
        <TextField fullWidth label="Stock" sx={{ mt: 1 }} />
        <Button variant="contained" fullWidth sx={{ mt: 8 }}>
          Submit
        </Button>
      </form>
    </Box>
  );
}
