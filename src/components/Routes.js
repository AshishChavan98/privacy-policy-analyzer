import React from 'react'
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import Home from './Home';
import Site from './Site';
import About from './About';


export default function Routes() {
    
    
    return (
        <div>
        <BrowserRouter >
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/site" exact component={ Site }  />
                <Route path="/about" component={ About } />
            </Switch>
        </BrowserRouter>
            
        </div>
    )
}
