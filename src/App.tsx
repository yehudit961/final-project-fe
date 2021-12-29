import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login } from './components/login';
import { Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Register from './components/register';
import { Welcome } from './components/welcome';
import Rides from './components/rides';
import Header from './components/header';

const history = createBrowserHistory({})
function App() {
  return (
    <div className="App">
     <Header/>
     <div>
       <div>fbhxv</div>
     </div>
      <Router >
        <Switch >

          <Route exact path="/" component={Welcome} />
          <Route path="/Register" component={Register} />
          <Route path="/login" component={Login}/>
          <Route path="/rides" component={Rides}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
