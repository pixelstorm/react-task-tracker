const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};
Header.defaultProps = {
  title: "task tracker",
};
export default Header;
