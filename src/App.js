import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Notfound from './Components/NotFound/Notfound';
import Contact from './Components/SinglePages/Contact';
import Footer from './Components/SinglePages/Footer';
import Healthtips from './Components/SinglePages/Healthtips';
import PrivateRoute from './Components/SinglePages/PrivateRoute';
import Register from './Components/SinglePages/Register';
import ServiceDetails from './Components/SinglePages/ServiceDetails';
import initAuth from './Firebase/firebaseInit';

initAuth();

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/register'>
              <Register></Register>
            </Route>


            <PrivateRoute path='/servicedetails/:id'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <PrivateRoute path='/servicedetails'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <Route path='/contact'>
              <Contact></Contact>
            </Route>

            <Route path='/health'>
              <Healthtips></Healthtips>
            </Route>

            <Route path='*'>
              <Notfound></Notfound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
