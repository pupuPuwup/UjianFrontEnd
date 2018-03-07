import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    render = () =>
    <div className="container">
        <div className="row">
            <div className="form-group col-sm-6">
                <label htmlFor="login">Nama</label>
                <input type="text" ref="login" id="login" className="form-control" /><br></br>
                <Link to="/welcome" onClick={() => {this.props.changeActive(1); this.props.changeName(this.refs.login.value);}} className="btn btn-info">Submit</Link>
            </div>
        </div>
    </div>
}

export default Login;