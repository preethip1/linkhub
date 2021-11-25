import React from 'react';


class LoginPage extends React.Component {
    render() { 
        return <div className="d-flex justify-content-center mt-5">
            <div className="w-25 h-75 border rounded d-flex flex-column m-2">
                <h4 className="p-2 m-1 d-flex justify-content-center font-weight-bold text-secondary ">LINKTREE SIGN IN</h4>
                <input placeholder="Username" className="p-1 m-3 rounded bg-light border border-light"/>
                <input type="password" placeholder="Password" className="p-1 m-3 rounded bg-light border border-light"/>
                <div className="d-flex justify-content-center align-center">
                <button type="button" className="btn btn-primary p-1 m-3 w-25 rounded">Sign In</button>
                </div>
                <div className="d-flex justify-content-center text-secondary p-1 m-1 ">Don't have an account? Create one</div>
            </div>
             </div>;
    }
}
 
export default LoginPage;