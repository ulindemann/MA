//=============================================================================
//
//import React from 'react';
import React, { useState }  from 'react';
import { Route, Switch} from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";

//import logo from './logo.svg';
import Home from './main/home.js';
import Admin from "./admin/admin.js";
import Testi  from './test/test.js';
import Suchen from './test/suchen.js';
//import LoginDialog from './login.js';
import TestVerzeichnis from './test/verzeichnis';
import {Navi, Footi} from "./nav"; 
import LoginDialog from './logindialog';

export const UserContext = React.createContext({name: 'lindemann', passwort: ''});

//===========================================================================
// the One and Only App
//
const App = () => {

  
  const [login, setLogin] = useState (false);

  if ( login === true ){
  return (
    <div className="app-total">
      
      <Router>
      <UserContext.Provider value={{name: 'lindemann', passwort: ''}}>
      <Navi /> 
      </UserContext.Provider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} />
        <Route path="/admin" component={Admin} />
        <Route path="/test" component={Testi} />
        <Route path="/dir" component={TestVerzeichnis} />
        <Route path="/search" component={Suchen} />
      </Switch>
      </Router>
      <Footi />
    </div>
  );
  }else{
    return (
      <UserContext.Provider>
      <LoginDialog />
      {setLogin (true)}
      </UserContext.Provider>
    );
  }
}

//<Route path="/" component={Home} exact />
//<Route path="/home" component={Home} />
//<Navbar fixed="bottom">
//      Hallo
//</Navbar>

//===== Original  =============================================================

export { App };
