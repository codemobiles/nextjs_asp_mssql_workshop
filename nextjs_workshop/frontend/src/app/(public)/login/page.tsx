"use client";
import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

type Props = {};

type User = {
  username: string;
  password: string;
  type?: string;
};

export default function LoginPage({}: Props) {
  // let user: User = { username: "", password: "" }; // non-side-effect
  const [user, setUser] = useState<User>({
    username: "admin",
    password: "555",
  });

  return (
    <div>
      <Typography variant="h2" className="mb-5">
        LoginPage
      </Typography>
      <form
        onSubmit={() => {
          alert(JSON.stringify(user));
        }}
      >
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

        <Button className="mt-9 w-[200px]" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
}
