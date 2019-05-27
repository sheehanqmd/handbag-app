import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Hbs from "./components/Hbs";
import Header from './components/Header';
// import Edit from "./components/Edit";




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hb: []
      };

      this.passNewHb = this.passNewHb.bind(this);

  }
  passNewHb(e) {
    this.setState({hb: e})
    console.log(e);
  }
  
render() {
  console.log(this.state.hb)
  return (
    <div>
      <Header/>
      <Hbs hb={this.state.hb}/>
      {/* <Edit hb={this.state.hb}/> */}
    </div>
  );
 };
}

export default App;
