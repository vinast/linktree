import ParticlesBg from "particles-bg";
import "./App.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div>
      <div className="card">
        <div className="card_body">
          <div className="profile">
            <img src="/logo192.png" className="avatar"></img>
            <h1>👻VINAST👻</h1>
            <p>BUG LAGI ASUU</p>
          </div>
          <div className="mt-16">
            <a href="https://instagram.com/vinastt_/"></a>
            INSTAGRAM
          </div>
          <div className="mt-16">
            <a href="/some-url"></a>
            YOUTUBE
          </div>
          <div className="mt-16">
            <a href="/some-url"></a>
            TWITTER
          </div>
          <div className="mt-16">
            <a href="/some-url"></a>
            GITHUB
          </div>
        </div>
      </div>
      <ParticlesBg type="thick" bg={true} />
    </div>
  );
}

export default App;
