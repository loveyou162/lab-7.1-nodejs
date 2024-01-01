import { NavLink } from "react-router-dom";
import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes["main-header"]}>
      <nav className={classes["main-header__nav"]}>
        <ul className={classes["main-header__item-list"]}>
          <li>
            <NavLink
              className={classes["main-header__item-link"]}
              activeClassName={classes.active}
              to="/"
              end
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              className={classes["main-header__item-link"]}
              activeClassName={classes.active}
              to="/b"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className={classes["main-header__item-link"]}
              activeClassName={classes.active}
              to="/c"
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              className={classes["main-header__item-link"]}
              activeClassName={classes.active}
              to="/d"
            >
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              className={classes["main-header__item-link"]}
              activeClassName={classes.active}
              to="/add-product"
            >
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink
              className={classes["main-header__item-link"]}
              activeClassName={classes.active}
              to="/e"
            >
              Admin Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
