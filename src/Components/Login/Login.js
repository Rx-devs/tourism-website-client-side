import React from "react";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const { user, signInWithGoogle, logOut } =
        useAuth();
    return (
        <div>
            <h3>Login Now</h3>
            <form onSubmit="">
                <input type="email" placeholder="Email" name="" id="" />
                <input type="password" placeholder="Password" name="" id="" />
                <input type="submit" value="Submit" />
            </form>
            <p>New to Travel Express</p>
            <button onClick={signInWithGoogle} className="btn btn-danger">Google Sign in</button>
        </div>
    )
}

export default Login;