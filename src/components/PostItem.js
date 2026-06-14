export default function PostItem({ post,handleLike,handleDelete }) {
  return (
    <div className="post">

      <h3>たまにゃん</h3>

      <p className="post-time">
        {post.createdAt}
      </p>

      <p>{post.content}</p>

      <div className="post-actions">

        <button
  className="like-btn"
  onClick={() => handleLike(post.id)}
>
  🐾 {post.likes}
</button>

        <button
  onClick={() => handleDelete(post.id)}
>
  🗑️
</button>
      </div>
    </div>
  );
}