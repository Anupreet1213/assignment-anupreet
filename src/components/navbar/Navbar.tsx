import { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import UserContext from "../../utils/context/UserContext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface NavbarProps {
  signInWithGoogle: () => void;
  signOut: () => void;
}

const isPhoneSize = () => {
  return window.innerWidth <= 600;
};

const Navbar: React.FC<NavbarProps> = ({ signInWithGoogle, signOut }) => {
  const { loggedUser } = useContext(UserContext);
  const [isPhone, setIsPhone] = useState(isPhoneSize());

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(isPhoneSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        THE<span> PRODUCT </span>PLATFORM
      </div>
      <div className="navbar-content">
        <ul>
          {isPhone ? (
            <></>
          ) : (
            <>
              <li style={{ display: "flex", alignItems: "center" }}>
                <span>Learn</span>
                <KeyboardArrowDownIcon />
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <span>Practice</span>
                <KeyboardArrowDownIcon />
              </li>
            </>
          )}
          {loggedUser && loggedUser.photoURL ? (
            <li>
              <div>
                <img
                  src={loggedUser.photoURL}
                  alt="Profile Picture"
                  className="dp"
                />
              </div>
            </li>
          ) : (
            <></>
          )}

          <li>
            {loggedUser ? (
              <div onClick={signOut} className="signButton">
                Sign Out
              </div>
            ) : (
              <div onClick={signInWithGoogle} className="signButton">
                Sign In
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
