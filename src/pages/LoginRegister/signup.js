import react, { useState } from 'react';
// import './form.css';
import './styles/register.css';
import { registeruser ,insertUser} from '../../apicalls/usercalls';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';

function Register(){
    const [errors, setErrors] = useState({});
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("")
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] =  useState("")
    const [confirmpassword, setconfirmpassword] = useState("")
    const [dob, setdob] = useState();
    const [gender, setgender] = useState("");
    const [q1Ans, setq1Ans] = useState("");
    const [q2Ans, setq2Ans] = useState("");
    const [q3Ans, setq3Ans] = useState("");
    const [cognitoerr, setcognitoerr] = useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
           
            case 'q1Ans': 
            if(value.length >0 ) {
              setq1Ans(value);
            } else{
                setErrors({
                    ...errors,
                    q1Ans:'Please enter your answer!'
                })

            }     
            break;
            case 'q2Ans': 
            if(value.length >0 ) {
                setq2Ans(value);
            } else{
                setErrors({
                    ...errors,
                    q2Ans:'Please enter your answer!'
                })

            }     
            break;
            case 'q3Ans': 
            if(value.length >0 ) {
                setq3Ans(value);
            } else{
                setErrors({
                    ...errors,
                    q3Ans:'Please enter your answer!'
                })

            }     
            break;
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
        const age = calculateAge(dob);
        console.log(age)
        console.log(q1Ans)
        const userCard ={email:email, userName:firstname,  gender: gender, age:age, q1Ans: q1Ans, q2Ans: q2Ans, q3Ans: q3Ans}
        console.log(person)
        console.log(userCard)
        
            registeruser(person).then((data)=>{
                console.log("step1")
                if (data.error) {
                    setcognitoerr(data.error);
                    console.log(data.error)
                } else {
                  console.log(data);
                  insertUser(userCard).then((data)=>{
                      console.log(data)
                   })
                   navigate("/login", { state:  "User Registered"  });
               
                }
              })
        
    };
    const calculateAge = (dob) => {
        var today = new Date();
        var birthDate = new Date(dob);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
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
                        <option>F</option>
                        <option>M</option>
                        <option> O</option>
                    </select>
                </div>
                <div class='col-md-4'>
                <label for="sel1">Select Interests:</label>
                    <select class="form-control" id="sel2" name='interests'  onChange={handleChange}>
                        <option>F</option>
                        <option>M</option>
                        <option>O</option>
                    </select>
                </div>
                <div class='col-md-4'>
                <label for="validationServer01" class="form-label">Date of birth</label>
                    <input type="date" class="form-control" id="validationServer01"  name='dob' onChange={handleChange} required />
                </div>
              </div>
              <div class="input-group mb-3">
                    <span class="input-group-text"  id="inputGroup-sizing-default"> (Q1) I like to..</span>
                <input type="text" placeholder="Enter Answer" name='q1Ans'  onChange={handleChange} class="form-control" aria-label="Default"  aria-describedby="inputGroup-sizing-default" />
             
              </div>
              <div class="input-group mb-3">
                     <span class="input-group-text" id="inputGroup-sizing-default"> (Q2) My favourite movie is...</span>
              <input type="text"  placeholder="Enter Answer"  name='q2Ans'  onChange={handleChange} class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
             
              </div>
              <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default"> (Q3) My favourite book is... </span>
                <input type="text"  placeholder="Enter Answer" class="form-control" name='q3Ans'  onChange={handleChange} aria-label="Default" aria-describedby="inputGroup-sizing-default" />
             
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
