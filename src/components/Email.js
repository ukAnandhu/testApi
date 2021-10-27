import React, {useState} from 'react'
import axios from 'axios'


function Email() {
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const inputHandler = (e) => {
        setEmail(e.target.value);

    }
    const inputPasswdhandler = (e) => {
        setPasswd(e.target.value)
    }
    const clickHandler = (e) => {
        e.preventDefault();
        const config = {
            headers: {
            'Accept': 'application/json',
             'X-App_type': 'super_admin'
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
    }

    return (
        <form className="email">
                <label className="email__text">Email</label>
                <input type="email"
                    value={email}
                    onChange={inputHandler}
                    className="email__container" 
                    placeholder="mail@abc.com"  
                    />
                <label className="email__text">Password</label>
                <input type="password" className="email__container" 
                       value={passwd}
                        onChange={inputPasswdhandler}
                        placeholder="*********" />
                <div className="email__tick">
                    <div>
                    <input type="checkbox" id="check" className="email__tick--check" />
                    <label for="check" className="email__tick--text">Remember Me</label>
                    </div>
                    <p className="email__forgot">Forgot Password?</p>
                </div>
                <button className="email__login" onClick={clickHandler}>Login</button>
       </form>
    )
}

export default Email
