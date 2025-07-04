import { Link } from "react-router-dom";
import "../styles/Layout.css";

const Home = () => {
  return (
    <div className="content-area">
      <div className="row">
        <div className="card">
          <div className="text-center m-3">
            <h2>Welcome to Trive Dev Home</h2>
          </div>
          <p className="card-text m-3">
            Thanks for stopping by. This site is a place where I share my work,
            ideas, and ongoing projects. Whether you're here to explore
            something specific or just browsing, I hope you find something
            interesting or useful.{" "}
          </p>
            <p className="card-text m-3 text-center">
              🔍 Take a look around, and feel free to get in touch if you have any
              questions or feedback!
            </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
