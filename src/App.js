import React,{Component} from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import India from './Components/India/India';
import World from './Components/World/World';

class App extends Component{
  constructor(){
    super();
  }
  render(){
    return<>
    <div className="container-fluid">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/Header"><Header /></Route>
          <Route exact path="/India"><India /></Route>
          <Route exact path="/World"><World /></Route>
        </Switch>
      </Router>
    </div>
    </>
  }
}
export default App;