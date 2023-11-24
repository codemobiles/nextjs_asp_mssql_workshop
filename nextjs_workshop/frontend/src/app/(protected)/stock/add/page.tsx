"use client";
import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductData } from "@/models/product.model";

type Props = {};

export default function StockAddPage({}: Props) {
  const formValidateSchema = Yup.object().shape({
    name: Yup.string().required("Name is required").trim(),
    price: Yup.number().min(100, "Number must be greater than 100"),
    stock: Yup.number().min(100, "Number must be greater than 100"),
  });

  // setup react hook form
  const initialValue: ProductData = { name: "", price: 1500, stock: 9999 };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductData>({
    defaultValues: initialValue,
    //@ts-ignore
    resolver: yupResolver(formValidateSchema),
  });

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
            <TextField
              {...field}
              error
              helperText="Name is required"
              fullWidth
              label="Name"
              sx={{ mt: 1 }}
            />
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

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 8 }}>
          Submit
        </Button>
      </form>
    </Box>
  );
}
