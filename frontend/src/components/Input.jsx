import React from "react";

export default function Input({ username, setUsername }) {
  return (
    <input
      type="email"
      class="form-control"
      id="exampleFormControlInput1"
      placeholder="Enter your name"
      value={username}
      onChange={({ target }) => setUsername(target.value)}
    />
  );
}
