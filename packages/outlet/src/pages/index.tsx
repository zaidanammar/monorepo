import React from "react";
import { Button } from "design-system";
import Router from "next/router";

const Index = () => {
  const handleClick = () => {
    Router.push("/next-page");
  };

  return (
    <div>
      <div className="text-xl-medium">Welcome to Outlet</div>

      <Button onClick={handleClick}>
        Next page
      </Button>
    </div>
  );
};

export default Index;
