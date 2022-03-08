import react, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';

function Register(props){
    const validEmailRegex = RegExp(/\S+@\S+\.\S+/)
    const validNameRegex = RegExp(/^[aA-zZ\s]+$/)
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'firstName': 
            if(value.length >0 && !validNameRegex.test(value)){
                setErrors({
                    ...errors,
                    firstName:'Name is not valid!'
                })
            } else{
              setErrors({
                ...errors,
                firstName:''
            })
                props.setfirstname(value);
            }      
            break;
            case 'lastName': 
            if(value.length >0 && !validNameRegex.test(value)){
                setErrors({
                    ...errors,
                    lastName:'Name is not valid!'
                })
            } else{
              setErrors({
                ...errors,
                lastName:''
            })
                props.setlastname(value);
            } 
            break;
            case 'email': 
            if(value.length >0 && !validEmailRegex.test(value)){
                setErrors({
                    ...errors,
                    email:'Email is not valid!'
                })
            } else{
              setErrors({
                ...errors,
                email:''
            })
                props.setemail(value);
            } 
            break;
            case 'password': 
            if(value.length <8){
                setErrors({
                    ...errors,
                    password:'Password should have atleast 8 characters'
                })
            } else{
              setErrors({
                ...errors,
                password:''
            })
                props.setpassword(value);
            } 
            break;
            case 'confirmPassword': 
            if(value !== props.password){
                setErrors({
                    ...errors,
                    confirmPassword:'Passwords do not match!'
                })
            } else{
              setErrors({
                ...errors,
                confirmPassword:''
            })
                props.setconfirmPassword(value);
            } 
            break;
            default:
              break;
          }
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        var flag = false;
        console.log(props);
        Object.values(errors).forEach(val => {
          console.log(errors)
          if (val.length > 0) {
            flag = true
          }
        })
        if (flag || props.firstName=== "" || props.lastName=== ""|| props.email=== "" ||props.password=== "" || props.confirmPassword==="") 
        {
          alert("Form has errors");
        }
        else{
            props.setisRegistered(true);
            alert ("User registered: " + props.firstName);
        }
    };
    return (
      <div className='register'>
        <div className='form-register'>
          <h2>Registration</h2>
          <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="firstname" placeholder="Enter Firstname" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="lastname" placeholder="Enter Lastname" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="Enter Email" type='email'/>
                </Form.Group>

                <Row className='mb-3'>
                    <Form.Group as= {Col} controlId="formGridAddress2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="Enter Password" type='password'/>
                    </Form.Group>
                    <Form.Group as= {Col} controlId="formGridAddress2">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control placeholder="Re-enter Password" type='password'/>
                    </Form.Group> 
                </Row>
               

                <Row className="mb-3">
                   
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Female</option>
                        <option>Male</option>
                        <option>Other</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Interests</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Female</option>
                        <option>Male</option>
                        <option>Other</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Age</Form.Label>
                    <Form.Control placeholder="Enter Age in Years" type='number'/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                   
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label style={{textAlign: "left"}}>Question-1</Form.Label>
                  
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Answer 1</Form.Label>
                     <Form.Control/>
                    </Form.Group>
                    
                </Row>


                <div class="col-md-12 text-center">
                    <button type="button" onClick={handleSubmit} class="btn btn-primary">Sign Up</button>
                </div>
                </Form>
        </div>
      </div>
           
   
    );
}
export default Register