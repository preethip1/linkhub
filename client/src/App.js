import NavBar from './Navbar';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import ForgotPassword from './ForgotPassword';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <NavBar/>
    <Router>
      <Switch>
        <Route exact path="/signin">
          <LoginPage/>
        </Route>
        <Route exact path="/signup">
          <SignUpPage/>
        </Route>
        <Route exact path="/forgotpassword">
          <ForgotPassword/>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
