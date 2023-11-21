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
        <TextField
          variant="outlined"
          label="Username"
          value={user.username}
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
          }}
        />
        <br />
        <TextField
          sx={{ mt: 3 }}
          variant="outlined"
          label="Password"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <br />

        <Button variant="contained">Submit</Button>
      </form>
    </div>
  );
}
