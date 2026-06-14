import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="login-container">

      <h1>🐾 ニャックス</h1>
      <h2>新規登録</h2>

      <p className="welcome-message">
        猫好きさん、ようこそ🐱
      </p>

      <input type="text" placeholder="例：たまにゃん" />
      <input type="email" placeholder="例：tama@example.com" />
      <input type="password" placeholder="パスワード" />
      <input type="password" placeholder="パスワード確認" />

      <button className="login-btn">登録する</button>

      <p>
        すでにアカウントをお持ちの方は{" "}
        <Link to="/login">ログイン</Link>
      </p>

    </div>
  );
}