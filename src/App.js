import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'
import RestaurantSearch from './components/RestaurantSearch'
import Menu from './components/Menu'
import Login from './components/Login'
import Signup from './components/Signup'
import AuthAdapter from './adapters/authAdapter'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedin: false
    }
  }
  
  handleLogout = (event) => {
    event.preventDefault();
    AuthAdapter.logOut();
    this.setState({loggedin: false})
  }

  handleLoginAndSignup = () => {
    this.setState({loggedin: true})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1><Link to={`/`}>Butter Grams</Link></h1>
          <Route exact path={'/'} component={RestaurantSearch}/>
          {localStorage["token"] ? <button onClick={this.handleLogout}> Logout </button> : <div>
            <button><Link to={'/signup'}> Sign Up </Link></button>
            <button><Link to={'/login'}> Login </Link></button>
          </div>}
        
        </div>
        
        <Route path={'/menus/:id'} render={(match) => <Menu venueId={match} />}/>
        <Route exact path={'/login'} render={({history}) => <Login history={history} handleLoginAndSignup={this.handleLoginAndSignup}/>}/>
        <Route exact path={'/signup'} render={({history}) => <Signup history={history} handleLoginAndSignup={this.handleLoginAndSignup}/>}/>
      </div>
    );
  }
}

export default App;
