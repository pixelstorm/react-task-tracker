import Button from "./Button";
const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Hello" />
      <Button color="pink" text="Hello moto" />
      <Button color="salmon" text="Hello salmon" />
    </header>
  );
};
Header.defaultProps = {
  title: "task tracker",
};
export default Header;
