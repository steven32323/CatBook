import NewsItem from "./NewsItem";
import catTest from "../assets/catTest.jpg";
import catTest2 from "../assets/catTest2.jpg";
import catTest3 from "../assets/catTest3.jpg";
import styles from "./NewsFeed.module.css";
import { useEffect, useState } from "react";
import NewPost from "./NewPost";

export const DUMMY_DATA = [
  {
    name: "Luna",
    status: "Added a new photo",
    datePosted: "2d",
    description: "Shades 😎😎",
    img: catTest,
    id: "p1",
  },
  {
    name: "Luna",
    description: "Need a new scratching post ASAP 😿😿",
    datePosted: "1d",
    id: "p5",
  },
  {
    name: "Lacey",
    status: "Updated their profile photo",
    datePosted: "3d",
    description: "felt cute, might delete later 😻😻",
    img: catTest2,
    id: "p2",
  },
  {
    name: "Leo",
    status: "Updated their profile photo",
    datePosted: "4d",
    description: "Hide and seek! 😼🙀",
    img: catTest3,
    id: "p3",
  },
];

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        "https://react-facebook-4c677-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
      );
      const data = await response.json();
      console.log(Object.values(data));
      setPosts(Object.values(data));
    }
    fetchPosts();
  }, []);

  return (
    <>
      <div className={styles.newsFeed}>
        <NewPost />
        {posts.map((post) => (
          <NewsItem
            key={post.id}
            name={post.name}
            status={post.status}
            description={post.description}
            datePosted={post.datePosted}
            img={post.img}
          />
        ))}
      </div>
    </>
  );
};

export default NewsFeed;
