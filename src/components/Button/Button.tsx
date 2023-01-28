import "./style.scss";

interface IButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<IButtonProps> = ({ children }, { type }) => {
  return (
    <button type={type} className="btn">
      {children}
    </button>
  );
};
