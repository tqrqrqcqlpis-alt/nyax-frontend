import Header from "../components/Header";

export default function MyPage() {
  return (
    <div>

      <Header />

      <div className="profile-card">

        <div className="profile-icon">😺</div>

        <h2>たらにゃん</h2>

        <p>
          猫1匹と暮らしています。<br />
          毎日猫に振り回されています🐱
        </p>

        <button className="edit-btn">
          ✏️ プロフィール編集
        </button>

        <div className="stats">
          <div className="stat">
            <h3>154</h3>
            <p>獲得肉球🐾</p>
          </div>

          <div className="stat">
            <h3>12</h3>
            <p>投稿数📝</p>
          </div>

          <div className="stat">
            <h3>38</h3>
            <p>フォロー👥</p>
          </div>
        </div>

      </div>

      <div className="cat-card">
        <h2>🐱 一緒に暮らす猫</h2>

        <div className="cat-list">
          <div className="cat-item">
            <h3>くつみちゃん</h3>
            <p>2歳 / メス</p>
          </div>
        </div>
      </div>

      <div className="about-card">
        <h2>📌 自己紹介</h2>

        <p>
          好きな猫：黒猫🐈<br />
          好きなこと：猫吸い<br />
          休日は猫とまったり過ごしています🐾
        </p>
      </div>

      <div className="recent-posts">

        <h2>📝 最近の投稿</h2>

        <div className="post">
          <h3>たらにゃん</h3>
          <p>うちの猫が今日もキーボードを占領しています。</p>
          <button className="like-btn">🐾 12</button>
        </div>

        <div className="post">
          <h3>たらにゃん</h3>
          <p>新しいおもちゃを買ったら大興奮でした！</p>
          <button className="like-btn">🐾 28</button>
        </div>

      </div>

    </div>
  );
}