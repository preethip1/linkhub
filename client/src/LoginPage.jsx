import React from 'react';
import { Link } from 'react-router-dom';


class LoginPage extends React.Component {
    state = {
        email : '',
        password : ''
    }

    async signIn(event) {
        let data = { 
            email: this.state.email ,
            password: this.state.password
         };
        let options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
                },
            body : JSON.stringify(data)
            };
            try {
                let resp =  await fetch('http://localhost:8080/login' , options);
                let json = await  resp.json();
                console.log(json);
                // Login                        
            } catch(e) {
                console.log(e);
                // Show err
            }
    }

    handleEmailChange(e) {
        let newEmail =  e.target.value
        this.setState({email : newEmail });
    }
    handlePasswordChange(e) {
        let newPass =  e.target.value
        this.setState({password : newPass});
    }
    render() { 
        return <div className="d-flex justify-content-center mt-5">
            <div className="w-25 h-75 border rounded d-flex flex-column m-2">
                <h4 className="p-2 m-1 d-flex justify-content-center font-weight-bold text-secondary ">LINKTREE SIGN IN</h4>
                <input placeholder="Username" onChange={this.handleEmailChange.bind(this)} value={this.state.email} className="p-1 m-3 rounded bg-light border border-light"/>
                <input type="password" onChange={this.handlePasswordChange.bind(this)} value={this.state.password} placeholder="Password" className="p-1 m-3 rounded bg-light border border-light"/>
                <div className="d-flex justify-content-center align-center">
                <button onClick={async ()=> await this.signIn()} type="button" className="btn btn-primary p-1 m-3 w-25 rounded">Sign In</button>
                </div>
                <div className="d-flex justify-content-center text-secondary p-1 m-1 "><Link to="/forgotpassword">Forgot password?</Link></div>
                <div className="d-flex justify-content-center text-secondary p-1 m-1 ">Don't have an account?<Link to="/signup">Create one</Link> </div>
            </div>
             </div>;
    }
}
 
export default LoginPage;