import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/hexagons-of-different-sizes-on-a-blue-background-vector.jpg";
import "../styles/Home.css";

function Home() {





  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        {/* <h1 style={{ fontWeight: "bold" }}> Home Page </h1> */}
        <p>Git HUB Users List</p>
        <Link to="/menu">
          <button> Search Now </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
