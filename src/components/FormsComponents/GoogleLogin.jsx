import React from 'react'
import firebase from 'firebase'
import { FcGoogle } from 'react-icons/fc';


function GoogleLogin() {

    const continueWithGoogle = (e) => {
        e.preventDefault();
        const provider =new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((authUser) => {
                console.log(authUser.user);
            })
            .catch((err) => { alert(err.message); })

    }

    return (
        <div 
            style={{cursor:'pointer',
                    backgroundColor:'white' ,
                    display:'flex', 
                    alignItems:'center', 
                    padding:"1vh",
                    marginTop:"2vh",
                    borderRadius:"3px",
                    color:"black"
                }} 
            onClick={continueWithGoogle}>
        <FcGoogle className="Google" textAnchor="Continue with Google"/> <p>Continue with Google</p>
        </div>
    )
}

export default GoogleLogin
