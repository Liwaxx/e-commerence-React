import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import Login from '../src/views/login';
import Home from '../src/views/home';
import Register from './views/register';
import Cart from './views/cart';
import Checkout from "./views/checkout";
import Catalog from './views/catalog';
import Admin from './views/admin';
import history from "./history";

function App() {
    return (
        <div>
            <Router history={history}>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/login'} component={Login}/>
                <Route path={'/register'} component={Register}/>
                <Route path={'/event/:id'} component={Event}/>
                <Route path={'/cart'} component={Cart}/>
                <Route path={'/catalog'} component={Catalog}/> 
                <Route path={'/checkout'} component={Checkout}/>
                <Route path={'/admin'} component={Admin}/>
            </Router>
        </div>
    );
}

export default App;
