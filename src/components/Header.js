import Button from "./Button";
const Header = ({ title, onAdd }) => {
  const onClickFunc = () => {
    console.log("onClickFunc");
  };
  const onClickFuncProp = () => {
    console.log("onClickFuncProp");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onAdd} />
    </header>
  );
};
Header.defaultProps = {
  title: "task tracker",
};
export default Header;
