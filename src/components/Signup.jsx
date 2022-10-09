import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => { 
    const navigate=useNavigate()
    const [credentials, setCredintials] = useState({name:"",email:"",password:"",phone:""})
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const response = await fetch(`https://oyester-backend.herokuapp.com/auth/newuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,phone:credentials.phone})
        });
        const json= await response.json();
        if(json.success){
            navigate('/tasks')
        }
        console.log(json);
    }
    const onChange=(e)=>{
        setCredintials({...credentials,[e.target.name]:e.target.value})
    }   
    return (
        <div className='container'>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text" name="name" value={credentials.name} onChange={onChange} minLength={3} required
                        className="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email" name="email" value={credentials.email} onChange={onChange} required
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhone1" className="form-label">
                        Phone Number
                    </label>
                    <input
                        type="phone" name="phone" value={credentials.phone} onChange={onChange} required
                        className="form-control"
                        id="exampleInputPhone1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password" name="password" value={credentials.password} onChange={onChange} minLength={5} required
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Signup;
