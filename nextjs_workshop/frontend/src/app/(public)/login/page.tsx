"use client";
import React from "react";

type Props = {};

export default function LoginPage({}: Props) {
  return (
    <div>
      LoginPage
      <form
        onSubmit={() => {
          alert("Hey");
        }}
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => console.log(e.target.value)}
        />{" "}
        <br />
        <input type="text" name="password" placeholder="Password" /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
