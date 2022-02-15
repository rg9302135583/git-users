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
  const [updateui,setUpdateui] = useState(true);

  const gerUserInfo = async () => {
    setUpdateui(false);
    try { 
      // aakash2018
      // https://api.github.com/users/${searchTerm}/repos?per_page=100&page=1%22%202%3E/dev/null%20|%20jq%20-r%20%27.[]%20|%20.name
      let url = `https://api.github.com/users/${searchTerm}/repos?per_page=100&page=1%22%202%3E/dev/null%20|%20jq%20-r%20%27.[]%20|%20.name`;

       await axios.get(url).then((res)=>{
                    console.log(res.data)
                    setRepoList(res.data);
                    setUpdateui(true);
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
            {updateui ?
            <>
       {repoList && <MenuItem data={repoList}/>}
            </>
          :""}
        
    
    </div>
  );
}

export default Menu;
