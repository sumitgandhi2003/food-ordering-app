import "./heading.css";
import logo from "../../assets/images/logo.png";
import menu from "../../assets/images/menu.svg";

const Heading = () => {
  return (
    <div className="nav-bar">
      <div id="logo-img">
        <img src={logo} alt="" />
      </div>
      <div id="nav-link">
        <a href="#">Home</a>
        <a href="#">About US</a>
        <a href="#">Contact Us</a>
        <a href="#">Cart</a>
        <div id="menu">
          <img src={menu} alt="menu" />
        </div>
      </div>
    </div>
  );
};

export default Heading;
