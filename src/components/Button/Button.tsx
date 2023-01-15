import "./style.scss";

interface IButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = ({ children }) => {
  return <button className="btn">{children}</button>;
};
