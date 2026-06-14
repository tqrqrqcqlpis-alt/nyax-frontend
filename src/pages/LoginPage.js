import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="login-container">

      <h1>🐾 ニャックス</h1>
      <h2>ログイン</h2>

      <input type="email" placeholder="メールアドレス" />
      <input type="password" placeholder="パスワード" />

      <button className="login-btn">ログイン</button>

      <p>
        はじめての方は{" "}
        <Link to="/signup">新規登録</Link>
      </p>

    </div>
  );
}