import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './component/Home/Home';
import Booking from './component/Booking/Booking';
import Destination from './component/Destination/Destination';
import Login from './component/Login/Login';
import Blog from './component/Blog/Blog';
import Contact from './component/Contact/Contact';
import Notfound from './component/NotFound/Notfound';
import Privateroute from './component/PrivateRoute/Privateroute';

export const UserContext = createContext()
function App() {
  const [loggedInUser , setLoggedInUser]= useState({
        // isSignIn : false,
        name :'',
        emails:'',
        photo :'',
        password :'',
        message :'',
  }) 
  return (
  <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router> 
      <Switch>
          <Route path='/home'>
              <Home></Home>
          </Route>
          <Route path='/news'>
              <Home></Home>
          </Route>
          <Route path='/booking/:Id'>
              <Booking></Booking>
          </Route>
         <Route path='/destination'>
         <Destination></Destination>
         </Route>
          <Route path='/login'>
              <Login></Login>
          </Route>
          <Route path='/blog'>
              <Blog></Blog>
          </Route>
          <Route path='/contact'>
              <Contact></Contact>
          </Route>
          <Route exact path='/'>
              <Home></Home>
          </Route>
          <Route  path='*'>
              <Notfound></Notfound>
          </Route>
      </Switch>
    </Router>
  </UserContext.Provider>
  );
}

export default App;