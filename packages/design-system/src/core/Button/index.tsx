import React, { ReactNode } from "react";

export type ButtonVariantTypes = "primary" | "secondary";
export type ButtonSizeTypes = "xl" | "l" | "m" | "xs";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: ButtonSizeTypes;
  variant?: ButtonVariantTypes;
  fullWidth?: boolean;
}

export const Button = ({
  children,
  onClick,
  size = "l",
  variant = "primary",
  fullWidth = false,
  disabled = false,
  className,
  ...buttonProps
}: ButtonProps) => {
  const variantProperties: {
    [K in ButtonVariantTypes]: string;
  } = {
    primary: "bg-black text-white rounded-full",
    secondary: "bg-gray-100 text-black rounded-full",
  };

  const sizeProperties: {
    [K in ButtonSizeTypes]: string;
  } = {
    xs: "px-6 py-0.5 text-m-medium",
    m: "px-6 py-1 text-l-medium",
    l: "px-6 py-2 text-xxl-semibold",
    xl: "px-6 py-3 text-xxl-semibold",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${variantProperties[variant]} ${sizeProperties[size]} ${
        fullWidth ? "w-full" : "w-fit"
      } ${className} ${
        disabled
          ? "bg-neutral-700 text-neutral-300 cursor-not-allowed hover:bg-opacity-100"
          : ""
      }cursor-pointer text-center text-l-bold border-0 hover:bg-opacity-80`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
