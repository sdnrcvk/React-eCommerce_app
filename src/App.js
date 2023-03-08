import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';

function App() {
  return (
    <Router>
      <div>
       <Navbar/> 
        <div id='content'>
          <Switch>
              <Route path="/" exact component={Home}>
                <Home/>
              </Route>
              <Route path="/signin" component={Signin}>
                <Signin/>
              </Route>
              <Route path="/signup" component={Signup}>
                <Signup/>
              </Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;