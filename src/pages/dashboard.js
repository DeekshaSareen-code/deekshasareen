import React, { useState, useEffect } from "react";
import { dashboard } from "../apicalls/usercalls";
import UserCard from "./userCard";
function Dashboard() {

    const [dashboardUsers, setDashboardUsers] = useState([]);
    const [reload, setReload] = useState(false);
    const loadDashboardUsers = () => {
        dashboard().then((data) => {
          {
            console.log(data);
            setDashboardUsers(data)
          }
        });
      };
    
      useEffect(() => {
        loadDashboardUsers();
      }, [reload]);
    
    
    return (
        <div style={{backgroundColor: "#e7e393"}}> 
        <div  className="container d-flex justify-content-center ">
          <div className="row">
            <div className="col-12">
              <div className="jumbotron text-center">
                <h1> Current Active User List </h1>
                <p>Like it, Heart it!</p>
              </div>
            </div>
            {/* {dashboardUsers} */}
            {dashboardUsers.map((item, index) => {
              return (
                <div key={index} className="col-md-4 mb-4">
                  <UserCard item={item}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    
    ) 
}
export default Dashboard