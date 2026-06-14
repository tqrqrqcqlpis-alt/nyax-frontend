import PostItem from "./PostItem";

export default function PostList({ posts,handleLike,handleDelete }) {
  return (
    <div>
      {posts.map(post => (
        <PostItem key={post.id} post={post} handleLike={handleLike} handleDelete={handleDelete} />
      ))}
    </div>
  );
}