import { useNavigate } from "react-router-dom";

export default function PostItem({ post, handleLike, handleDelete }) {
  const navigate = useNavigate();

  return (
    <div className="post">

      <h3>たまにゃん</h3>

      <p className="post-time">
        {new Date(post.createdAt).toLocaleString("ja-JP", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        })}
      </p>

      <p>{post.content}</p>

      <div className="post-actions">
        <button onClick={() => handleLike(post.id)}>
          🐾 {post.likes}
        </button>

        <button onClick={() => handleDelete(post.id)}>
          🗑️
        </button>

        <button onClick={() => navigate(`/posts/${post.id}/edit`)}>
          編集
        </button>
      </div>

    </div>
  );
}