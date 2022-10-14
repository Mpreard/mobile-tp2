import { slide as Menu } from "react-burger-menu";
import "./Navbar.css";
import Icon1 from "../../assets/icons/icon1.png";
import Icon2 from "../../assets/icons/icon2.png";
import Icon3 from "../../assets/icons/icon3.png";
import Icon4 from "../../assets/icons/icon4.png";
import Profile from "../../assets/images/person.jpg";

function Navbar() {
    return (
        <Menu>
            <div className="Navbar-container">
                <div>
                    <image className="Navbar-image-person" src={Profile}></image>
                </div>
                <button className="Btn-green">Start simulation</button>
                <button className="Btn-blue">Data Analytics</button>
                <div className="Bottom-icons">
                    <image className="Icon-image" src={Icon1}></image>
                </div>
                <div className="Bottom-icons">
                    <image className="Icon-image" src={Icon2}></image>
                </div>
                <div className="Bottom-icons">
                    <image className="Icon-image" src={Icon3}></image>
                </div>
                <div className="Bottom-icons">
                    <image className="Icon-image" src={Icon4}></image>
                </div>
            </div>
        </Menu>
    );
}

export default Navbar;