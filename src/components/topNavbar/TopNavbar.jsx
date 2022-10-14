import "./TopNavbar.css";
import Personn from "../../assets/images/person.jpg";

function TopNavbar() {
    return (
        <div className="Top-navbar">
            <button className="Top-navbar-tag">Current CE: anglet</button>
            <div className="Drop-down-btn">
                <img className="Top-navbar-image" src={Personn} alt="Personn"></img>
                <button>demo</button>
            </div>
        </div>
    );
}

export default TopNavbar;