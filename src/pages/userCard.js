import React,{ useState} from "react";
import { Button } from "react-bootstrap";
import { likeUser } from "../apicalls/usercalls";

import {
    FaHeart,
  } from "react-icons/fa";
  
const UserCard = ({ item }) => {
    //const [wishlistitem, setItem] = useState([]);
    //setItem = item
     const [error, setError] = useState("");
 


  const updateLike = async () => {
     console.log(item.userName)
     const a = JSON.parse((localStorage.getItem("user")))
     console.log(a.userName);
     const likeDetail = {
       userEmail: a.userName,
       user2Email: item.userName,
     }
        likeUser(likeDetail).then((data)=>{
          console.log(data);
          alert(data.status)
        
      }) 
    };


  return (

    <div class="card shadow" style={{margin: "2rem"}}>
       <div>
       
      <div class="card-body">
        {/* <h3 class="card-title" style={{textAlign:'center'}}>{item.userName}</h3> */}
      </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">Name:  <span className="text-white bg-success rounded p-2">{item.userName} </span></li> 
      <li class="list-group-item">Gender:  <span className="text-white bg-success rounded p-2">{item.gender} </span></li> 
       
        <li class="list-group-item">Age:  <span className="text-white bg-success rounded p-2">{item.age} </span></li> 
         <span className="text-danger text-center">{error}</span>
        
     </ul>
       <div class="card-body">
           <div class=" card-description">
               <i>Interests</i>
           </div>
           <p>
              <i>"{item.q1Ans}" "{item.q2Ans}" "{item.q3Ans}"</i> 
           </p>
           
         &nbsp;&nbsp;
          <Button type="button" class="btn btn-default" onClick={updateLike} style={{float: "right"}}>  <FaHeart />
             
         </Button>
        </div>
        
      </div>
    </div>
  );
};

export default UserCard;
