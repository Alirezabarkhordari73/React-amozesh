import { useState } from "react";

import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import "./HomePage.css";

const HomePage = () => {
  const [counter, setCounter] = useState(0);

  // let count = 0;

  const increaseNumberHandler = () => {
    setCounter(counter + 1);

    // count = count + 1;
    // console.log(count);
  };

  const decreaseNumberHandler = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <Layout>
      <div className="HomePageContainer">
        <h1>HomePage Content</h1>
        <div className="Counter-Section">
          <p>{counter}</p>
          <div className="Buttons-Container">
            <button onClick={increaseNumberHandler}>increase</button>
            <button onClick={decreaseNumberHandler}>decrease</button>
          </div>
        </div>
        <Link to="/about-page">
          <button>Go To About Page</button>
        </Link>
      </div>
    </Layout>
  );
};

export default HomePage;
