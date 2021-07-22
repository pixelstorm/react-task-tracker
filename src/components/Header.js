import Button from "./Button";
const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };
  const onClickFunc = () => {
    console.log("onClickFunc");
  };
  const onClickFuncProp = () => {
    console.log("onClickFuncProp");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Hello" onClick={onClick} />
      <Button color="pink" text="Hello moto" onClick={onClickFunc} />
      <Button color="salmon" text="Hello salmon" onClick={onClickFuncProp} />
    </header>
  );
};
Header.defaultProps = {
  title: "task tracker",
};
export default Header;
