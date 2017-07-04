import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './App.scss';
import data from './data.json';
import SubNav from './subnav';
import HeaderNav from './HeaderNav';
import Skills from './Skills';
import About from './About';
import Hobbies from './hobbies'

class App extends Component {

  render () {
    return (
      <div>
        <HeaderNav />
        <section className="container position-relative" id="portfolio">              
          <SubNav showBlocks={data}/>
        </section>
        <section className="container-fluid sdm-bg" id="skills"> 
          <Skills />
        </section>
        <section className="container" id="about"> 
          <About />
        </section>
        <section className="container-fluid sdm-bg" id="hobbies">
          <Hobbies />
        </section>
      </div>
    )
  }
}
export default App;
