import React,{ useState} from "react";
import { Button } from "react-bootstrap";
import { likeUser } from "../apicalls/usercalls";

import {
    FaHeart,
  } from "react-icons/fa";
  
const ConnectionsCard = ({ item }) => {
    //const [wishlistitem, setItem] = useState([]);
    //setItem = item
     const [error, setError] = useState("");
 



  return (

    <div class="card shadow border-primary" style={{margin: "3rem"}}>
       <div style={{margin: "2rem"}} >
       
      <ul class="list-group list-group-flush">
      <li class="list-group-item">Email to connect with:  <span className="text-white bg-success rounded p-2">{item} </span></li> 
         <span className="text-danger text-center">{error}</span>
        
     </ul>
        
      </div>
    </div>
  );
};

export default ConnectionsCard;
