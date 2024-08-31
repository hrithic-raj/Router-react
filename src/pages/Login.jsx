import React,{useState,useEffect} from 'react';
import { Button, Form, Navbar } from 'react-bootstrap';
import '../css/App.css'
import { useNavigate ,Link} from 'react-router-dom';

function Login() {
  const initialValues={email:'',password:''}
  const [formValues,setFormValues]=useState(initialValues);
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);
  const navigate = useNavigate();
  //onchange
  const handlechange=(event)=>{
      const {name,value}=event.target;
      setFormValues({...formValues, [name]:value});
  }

  //onSubmit
  const handlesubmit=(event)=>{
      event.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
      
  }

  //validate
  useEffect(()=>{
      console.log(formErrors);
      if(Object.keys(formErrors).length===0 && isSubmit===true){
          console.log(formValues);
          alert("Login Successfully" )
          navigate('/home');
          // <Signin/>
      }
  })

  const validate=(values)=>{
      let errors={};
      const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!values.email){
          errors.email="Email required!";
      }
      else if(!regex.test(values.email)){
          errors.email="Enter a valid email";
      }
      if(!values.password){
          errors.password="Password required!";
      }else if(values.password.length < 4){
          errors.password="Password must be < 4 ";
      }else if(values.password.length > 10){
          errors.password="Password must be > 10 ";
      }
      return errors;
  }
  return (
    <div className='formval'>
        <div className='formbox1'>
            <div className='formbox2'>
            <h1>Sign In</h1>
            <Form onSubmit={handlesubmit}>
              <Form.Group>
                <Form.Control type='text' name='email' value={formValues.email} onChange={handlechange} placeholder='Email or mobile number'/>
                <span className='errorspan'>{formErrors.email}</span>
              </Form.Group>
              <Form.Group>
                <Form.Control type='password' name='password' value={formValues.password} onChange={handlechange} placeholder='Password'/>
                <span className='errorspan'>{formErrors.password}</span>
              </Form.Group>
              <Button type='submit'>Sign In</Button>
            </Form>
            </div>
            <div className='formbox3'>
              <h6>OR</h6>
              <Button>Use a Sign-In Code</Button>
              <span><a href={<Navbar/>}>Forgot password?</a></span>
              <div className='formlast'>
                <br />
              <h6>New to Netflix?<Link to='/signup'>Sign up now</Link></h6>
                <span>This page is protected by Google reCAPTCHA to </span><br />
              <span>ensure you're not a bot. <a href="" className='linkblue'> Learn more.</a></span></div>
            </div>
        </div>
    </div>
  )
}

export default Login