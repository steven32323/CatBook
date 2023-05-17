import catTest from "../assets/catTest.jpg";
import NewsItem from "./NewsItem";
import { DUMMY_DATA } from "./Newsfeed";
import styles from "./ProfilePageContent.module.css";

const postsByLuna = DUMMY_DATA.filter((post) => post.name === "Luna");

const ProfilePageContent = () => {
  const content = postsByLuna.map((post) => (
    <NewsItem
      key={post.id}
      name={post.name}
      description={post.description}
      datePosted={post.datePosted}
      img={post.img}
    />
  ));

  return (
    <>
      <div className={styles.profileHeader}>
        <div className={styles.profileHeader}>
          {<img src={catTest} className={styles.imgProfile} />}
        </div>
        <div className={styles.profileName}>
          <h1>Luna Smith</h1>
          <h2>23 friends</h2>
        </div>
      </div>
      <div className={styles.newsFeed}>{content}</div>
    </>
  );
};

export default ProfilePageContent;
