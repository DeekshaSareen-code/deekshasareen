import { API } from "../API";
import { useNavigate } from 'react-router'
const navigate = useNavigate




export const loginuser = async (item) =>{
    console.log('Step-2'+ item.email)
    try {
        const res = await fetch(`http://localhost:5000/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(item)
      
        });
        return await res.json();
    }catch (err) {
        return console.log(err);
    };
}
export const registeruser = async (item) => {
    console.log('Step-2'+ item.email)
    try {
        const res = await fetch(`http://localhost:5000/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(item)
      
        });
        return await res.json();
    }catch (err) {
        return console.log(err);
    };

};

export const dashboard = async ()=>{
    console.log("Step-2");
    return fetch(`${API}/wallUser`, {
        method: "GET"
    })
    .then(res => {
        return res.json();
    })
    .catch(err => console.log(err));

    
}

export const getConnection = async (item)=>{
    console.log("Step-2"+ item.userEmail);
    return fetch(`${API}/connections?userEmail=`+item.userEmail, {
        method: "GET",
    })
    .then(res => {
        return res.json();
    })
    .catch(err => console.log(err));

    
}
export const likeUser = async (item) => {
    console.log('Step-2')
    try {
        const res = await fetch(`${API}/like`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(item)
      
        });
        return await res.json();
    }catch (err) {
        return console.log(err);
    };

};

export const insertUser = async (item) => {
    console.log('Step-2'+ item.email)
    try {
        console.log(JSON.stringify(item))
        console.log('${API}/insertUser')
        const res = await fetch(`${API}/insertUser`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(item)
      
        });
        return await res.json();
    }catch (err) {
        return console.log(err);
    };

};