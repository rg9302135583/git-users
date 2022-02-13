import React,{useState,useEffect} from "react";
// import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import "../styles/style.css"


function Menu() {
  const [searchTerm, setSearchTerm] = useState("rg9302135583");
  const [repoList, setRepoList] = useState();
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      // https://api.github.com/users/${searchTerm}/repos?per_page=100&page=1%22%202%3E/dev/null%20|%20jq%20-r%20%27.[]%20|%20.name
      let url = `https://api.github.com/users/${searchTerm}/repos?per_page=100&page=1%22%202%3E/dev/null%20|%20jq%20-r%20%27.[]%20|%20.name`;

      let res = await fetch(url);
      let data = await res.json();
      // const { temp, humidity, pressure } = data.main;
      // const { main: weatherType } = data.weather[0];
      let JsonData=data && data.map((dt)=>{
          console.log("dt.name =:",dt.name)
          return dt.name
      })
      console.log("JsonData ",data) ;
      setRepoList(data)
      // const { speed } = data.wind;
      // const { country, sunset } = data.sys;
      console.log("res",res)
      // console.log("name",name )
      console.log("data",data.length )
      // const myNewWeatherInfo = {
      //   temp,
      //   humidity,
      //   pressure,
      //   weatherType,
      //   name,
      //   speed,
      //   country,
      //   sunset,
      // };

      // setTempInfo(myNewWeatherInfo);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
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
          <button className="searchButton" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      
      {/* This the the  details page */}
      
       {repoList&& <MenuItem {...repoList}/>}
        
    
    </div>
  );
}

export default Menu;
