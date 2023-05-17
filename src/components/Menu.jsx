import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.menuList}>
      <ul className={styles.menuItems}>
        <Link to={"/profile"}>Luna</Link>
        <li>Friends</li>
        <li>Most Recent</li>
        <li>Groups</li>
        <li>Marketplace</li>
        <li>Watch</li>
        <li>Memories</li>
      </ul>
    </div>
  );
};
export default Menu;
