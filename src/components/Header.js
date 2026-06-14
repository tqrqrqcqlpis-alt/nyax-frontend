import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">

      <Link to="/" className="logo">
        🐾 ニャックス
      </Link>

      <Navbar />

      <div className="user">
        😺 たまにゃん
      </div>

    </header>
  );
}