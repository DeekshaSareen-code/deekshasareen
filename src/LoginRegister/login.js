
import './styles/login.css';
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import FloatingLabel from "react-bootstrap-floating-label";
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  function handleSubmit(event) {
    event.preventDefault();
  };
    return (
    <div className="wrapper">
      <img class="left-img" src="https://d540vms5r2s2d.cloudfront.net/mad/uploads/mad_blog_602a2ab3469971613376179.png" />
      <div className="form">
      <h2>LOGIN</h2>
      <Form onSubmit={handleSubmit}>
      <FloatingLabel
            controlId="email"
            label="Email address"
            className="mb-3"
        >
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@exampkkle.com"
          />
          </FloatingLabel>
      &nbsp;
        <FloatingLabel controlId="password" label="Password" className="mb-3">
       
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
         </FloatingLabel>
         &nbsp;
         &nbsp;
         <div class="col-md-12 text-center">
            <button type="button" onClick={handleSubmit} class="btn btn-primary">Login</button>
        </div>
         &nbsp;
         &nbsp;
      </Form>
        <div className='sign'>Dont have an account ?
        <Link to="/register" variant = "body">Sign up here </Link>
        </div>
      </div>
      
    </div>
    ) 
}
export default Login