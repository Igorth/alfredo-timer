import { ButtonContainer, ButtonVariant } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariant;
}

export function Button({ variant = "primary" }: ButtonProps) {
  //ButtonContainer it is sending the variant to the styled component (props)
  return <ButtonContainer variant={variant}>Click me</ButtonContainer>;
}
