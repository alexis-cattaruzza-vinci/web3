import logo from './LOGOHEVINCI.jpeg';

const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Header;