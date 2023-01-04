import { ButtonVariantTypes, ButtonSizeTypes } from "../core/Button";

interface Button {
  title: string;
  variant: ButtonVariantTypes;
  size: ButtonSizeTypes;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const listButton: Button[] = [
  {
    title: "Extra Large Button",
    variant: "primary",
    size: "xl",
  },
  {
    title: "Extra Large Button",
    variant: "secondary",
    size: "xl",
  },
  {
    title: "Large Button",
    variant: "primary",
    size: "l",
  },
  {
    title: "Large Button",
    variant: "secondary",
    size: "l",
  },
  {
    title: "Medium Button",
    variant: "primary",
    size: "m",
  },
  {
    title: "Medium Button",
    variant: "secondary",
    size: "m",
  },
  {
    title: "Extra Small Button",
    variant: "primary",
    size: "xs",
  },
  {
    title: "Extra Small Button",
    variant: "secondary",
    size: "xs",
  },
  {
    title: "Disabled Button",
    variant: "primary",
    size: "l",
    disabled: true,
  },
  {
    title: "Disabled Button",
    variant: "secondary",
    size: "l",
    disabled: true,
  },
  {
    title: "Fullwidth Button",
    variant: "primary",
    size: "l",
    fullWidth: true,
  },
  {
    title: "Fullwidth Button",
    variant: "secondary",
    size: "l",
    fullWidth: true,
  },
];
