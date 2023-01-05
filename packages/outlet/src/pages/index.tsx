import React from "react";
import { Button } from "design-system";
import Router from "next/router";

const Index = () => {
  const handleClick = () => {
    Router.push("/next-page");
  };

  return (
    <div className="p-6">
      <div className="text-xl-bold">Welcome to Outlet</div>

      <Button size="xl" variant="primary" className="mt-4" onClick={handleClick}>
        Next page
      </Button>
    </div>
  );
};

export default Index;
