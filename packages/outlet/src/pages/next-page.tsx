import React from "react";
import { Button } from "design-system";
import Router from "next/router";

const NextPage = () => {
  const handleClick = () => {
    Router.push("/");
  };

  return (
    <div className="titleWrapper">
      <div className="textStyle">This is Admin Next Page.</div>
      <Button onClick={handleClick}>Home Page</Button>
    </div>
  );
};

export default NextPage;
