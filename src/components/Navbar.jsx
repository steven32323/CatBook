import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <Link to={"/"}>Home</Link>
        <li>Friends</li>
        <li>Watch</li>
        <li>Marketplace</li>
        <li>Gaming</li>
      </ul>
    </nav>
  );
};
export default Navbar;
