import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useStore from "../../store";
import LoginIcon from "@mui/icons-material/Login";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

export default function Header() {
    const { access_token } = useStore();
  return (
    <header
  className="
    flex 
    justify-between 
    items-center 
    py-4
    px-[50px]
    border-b 
    border-gray-200 
    bg-white 
    sticky 
    top-0 
    z-99
  "
>
      {/* Left Section: Menu / Logo */}
      <nav>
        <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
        <Link to="/contact" style={{ marginRight: "20px" }}>Contact</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* Right Section: Login / Cart */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>

        <Link  to={`/${
            access_token != null && access_token != undefined
              ? "dashboard"
              : "login"
          }`}>
              {access_token != null && access_token != undefined ? (
            <>
              <span className="hidden md:inline-block">Dashboard</span>
              <PermIdentityIcon />
            </>
          ) : (
            <>
              <span>Login</span>
              <LoginIcon />
            </>
          )}
          </Link>

        <Link to="/basket" style={{ display: "flex", alignItems: "center" }}>
          <ShoppingCartIcon />
        </Link>
      </div>
    </header>
  );
}
