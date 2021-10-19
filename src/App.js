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
import Work from './pages/Work/Work';
import PrivateRoute from './pages/Login/Login/PrivateRoute/PrivateRoute';
import Booking from './pages/Booking/Booking/Booking';
import AuthProvider from './contexts/AuthProvider';
import Reg from './pages/Reg/Reg';
function App() {
  return (
    <div className="App">
    
      <AuthProvider><Router>
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
            <Route exact  path="/work">
              <Work></Work>
            </Route>
            <Route path="/login">
             <Login></Login>
            </Route>
            <Route exact path='/reg'>
                  <Reg></Reg>
                  </Route>
            
            <PrivateRoute path='/booking/:serviceId'>
              <Booking></Booking>
            </PrivateRoute>
          
            <Route path="*">
             <Notfound></Notfound>
            </Route>
          </Switch></div>
          <Fotter></Fotter>
        </Router>
</AuthProvider>
    </div>
  );
}

export default App;
