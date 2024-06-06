import React from "react";
import { Card } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const { user, signInWithGoogle, logOut,setIsLoading } =
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
            .finally(() => setIsLoading(false));
    }
    return (
        <div className="my-5 d-flex justify-content-center align-items-center flex-column">
            <Card className="p-5 text-center">
                <h3>Login Now</h3>
                
            <p className="mb-4">New to Travel Express or <br />Existing User </p>
            <button onClick={handleGoogleSignIn} className="btn btn-danger">Google Sign in</button>
            </Card>
        </div>
    )
}

export default Login;