import React from 'react';
import { Link } from 'react-router-dom';

class ForgotPassword extends React.Component {
    render() { 
        return <div className="d-flex justify-content-center mt-5">
            <div className="w-25 h-75 border rounded d-flex flex-column m-2">
            <div className="d-flex justify-content-center text-secondary p-1 m-2 mb-4">Enter your Linktree username to receive a password reset email.</div>
            <input type="email" placeholder="Enter your email" className="p-1 m-3 rounded bg-light border border-light"/>
            <button type="button" className="d-flex justify-content-center btn btn-primary p-1 m-3 w-50 rounded">Reset password</button>
            <div className="d-flex justify-content-center text-secondary p-1 m-1 "><Link to="/signin">Back to login</Link></div>
            </div>
        </div>;
    }
}
 
export default ForgotPassword;