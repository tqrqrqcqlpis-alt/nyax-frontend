import { useEffect, useState } from "react";
import Header from "../components/Header";
import PostList from "../components/PostList";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function HomePage() {
    const location = useLocation();
  const [posts, setPosts] = useState([]);

 const fetchPosts = async () => {

  const res = await fetch(
    "http://localhost:8080/api/posts"
  );

  const data = await res.json();

  setPosts(data);
};
useEffect(() => {
  fetchPosts();
}, []);

  const handleLike = async (id) => {

  await fetch(
    `http://localhost:8080/api/posts/${id}/like`,
    {
      method: "POST"
    }
  );

  

  fetchPosts();
};

const handleDelete = async (id) => {

  const ok = window.confirm(
    "本当に削除するにゃ？"
  );

  if (!ok) {
    return;
  }

  await fetch(
    `http://localhost:8080/api/posts/${id}`,
    {
      method: "DELETE"
    }
  );

  fetchPosts();
};

  return (
    <div>
      <Header />
      {location.state?.message && (
  <div className="success-message">
    {location.state.message}
  </div>
)}
      
      <PostList posts={posts}
      handleLike={handleLike}
      handleDelete={handleDelete}
       />
    </div>

  );
}