import NavBar from './Navbar';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/signin">
          <LoginPage/>
        </Route>
        <Route exact path="/signup">
          <SignUpPage/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
