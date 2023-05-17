import catTest from "../assets/catTest.jpg";
import styles from "./NewsItem.module.css";

const NewsItem = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={catTest} className={styles.imgLogo} />
        <div>
          <p>
            <span className={styles.bold}>{props.name} </span>
            <span>{props.status}</span>
          </p>
        </div>
      </div>
      <p className={styles.datePosted}>{props.datePosted}</p>
      <p>{props.description}</p>
      {props.img && <img src={props.img} className={styles.imgLarge} />}
      <p>
        Like <span>Comment </span>
        <span> Share</span>
      </p>
    </div>
  );
};
export default NewsItem;
