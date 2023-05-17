import { DUMMY_DATA } from "./Newsfeed";
import styles from "./Contacts.module.css";

let names = DUMMY_DATA.map((name) => name.name);

let uniqueNames = [...new Set(names)];

let content = uniqueNames.map((name, index) => <li key={index}>{name}</li>);

const Contacts = (props) => {
  return (
    <div className={styles.contactsList}>
      <h2>Contacts</h2>
      <ul>{content}</ul>
    </div>
  );
};

export default Contacts;
