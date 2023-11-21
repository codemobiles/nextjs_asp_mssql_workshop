"use client";
import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type Props = {};

type User = {
  username: string;
  password: string;
  type?: string;
};

const defaultValues: User = {
  username: "",
  password: "",
};

export default function LoginPage({}: Props) {
  const formValidateSchema = Yup.object().shape({
    username: Yup.string().required("Username is required").trim(),
    password: Yup.string().required("Password is required").trim(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues,
    resolver: yupResolver(formValidateSchema),
  });

  return (
    <div>
      <Typography variant="h2" className="mb-5">
        LoginPage
      </Typography>
      <form
        onSubmit={handleSubmit((values) => {
          alert(JSON.stringify(values));
        })}
      >
        {/* Username */}
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextField
              error={Boolean(errors.username?.message)}
              helperText={errors.username?.message}
              variant="outlined"
              label="Username"
              {...field}
            />
          )}
        />
        <br />
        {/* Password */}
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              error={Boolean(errors.password?.message)}
              helperText={errors.password?.message}
              sx={{ mt: 3 }}
              variant="outlined"
              label="Password"
              {...field}
            />
          )}
        />
        <br />

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
}
