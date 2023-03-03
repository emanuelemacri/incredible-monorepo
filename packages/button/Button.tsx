import { FC } from "react";

const Button: FC<ButtonProps> = ({ alt }) => (
  <button className={alt ? 'button alt' : 'button'}>
    Incredible button 3.0.1
  </button>
)

export default Button;

interface ButtonProps {
  alt: boolean;
}
