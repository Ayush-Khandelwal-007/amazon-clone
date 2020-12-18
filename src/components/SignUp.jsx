import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../Firebase'
import { Input, Button } from '@material-ui/core';
import GoogleLogin from './FormsComponents/GoogleLogin';
import './FormsComponents/Forms.css'

const SignUp = () => {

    const [userinfo, setUserinfo] = useState({
        displayName: '',
        email: '',
        password: ''
    });

    const trysignUp = (e) => {
        if (userinfo.displayName !== '') {
            signUp(e);
        }
        else {
            e.preventDefault();
            alert('Please Enter a Valid DisplayName')
            e.preventDefault();
        }
    }

    const signUp = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(userinfo.email, userinfo.password)
            .then((authUser) => {
                authUser.user.updateProfile(
                    {
                        displayName: userinfo.displayName,
                    }
                )
            })
            .catch((err) => {
                e.preventDefault();
                alert(err.message);
            })
    }

    return (
        <div className="Sign_Up_Form">

            <form className="Form_M">
                <div className="Sign_Up_Input_Fields">
                    <Input
                        className='input_field'
                        type="text"
                        placeholder="Display Name"
                        value={userinfo.displayName}
                        onChange={e => setUserinfo({ ...userinfo, displayName: e.target.value })}
                    />
                    <Input
                        className='input_field'
                        type="text"
                        placeholder="Email"
                        value={userinfo.email}
                        onChange={e => setUserinfo({ ...userinfo, email: e.target.value })}
                    />
                    <Input
                        className='input_field'
                        type="password"
                        placeholder="Password"
                        value={userinfo.password}
                        onChange={e => setUserinfo({ ...userinfo, password: e.target.value })}
                    />
                    <Button className="SignButt" type="submit" onClick={(e)=>trysignUp(e)}>Sign Up</Button>
                </div>
            </form>
            <br></br>
            <p>Already have an account? <Link to='signin' className='Change_Form' >Sign In</Link></p>
            <GoogleLogin />
        </div>
    )

}

export default SignUp