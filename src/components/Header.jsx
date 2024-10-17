import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
function Header() {
  return (
    <div>
      <div className="header">
        <div className="nav-h">
          <img src={logo} alt="" className="logo" />
          <div className="input-box">
            <i class="bx bx-search"></i>
            <input type="text" placeholder="Search" className="input-h" />
          </div>
        </div>
        <div className="nav">
          <div className="nav-link">
            <Link to={"/"}>Home</Link>
            <Link>About </Link>
            <Link>Contact Us</Link>
            <Link>Blog</Link>
          </div>
          <div className="icons-boxes">
            <i class="bx bx-cart-alt"></i>
            <i class="bx bx-user"></i>
          </div>
        </div>
      </div>
      <div className="sortby-h">
        <div className="sort">
          <div className="sort-box">
            <i class="bx bx-mobile-alt"></i>
            <Link>Phones</Link>
          </div>
          <div className="line"></div>
          <div className="sort-box">
            <i class="bx bx-desktop"></i>
            <Link>Computers</Link>
          </div>
          <div className="line"></div>
          <div className="sort-box">
            <i class="bx bxs-watch-alt"></i>
            <Link>Smart Watches</Link>
          </div>
          <div className="line"></div>
          <div className="sort-box">
            <i class="bx bx-camera"></i>
            <Link>Cameras</Link>
          </div>
          <div className="line"></div>
          <div className="sort-box">
            <i class="bx bx-headphone"></i>
            <Link>Headphones</Link>
          </div>
          <div className="line"></div>
          <div className="sort-box">
            <i class="bx bx-joystick"></i>
            <Link>Gaming</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
