import React, { useEffect, useState } from "react";
import axios from "axios";




function MenuItem({ image, name, price }) {
const [data,setData]=useState()

  const gitTypeUrl = {}
const getGitHubUser_Search = async ()=>{
  // ""
  // let demo ="https://api.github.com/users/rg9302135583/repos?per_page=100&page=1%22%202%3E/dev/null%20|%20jq%20-r%20%27.[]%20|%20.name"
  try  {
    const response = await axios.get(
      "https://api.github.com/users/rg9302135583/repos",
      
    );
    console.log("response",response.data);
    setData(response.data)
  } catch (err) {
    console.log(err);
  }
}

const getGitHubUser_Repo = async ()=>{
  // ""
  // let demo ="https://api.github.com/users/rg9302135583/repos?per_page=100&page=1%22%202%3E/dev/null%20|%20jq%20-r%20%27.[]%20|%20.name"
  try  {
    const response = await axios.get(
      "https://api.github.com/users/rg9302135583/repos",
      
    );
    console.log("response",response.data);
    setData(response.data)
  } catch (err) {
    console.log(err);
  }
}
useEffect(() => {
    getGitHubUser_Repo();
  }, []);
  return (
    <div className="menuItem">

      {/* <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ₹{price} </p> */}
    </div>
  );
}

export default MenuItem;
