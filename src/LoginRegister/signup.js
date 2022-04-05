import react, { useState } from 'react';
// import './form.css';
import './styles/register.css';
import { registeruser } from '../apicalls/usercalls';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Register(props){
    const validEmailRegex = RegExp(/\S+@\S+\.\S+/)
    const validNameRegex = RegExp(/^[aA-zZ\s]+$/)
    const [errors, setErrors] = useState({});
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("")
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] =  useState("")
    const [confirmpassword, setconfirmpassword] = useState("")
    const [dob, setdob] = useState();
    const [gender, setgender] = useState("");
    const [cognitoerr, setcognitoerr] = useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
           
            case 'firstName': 
            if(value.length >0 ) {
              setfirstname(value);
            } else{
                setErrors({
                    ...errors,
                    firstName:'Please enter a name!'
                })

            }     
            break;
            case 'lastName': 
            if(value.length >0){
               setlastname(value);
            } else{
                setErrors({
                    ...errors,
                    lastName:'Please enter a name!'
                })

            } 
            break;
            case 'email': 
            if(value.length >0){
              setemail(value);
            } else{
                setErrors({
                    ...errors,
                    email:'Please enter an email!'
                })

            } 
            break;
            case 'gender': 
            console.log(value)
            if(value.length >0){
              setgender(value);
            } else{
                setErrors({
                    ...errors,
                    gender:'Please select your gender!'
                })

            } 
            break;
            case 'dob': 
            if(value.length >0){
              setdob(value);
            } else{
                setErrors({
                    ...errors,
                    dob:'Please select your date of birth!'
                })

            } 
            break;
            case 'password': 
            if(value.length >0){
               setpassword(value);
            } else{
                setErrors({
                    ...errors,
                    password:'Please enter a password!'
                })

            } 
            break;
            case 'confirmPassword': 
            if(value.length>0 ){
               setconfirmpassword(value);
            } 
            break;
            default:
              break;
          }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const person = {firstName:firstname, lastName:lastname, email:email, password:password, confirmPassword: confirmpassword, gender: gender, dob: dob} ;
        console.log(person)
        
            registeruser(person).then((data)=>{
                console.log("step1")
                if (data.error) {
                    setcognitoerr(data.error);
                    console.log(data.error)
                } else {
                  console.log(data);
                  navigate("/login", { state:  "User Registered"  });
                }
          
            }
         )
        
    };
    return (
        <div className='register'>
        <div className='form-register'>
          <h1>Registration</h1>
          <Form method='POST' action='/signup' onSubmit={handleSubmit} >
              <div className='row'> 
              <div class="col-md-6">
                    <label for="validationServer01" class="form-label">First name</label>
                    <input type="text" class="form-control"  placeholder="Enter First Name" name="firstName" onChange={handleChange} required />
               </div>
               <div class="col-md-6">
                    <label for="validationServer02" class="form-label">Last name</label>
                    <input type="text" class="form-control"  placeholder="Enter Last Name"  name="lastName" onChange={handleChange} required />
               </div>
              </div>
              <div className='row'>
              <div class="col">
                    <label for="validationServer01" class="form-label">Email</label>
                    <input type="email" class="form-control"  placeholder="Enter Email" name="email" onChange={handleChange} required />
               </div>
              </div>
              <div className='row'>
              <div class="col-md-6">
                    <label for="validationServer01" class="form-label">Password</label>
                    <input type="password" class="form-control"  placeholder="Enter Password"  name="password" onChange={handleChange} required />
               </div>
               <div class="col-md-6">
                    <label for="validationServer01" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="validationServer01"  placeholder="Re-enter Password"  name='confirmPassword' onChange={handleChange} required />
               </div>
              </div>
              <div className='row'>
                <div class='col-md-4'>
                <label for="sel1">Select Gender:</label>
                    <select class="form-control" id="sel1" name='gender'  onChange={handleChange}>
                        <option>Female</option>
                        <option>Male</option>
                        <option> Other</option>
                    </select>
                </div>
                <div class='col-md-4'>
                <label for="sel1">Select Interests:</label>
                    <select class="form-control" id="sel2" name='interests'  onChange={handleChange}>
                        <option>Female</option>
                        <option>Male</option>
                        <option>Other</option>
                    </select>
                </div>
                <div class='col-md-4'>
                <label for="validationServer01" class="form-label">Date of birth</label>
                    <input type="date" class="form-control" id="validationServer01"  name='dob' onChange={handleChange} required />
              
                </div>
              </div>
                
                <div class="col-md-12 text-center">
                    <button type="submit" onClick={handleSubmit} class="btn btn-primary">Sign Up</button>
                </div>
                </Form>
                <div>
                    <p style={{color: "red"}}> {cognitoerr}</p>
                </div>
        </div>
      </div>
           
    );
}
export default Register
