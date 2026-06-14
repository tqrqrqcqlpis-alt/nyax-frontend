import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">

      <Link to="/post">投稿</Link>
      <Link to="/mypage">マイページ</Link>
      <Link to="/logout">ログアウト</Link>

    </nav>
  );
}