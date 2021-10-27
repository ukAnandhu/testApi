import React from 'react'
import Email from './Email'
import showone from '../images/showone.svg'
import google from '../images/google.svg'


function LoginPage() {
    return (
        <div className="login">
            <div className="login-container">
                <img src={showone} alt="block" className="login__block" />
                <div className="login__header-container">
                    <div>
                    <h1 className="login__header">Login to your Account</h1>
                    <p className="login__header--text">See what is going on with your business</p>
                    </div>
                    <div className="login__google">
                        <img src={google} alt="google" className="login__google--image" />
                        <span className="login__google--text">Continue with Google</span>
                    </div>
                </div>
                <p className="login__email">----------or Sign in with Email------------</p>
                  <Email />
            </div>   
            <p className="login__footer">Not Registered Yet? <span> <a href="/" className="login__footer--link">Create an account</a></span></p>
        </div>
    )
}

export default LoginPage
