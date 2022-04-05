
import { useNavigate } from 'react-router'
const navigate = useNavigate




export const registeruser = async (item) => {
    console.log('Step-2'+ item.email)
    try {
        const res = await fetch(`http://localhost:5000/register/`, {
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