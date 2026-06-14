import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";

export default function EditPost() {
  const { id } = useParams();
  const [post, setPost] = useState({ content: "" });
    const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/api/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  // 👇保存処理
  const handleSave = () => {
    fetch(`http://localhost:8080/api/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => {
        alert("更新完了したにゃ🐱");
        console.log(data);
            navigate("/"); 
      });
  };

  return (
    <div className="post-form">
  <h2>投稿編集</h2>

  <input
    value={post.content}
    onChange={(e) => setPost({ ...post, content: e.target.value })}
  />

  <button className="edit-btn" onClick={handleSave}>
    保存
  </button>

  <button
  type="button"
  className="back-btn"
  onClick={() => navigate("/")}
>
  ← 戻る
</button>
</div>
  );
}