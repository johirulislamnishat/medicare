import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Notfound from './Components/NotFound/Notfound';
import initAuth from './Firebase/firebaseInit';

initAuth();

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
