import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    let navigate=useNavigate()
    const [credentials, setCredentials] = useState({email:"",password:""})
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const response = await fetch(`https://oyester-backend.herokuapp.com/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})
        });
        const json= await response.json();
        if(json.success){
            navigate('/tasks')
        }
    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    return (
        <div className='container my-4'>
            <h2>Login</h2>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email" name="email" value={credentials.email} onChange={onChange}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password" name="password" value={credentials.password} onChange={onChange}
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Login
