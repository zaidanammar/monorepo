import React from "react";
import { Button } from "design-system";
import Router from "next/router";

const Index = () => {
  const handleClick = () => {
    Router.push("/next-page");
  };

  return (
    <div className="titleWrapper">
      <div className="textStyle">Welcome to Admin</div>

      <Button onClick={handleClick}>
        Next page
      </Button>
    </div>
  );
};

export default Index;
