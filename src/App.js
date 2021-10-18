import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import initAuth from './Firebase/firebaseInit';


initAuth();

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>

        </Switch>
      </Router>
    </>
  );
}

export default App;
