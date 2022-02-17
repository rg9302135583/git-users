import axios from "axios";
import React,{useState,useEffect} from "react";
// import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import BannerImage from "../assets/hexagons-of-different-sizes-on-a-blue-background-vector.jpg";
import "../styles/Menu.css";
// import "../styles/style.css"
import { Octokit } from "@octokit/rest";

function Menu() {
  const [searchTerm, setSearchTerm] = useState("");
  const [repoList, setRepoList] = useState();
  const [tempInfo, setTempInfo] = useState({});
  const [updateui,setUpdateui] = useState(true);
  const octokit = new Octokit();

  octokit.rest.repos
  .listForOrg({
    org: "octokit",
    type: "public",
  })
  .then(({ data }) => {
    // handle data
    console.log("Octkkit data",data)
  });

  const requestOptions = octokit.rest.repos.get.endpoint({
    owner: "rg9302135583",
    // repo: "rest.js",
  });
  console.log("requestOptions",requestOptions)

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
                    let readme_url = `https://raw.githubusercontent.com/aakash2018/Amazon_Clone/main/README.md`
                    // function downloadURI() {
                    //   var link = document.createElement("a");
                    //   link.download = `https://raw.githubusercontent.com/aakash2018/Amazon_Clone/main/README.md`;
                    //   link.href = `https://raw.githubusercontent.com/aakash2018/Amazon_Clone/main/README.md`;
                    //   document.body.appendChild(link);
                    //   link.click();
                    //   document.body.removeChild(link);
                    // }
                    // downloadURI()
      });
      
     } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gerUserInfo();
  }, []);


  return (
    <div style={{backgroundImage: `url(${BannerImage})`,minHeight:`100vh`, marginTop:0}}>
        <div>
        <h4>Please enter GitHub Username to find the public repositories of user.</h4><br></br>
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
