import React, { useEffect, useState } from "react";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div className="post-wrapper">
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          img={post.data().image}
          bookTitle={post.data().title}
          username={post.data().username}
          review={post.data().review}
          rating={post.data().rating}
        />
      ))}

      {/* Post */}
    </div>
  );
}

export default Posts;
