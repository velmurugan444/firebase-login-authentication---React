import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './pages/login';
import Registration from './pages/registration';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route exact path="/register">
            <Registration/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
