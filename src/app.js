
import React from 'react';
import {Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './components/Home';



const history = createBrowserHistory();
const App = () =>
<Router history={history}>
    <div>
<Route exact path="/" component={Home}/>
<Route exact path="/Home" component={Home}/>
</div>
</Router>

export default App;
