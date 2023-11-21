"use client";
import React, { useState } from "react";

type Props = {};

type User = {
  username: string;
  password: string;
  type?: string;
};

export default function LoginPage({}: Props) {
  // let user: User = { username: "", password: "" }; // non-side-effect
  const [user, setUser] = useState({ username: "", password: "" });


  return (
    <div>
      LoginPage
      <form
        onSubmit={() => {
          alert(JSON.stringify(user));
        }}
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => (user.username = e.target.value)}
        />
        <br />
        <input type="text" name="password" placeholder="Password" /> <br />
        <span>#Spy{JSON.stringify(user)}</span>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
