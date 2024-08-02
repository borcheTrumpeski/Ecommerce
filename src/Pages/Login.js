import React, { useState } from 'react'
import './CSS/Login.css'
import { LoginWithUsername } from '../api/ProductsApi'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }
    const onChangePassowrd = (e) => {
        setPassword(e.target.value)
    }
    const onLogin = () => {
        LoginWithUsername(username, password)
    }

    return (
        <div className='login'>
            <div className='login-container'>
                <h1>Sing Up</h1>
                <div className='login-fields'>
                    <input onChange={onChangeUsername} type='text' placeholder='username' />
                    <input onChange={onChangePassowrd} type='password' placeholder='password' />
                </div>
                <button onClick={onLogin}>Login</button>
                <p className='login-login'>
                    Allready have account? <span>Login here</span>
                </p>
                <div className='login-agree'>
                    <input type='checkbox' name='' id='' />
                    <p>I agree to terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}

export default Login