import React, { useState, useEffect } from "react";
import { getConnection } from "../apicalls/usercalls";
import ConnectionsCard from "./connectionsCard";
import {
    FaHeart,
  } from "react-icons/fa";

function Connections() {

    const [connections, setConnections] = useState([]);
    const [reload, setReload] = useState(false);
    const [error, setError] = useState("");

    const a = JSON.parse((localStorage.getItem("user")))
    console.log(a.userName);
    const item = { "userEmail": a.userName}
    const loadConnections = () => {
        getConnection(item).then((data) => {
          {
            console.log(data);
            setConnections(data)
          }
        });
      };
    
      useEffect(() => {
        loadConnections();
      }, [reload]);
    
    
    return (
        <div style={{backgroundColor: "#e7e393"}}> 
        <div  className="container d-flex justify-content-center ">
          <div className="row">
            <div className="col-12">
              <div className="jumbotron text-center">
                <h1> My Connections  <FaHeart /></h1>
              </div>
            </div>
            {/* {dashboardUsers} */}
            {connections.map((item, index) => {
              return (
                <div key={index} className="col-md-4 mb-4">
                  < ConnectionsCard item={item}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    
    ) 
}
export default Connections