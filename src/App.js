import React, { Component, createRef } from 'react';
import './App.css';
import './css/style.css';
import './../node_modules/materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import e from './img/e.png';

import Home from './components/Home';
import Notes from './components/Notes';
import Note from './components/Note';
import Bycategory from './components/Bycategory';

import { BrowserRouter, NavLink, Route, Switch, Link } from 'react-router-dom'

class App extends Component {

  componentDidMount() {

    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems);
      var el = document.querySelectorAll('.modal');
      M.Modal.init(el);
    });

    window.onscroll = function () { myFunction() };

    var navbar = document.getElementById("topnav");


    function myFunction() {
      if (window.pageYOffset >= 10) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }


  }

  render() {

    const checkActive = (match, location) => {
      if (!location) return false;
      const { pathname } = location;
      console.log(pathname);
      return pathname === "/blog";
    }
    const getHome = function () {
      console.log('tohome')
      window.scrollTo(10, 0);
    }


    return (
      <BrowserRouter>
        <React.Fragment>
          {/* <div className="parallax-container"> */}
          < div id="home" className="jumbotron" >

            {/* navbar */}

            <div id="topnav">
              <nav className="transparent">
                <div className="container">
                  <div className="nav-wrapper">
                    <div className="brand-logo">
                      <div className="logo">
                        <img src={e} alt="" /><div id="spin"></div>
                      </div>

                    </div>
                    <a href="#" data-target="mobile-nav" className="sidenav-trigger">☰</a>
                    <ul className="right hide-on-med-and-down">
                      <li><NavLink exact className="wrapper" to='/blog' activeClassName="active" onClick={getHome} isActive={checkActive}>HOME</NavLink></li>
                      {/* <li><NavLink className="wrapper" to='/' activeClassName="active" onClick={getAbout} isActive={checkActive} >ABOUT</NavLink></li> */}
                      <li><NavLink className="wrapper" to='/notes' activeClassName="active" >NOTES</NavLink></li>
                      <li><a className="wrapper modal-trigger" href="#contact" >CONTACT</a></li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>



            <ul id="mobile-nav" className="sidenav">
              <li><Link to='/'>HOME</Link></li>
              <li><Link to='/notes'>NOTES</Link></li>
              <li><a className="wrapper modal-trigger" href="#contact" >CONTACT</a></li>
            </ul>

            {/* end of navbar */}

            < div className="title" id="home" >
              <div className="wrapper">
                <a href="#about"><img src={e} alt="" /></a>
              </div>
              <h4>blog by Ilma Fauziyah </h4>
            </div >
          </div >
          {/* </div> */}


          <div id="body-content" className="body-content">
            <main>
              <Switch>
                <Route path="/blog" exact component={Home} />
                <Route path="/notes" exact component={Notes} />
                <Route path="/note/:title" exact component={Note} />
                <Route path="/bycategory/:category" exact component={Bycategory} />
                {/* <Route path="/contact" exact component={Contact} /> */}
              </Switch>
            </main>


          </div>


          <footer className="page-footer">
            <div className="container">
            Copyright © 2019 Ilma Fauziyah
            {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
            </div>
          </footer>


          <div id="contact" className="modal contact">
            <div className="wrapper">
              <a className="modal-close"><span> &times; </span></a>
              <div className="modal-content">
                <div className="row">
                  <div className="col s4">
                    <h3>contact</h3>
                    <h3>me</h3>
                    <h3>by</h3>
                  </div>
                  <div className="col s8">
                    <div className="row contact-detail">
                      <div className="col s4 left">
                        <h5>mobile</h5>  
                        <h5>whatsapp</h5> 
                        <h5>email</h5> 
                      </div>
                      <div className="col s8 right">
                        <h5>+6287719931502</h5>
                        <h5>+6287719931502</h5>
                        <h5>fauziyahilma@gmail.com</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </React.Fragment>
      </BrowserRouter>

    );
  }
}

export default App;
