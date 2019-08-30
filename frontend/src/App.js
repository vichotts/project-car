import React, {Component} from 'react';

import Navbar from './component/navbar/index'
import Footer from './component/footer/index'
import Routes from './component/route/routes'

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
