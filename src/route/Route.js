import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Details from '../pages/Details/Details'
const MainRoute =()=> 
{
    return(
        <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/details/:id" component={Details}/>
        </div>
    )
}

export default MainRoute;