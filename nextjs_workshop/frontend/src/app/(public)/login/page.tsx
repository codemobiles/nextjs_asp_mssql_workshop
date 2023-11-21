"use client";
import { TextField } from "@mui/material";
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
      LoginPage
      <form
        onSubmit={() => {
          alert(JSON.stringify(user));
        }}
      >
        {/* <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
          }}
        /> */}


        <TextField />
        
        <br />
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />{" "}
        <br />
        <span>#Spy{JSON.stringify(user)}</span>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
