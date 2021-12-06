import React from 'react';
import { Link } from 'react-router-dom';


class SignUpPage extends React.Component {
    render() { 
        return <div className="d-flex justify-content-center mt-5">
            <div className="w-25 h-75 border rounded d-flex flex-column m-2">
                <h4 className="p-2 m-1 d-flex justify-content-center font-weight-bold text-secondary ">LINKTREE SIGN UP</h4>
                <input type="email" placeholder="Enter your email" className="p-1 m-3 rounded bg-light border border-light"/>
                <input placeholder="Enter your username" className="p-1 m-3 rounded bg-light border border-light"/>
                <input type="password" placeholder="Enter your password" className="p-1 m-3 rounded bg-light border border-light"/>
                <div className="d-flex justify-content-center align-center">
                <button type="button" className="btn btn-primary p-1 m-3 w-25 rounded"><Link to="/dashboard"> Sign Up</Link></button>
                </div>
                <div className="d-flex justify-content-center text-secondary p-1 m-1 ">Already have an account?<Link to="/signin">Login</Link> </div>
            </div>
             </div>;
    }
}
 
export default SignUpPage;