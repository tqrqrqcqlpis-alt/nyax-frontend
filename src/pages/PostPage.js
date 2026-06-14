import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function PostPage() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8080/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: content
      })
    });

   

navigate("/", {
  state: {
    message: "投稿したにゃ🐾"
  }
});
  };

  return (
    <div>
      <Header />

      <div className="post-form">
        <h2>✏️ 投稿を作成</h2>

        <form onSubmit={handleSubmit}>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="猫との日常を投稿してみよう..."
          />

          <button className="submit-btn">
            🐾 投稿する
          </button>
        </form>
      </div>
    </div>
  );
}