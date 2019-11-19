import React from 'react';
import  {Route , BrowserRouter as Router} from 'react-router-dom';
import Login from  '../src/views/login';
import Admin from '../src/views/adminDashboard';
import User from '../src/views/userDashboard';
import Home from '../src/views/home';
import Event from "./views/Event";

import history from "./history";

function App() {
  return (
    <div>
      <Router history={history}>
          <Route exact path={'/'} component={Home}/>
         <Route path={'/login'} component={Login}/>
         <Route path={'/admin'} component={Admin}/>
         <Route path={'/dashboard'} component={User}/>
         <Route path={'/event/:id'} component={Event}/>
      </Router>
    </div>
  );
}

export default App;
