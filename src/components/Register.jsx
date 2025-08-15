import React , {useState} from "react";
import {getAuth , createUserWithEmailAndPassword } from "firebase/auth";
import {app} from "../components/firebase/firebase";

const auth = getAuth(app);

const SignUpPage = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const createUser = ()=>{
        createUserWithEmailAndPassword(auth , email , password).then((value.alert("Success")))
    }

    return(
        <div>
            <label>Email</label>
            <input onChange={(e => setEmail(e.target.value))} value={email} type="email" required placeholder="Enter Your Email here"></input>
            <label>Password</label>
            <input onChange={(e => setPassword(e.target.value))} value={password} type="password" required placeholder="Enter Your Password here"></input>
            <button onClick={createUser}>Signup</button>
        </div>
    )
}

export default SignUpPage;