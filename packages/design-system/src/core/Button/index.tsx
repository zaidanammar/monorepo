import React, { ReactNode } from "react";
import {
  Button as PrimeButton,
  ButtonProps as PrimeButtonProps,
} from "primereact/button";

interface ButtonProps extends PrimeButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <PrimeButton>{children}</PrimeButton>;
};
