import { FC } from "react";

const Button: FC<ButtonProps> = ({ alt }) => (
  <button className={alt ? 'button alt' : 'button'}>
    Incredible button 1.2.0 - change text by laura
  </button>
)

export default Button;

interface ButtonProps {
  alt: boolean;
}