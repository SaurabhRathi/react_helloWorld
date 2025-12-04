import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Home</h1>
      <p>Welcome to the Home page.</p>
      <button >About</button>
      <button>Contact</button>
      <Link to={"/about"}><button>About</button></Link>
      <Link to={"/contact"}><button>Contact</button></Link>
    </main>
  );
}

export default Home;
