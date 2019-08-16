import React, {Component} from 'react';

import Navbar from './component/navbar';
import Footer from './component/footer';
import Routes from './routes';

import "./templates/css/theme.scss"

class App extends Component {
  render(){
    return (
      <div>
        <Navbar/>
        <Routes/>
        <Footer/>
      </div>
    );
  }
}

export default App;
