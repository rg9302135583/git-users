import axios from "axios";
import React,{useState,useEffect} from "react";
// import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
// import "../styles/style.css"


function Menu() {
  const [searchTerm, setSearchTerm] = useState("");
  const [repoList, setRepoList] = useState();
  const [tempInfo, setTempInfo] = useState({});

  const gerUserInfo = async () => {
    try { 
      // aakash2018
      // https://api.github.com/users/${searchTerm}/repos?per_page=100&page=1%22%202%3E/dev/null%20|%20jq%20-r%20%27.[]%20|%20.name
      let url = `https://api.github.com/users/${searchTerm}/repos?per_page=100&page=1%22%202%3E/dev/null%20|%20jq%20-r%20%27.[]%20|%20.name`;

       await axios.get(url).then((res)=>{
                    console.log(res.data)
                    setRepoList(res.data)
      });
      
     } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gerUserInfo();
  }, []);


  return (
    <div>

    {/* // <div className="menu"> */}
        {/* <div className="menuList"> */}
        {/* {MenuList.map((menuItem, key) => { */}
        {/* console.log("menuItem",menuItem) */}
        {/* return ( */}
        {/* <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            /> */}
        {/* ); */}
        {/* })} */}
        {/* <div className="wrap"> */}
        <div className="search">
          <input
            type="search"
            placeholder="User's Id or emailId.."
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="searchButton" onClick={gerUserInfo}>
            Search
          </button>
        </div>
      
      {/* This the the  details page */}
            
       {repoList && <MenuItem data={repoList}/>}
        
    
    </div>
  );
}

export default Menu;
