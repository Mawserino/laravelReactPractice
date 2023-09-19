import React,{useState,useEffect} from "react"
import {useNavigate} from 'react-router-dom'
import Header from "./Header"

function Login()
{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            navigate('/add')
        }
    },[])

    const navigate=useNavigate()
    async function login()
    {
        let item={email,password}
        let result = await fetch("http://localhost:8000/api/login",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            },
            body:JSON.stringify(item)
        });
        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate('/add')
        console.warn(item)
        console.warn(email,password)
    }
    return(
        <div>
            <Header />
            <h1>Login Page</h1>
            <div className='col-sm-6 offset-sm-3'>
            <input type='text' placeholder='email' onChange={(e)=>setEmail(e.target.value)} className='form-control'></input>
            <br></br>
            <input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)} className='form-control'></input>
            <br></br>
            <button onClick={login} className='btn btn-primary'>Login</button>
            </div>
        </div>
    )
}

export default Login