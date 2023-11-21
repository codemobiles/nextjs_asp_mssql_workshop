import React from "react";

type Props = {};

export default function LoginPage({}: Props) {
  return (
    <div>
      LoginPage
      <form action="">
        <input type="text" name="username" placeholder="Username" /> <br />
        <input type="text" name="password" placeholder="Password" /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
