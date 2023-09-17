import { Link } from "react-router-dom";
import {
  faHandHoldingDollar,
  faUserGroup,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/salary" className="site-name">
        EquiPay
      </Link>
      <ul>
        <li>
          <Link to="/" className="link">
            Salary &nbsp; <FontAwesomeIcon icon={faHandHoldingDollar} />
          </Link>
        </li>
        <li>
          <Link to="/forum" className="link">
            Forum &nbsp; <FontAwesomeIcon icon={faUserGroup} />
          </Link>
        </li>
        <li>
          <Link to="/trivia" className="link">
            Trivia &nbsp; <FontAwesomeIcon icon={faLightbulb} />
          </Link>
        </li>
      </ul>
      <button type="button">
        <Link to="/signup" style={{ textDecoration: "None", color: "black" }}>
          Sign Up
        </Link>
      </button>
    </nav>
  );
}

export default Navbar;
