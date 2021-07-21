import React from "react";

export default function User({ userDetails }) {
  if (!userDetails) {
    return <h3>Relax, we're loading</h3>;
  }
  return (
    <div>
      <h2>{userDetails.username}</h2>
      <p>{userDetails.email}</p>
      <p>{userDetails.password}</p>
      <p>{userDetails.tos}</p>
    </div>
  );
}
