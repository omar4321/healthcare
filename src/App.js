import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import Navber from './pages/Home/Navber/Navber';
import Services from './pages/Home/Services/Services';
import Notfound from './pages/Notfound/Notfound';
import Login from './pages/Login/Login/Login';
import Teams from './pages/Teams/Teams';
import Fotter from './pages/Fotter/Fotter';

function App() {
  return (
    <div className="App">
    
      <Router>
         <Navber/>
         <div > 
           <Switch>
            <Route exact path="/">
            <Home></Home>
            </Route>
            <Route path="/home">
            <Home></Home>
            </Route>
            <Route path="/services">
             <Services></Services>
            </Route>
            <Route path="/teams">
              <Teams></Teams>
            </Route>
            <Route path="/login">
             <Login></Login>
            </Route>

            
            {/* <PrivateRoute path='/booking/:serviceId'>
              <Booking></Booking>
            </PrivateRoute> */}
          
            <Route path="*">
             <Notfound></Notfound>
            </Route>
          </Switch></div>
          <Fotter></Fotter>
        </Router>

    </div>
  );
}

export default App;
