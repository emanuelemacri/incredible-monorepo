import { FC } from "react";

const Button: FC<ButtonProps> = ({ alt }) => (
  <button className={alt ? 'button alt' : 'button'}>
    Incredible button 4.0.0 rc
  </button>
)

export default Button;

interface ButtonProps {
  alt: boolean;
}
