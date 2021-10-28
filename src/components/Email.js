import React, {useState} from 'react'
import axios from 'axios'
import validator from 'validator'



function Email() {
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const [emailError, setEmailError] = useState("")

    const inputHandler = (e) => {
        setEmail(e.target.value);

    }
    const inputPasswdhandler = (e) => {
        setPasswd(e.target.value)
    }
    const clickHandler = (e) => {
        if (validator.isEmail(email)) {
            setEmailError('');
         }else {
             setEmailError('enter a valid email !');
         }
        const value = e.target.value
        console.log({value});
        e.preventDefault();
        if (email === '' && passwd === '') return
        const config = {
            headers: {
            'Accept': 'application/json',
             'X-App-Type': 'super_admin'
          }
        };
       
        axios
             .post('http://api.amai.alpha.logidots.com/api/auth/login',{
                 email: email,
                 password: passwd
                },
                config
                )
            .then(res => {
                 const data = res.data;
                 console.log(data, 'wallboyz')
               }) 
            .catch(error => console.log(error))  
             setEmail("");
             setPasswd("");    
    }

    return (
        <form className="email">
                <label className="email__text">Email</label>
                <input type="email"
                    name="email"
                    value={email}
                    onChange={inputHandler}
                    className="email__container" 
                    placeholder="mail@abc.com"  
                   
                    /> <p className="email__indicator">{emailError}</p>
                <label className="email__text">Password</label>
                <input type="password" className="email__container" 
                       value={passwd}
                        onChange={inputPasswdhandler}
                        placeholder="*********" />
                <div className="email__tick">
                    <div>
                    <input type="checkbox" id="check" className="email__tick--check" />
                    <label htmlFor="check" className="email__tick--text">Remember Me</label>
                    </div>
                    <p className="email__forgot">Forgot Password?</p>
                </div>
                <button className="email__login" onClick={clickHandler}>Login</button>
       </form>
    )
}

export default Email
