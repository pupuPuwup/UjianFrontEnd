import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Welcome from './components/Welcome';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      active: 0
    }
  }
  changeName = name => this.setState({name});
  changeActive = active => this.setState({active})
  render = () => 
    <div id="app">
      <ul className="nav nav-tabs nav-justified">
        <li className="nav-item">
          <Link to="/login" onClick={() => this.changeActive(0)} className={`nav-link ${this.state.active === 0 ? 'active' : ''}`}>Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/welcome" onClick={() => this.changeActive(1)} className={`nav-link ${this.state.active === 1 ? 'active' : ''}`}>Welcome</Link>
        </li>
      </ul>
      <div id="display">
        <Route path="/" render={() => <Redirect to="/login" />} />
        <Route path="/login" render={() => <Login changeActive={this.changeActive.bind(this)} changeName={this.changeName.bind(this)} />} />
        <Route path="/welcome" render={() => <Welcome name={this.state.name} />} />
      </div>
    </div>
}

export default App;