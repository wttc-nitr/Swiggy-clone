import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  // console.log("Header rendered"); // when setBtn is called, the whole Header component is rendered but only btn is updated.
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-sky-50 shadow-lg h-[70px] sticky top-0 z-50">
      <div className="logo-container">
        <img
          className="w-38 h-[70px] rounded-lg"
          src={LOGO_URL}
          alt="logo-image"
        />
      </div>

      <div className="flex items-center">
        <ul className="flex m-4">
          <li className="mx-4">Online: {onlineStatus ? "✅" : "❌"}</li>
          <li className="mx-4">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mx-4">
            {/* NavLink is same as Link, only difference is u can add styles when given route matches to current route*/}
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="mx-4 font-medium">
            <NavLink to="/cart">Cart ({cartItems.length} items)</NavLink>
          </li>
          <li className="mx-4">
            <NavLink to="/contact">Contact us</NavLink>
          </li>
          <li className="mx-4">
            <NavLink to="/grocery">Grocery</NavLink>
          </li>
          <button
            className="mx-4"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
