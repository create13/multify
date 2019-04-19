// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory } from 'react-router'
// import {Home} from '../page1/App.js';
// const Routes=()=>(
//     <Router history={browserHistory}>
//         <Route path='/home' component={Home}/>
//     </Router>
// )
import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
 
import App from '../page1'
import Home from '../page2/page2'
// import City from '../containers/City'
// import Login from '../containers/Login'
// import User from '../containers/User'
// import Search from '../containers/Search'
// import Detail from '../containers/Detail'
// import NotFound from '../containers/404'
 
 
class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='/home' component={Home}/>
                    {/* <Route path='/Login(/:router)' component={Login}/>
                    <Route path='/User' component={User}/>
                    <Route path='/search/:category(/:keyword)' component={Search}/>
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path='*' component={NotFound}/> */}
                </Route>
            </Router>
        )
    }
}
 
export default RouterMap