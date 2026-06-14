import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


export default function SignupPage() {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
const handleSignup = () => {
  fetch("http://localhost:8080/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      userName: name,
      loginId: email,
      password
    })
  })
    .then(async res => {
      if (!res.ok) {
        throw new Error("登録失敗");
      }
      return res.json();
    })
    .then(data => {
      console.log("登録成功にゃ🐱", data);
      navigate("/login");
    })
    .catch(err => {
      console.error(err.message);
    });
};

  return (
    <div className="login-container">

      <h1>🐾 ニャックス</h1>
      <h2>新規登録</h2>

      <p className="welcome-message">
        猫好きさん、ようこそ🐱
      </p>

      <input
  type="text"
  placeholder="例：たまにゃん"
  onChange={(e) => setName(e.target.value)}
/>

<input
  type="email"
  placeholder="例：tama@example.com"
  onChange={(e) => setEmail(e.target.value)}
/>

<input
  type="password"
  placeholder="パスワード"
  onChange={(e) => setPassword(e.target.value)}
/>
     <button className="login-btn" onClick={handleSignup}>
  登録する
</button>

      <p>
        すでにアカウントをお持ちの方は{" "}
        <Link to="/login">ログイン</Link>
      </p>

    </div>
  );
}