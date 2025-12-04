import React from "react";
import { Link } from "react-router-dom";
import { memo } from "react";

//higher order component
function Home() {
  console.log("home.......")
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

export default memo(Home);
//memo -> Memoizes a functional component to prevent unnecessary re-renders.
//by using memo -> the Home component doesn't re-render itself if anything(like any variable) changes in it
//but if you pass any thing to another component from this componet, like lets say you pass params/props then memo() won't work
//then you need useMemo()
