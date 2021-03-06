var React = require('react');
var {Link,IndexLink} = require('react-router');
import {Dropdown, Button, Nav, Row, Col } from 'react-materialize';

var Navbar = React.createClass({
  render: function(){
    return(
      <header>
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <IndexLink href="/" className="brand-logo">EFlash</IndexLink>
            <ul className="right hide-on-med-and-down">
              <li><IndexLink href="/">Home</IndexLink></li>
              <li><Link href="#/signin">Sign In</Link></li>
              <li><Link href="#/signup">Sign Up</Link></li>
              <li><Link href="#/aboutus">About Us</Link></li>
            </ul>
          </div>
          <div className="nav-content">
            <Row className="center-align hide-on-large-only">
              <Col s={4} className="right-align">
                <Link href="#/signin">Sign In</Link>
              </Col>
              <Col s={4} className="center-align">
                <Link href="#/signup">Sign Up</Link>
              </Col>
              <Col s={4} className="left-align">
                <Link href="#/aboutus">About Us</Link>
              </Col>
            </Row>
            <br/>
          </div>
        </nav>
      </header>
    )
  }
});

module.exports = Navbar;
