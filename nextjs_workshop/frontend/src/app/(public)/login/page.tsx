"use client";
import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

type Props = {};

type User = {
  username: string;
  password: string;
  type?: string;
};

export default function LoginPage({}: Props) {
  const { control, handleSubmit } = useForm<User>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <div>
      <Typography variant="h2" className="mb-5">
        LoginPage
      </Typography>
      <form onSubmit={() => {}}>
        {/* Username */}
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextField variant="outlined" label="Username" {...field} />
          )}
        />
        <br />
        {/* Password */}
        <Controller
          name="password"
          control={control}
          render={(field) => (
            <TextField
              sx={{ mt: 3 }}
              variant="outlined"
              label="Password"
              {...field}
            />
          )}
        />
        <br />

        <Button variant="contained">Submit</Button>
      </form>
    </div>
  );
}
