import React from "react";

export default function User({ userDetails }) {
  if (!userDetails) {
    return <h3>Waiting for user info...</h3>;
  }
  return (
    <div>
      <h2>{`${userDetails["first_name"]} ${userDetails["last_name"]}`}</h2>
      <p>{userDetails.email}</p>
    </div>
  );
}
