import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/Form';
import './styles/Style.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      search: '',
      data: []
    }
  }
  getData = team => 
    axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${team}`)
    .then(res => this.setState({data: res.data.player}))
    .catch(err => console.log(err))
  render = () => 
  <div className="app">
    <div className="panel-body">
      <div className="form-group">
        <h1 className="huruf">{`Daftar Pemain ${this.state.search}`}</h1>
        <input onChange={() => this.setState({search: this.refs.search.value})} className="col-md-6" type="text" ref="search"/>&nbsp;&nbsp;&nbsp;
        <button onClick={() => this.getData(this.refs.search.value)} className="btn btn-success">Lihat Daftar</button>
      </div>
      <div id="display">
        {this.state.data.map(x => <Form key={x.idPlayer} {...x}/>)}
      </div>
    </div>
  </div>
}

export default App;
