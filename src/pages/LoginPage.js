import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = () => {
  fetch("http://localhost:8080/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      loginId,
      password
    })
  })
    .then(async res => {
      if (!res.ok) {
        throw new Error("ログイン失敗");
      }
      return res.json();
    })
    .then(data => {
      console.log("ログイン成功にゃ🐱", data);
      navigate("/"); // とりあえずホームへ
    })
    .catch(err => {
      console.error(err.message);
      alert("ログイン失敗にゃ🐱");
    });
};
  return (
    <div className="login-container">

      <h1>🐾 ニャックス</h1>
      <h2>ログイン</h2>

      <input
  type="text"
  placeholder="ログインID"
  onChange={(e) => setLoginId(e.target.value)}
/>

<input
  type="password"
  placeholder="パスワード"
  onChange={(e) => setPassword(e.target.value)}
/>

      <button className="login-btn" onClick={handleLogin}>
  ログインにゃ
</button>

      <p>
        はじめての方は{" "}
        <Link to="/signup">新規登録</Link>
      </p>

    </div>
  );
}