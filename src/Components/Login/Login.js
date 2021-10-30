import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const { user, signInWithGoogle, logOut } =
        useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';

    // google sign in handler
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
        })
    }
    return (
        <div>
            <h3>Login Now</h3>
            <form>
                <input type="email" placeholder="Email" name="" id="" />
                <input type="password" placeholder="Password" name="" id="" />
                <input type="submit" value="Submit" />
            </form>
            <p>New to Travel Express</p>
            <button onClick={handleGoogleSignIn} className="btn btn-danger">Google Sign in</button>
        </div>
    )
}

export default Login;