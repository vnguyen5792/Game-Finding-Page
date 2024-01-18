interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger"; //this only lets you set the button to these certain strings
  onCLick: () => void;
}

const Button = ({ children, color = "primary", onCLick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onCLick}>
      {children}
    </button>
  );
};

export default Button;
