var React = require('react');
import { Row, Col } from 'react-materialize';

var talentSignup= React.createClass({
  render: function(){
    return (
      <div className="container center-align">
        <Row>
          <Col s={12}>
            <h1>Welcome to EFlash!</h1>
            <h3>Tagline goes here</h3>
          </Col>
          <Row>
            <Col s={12}>
              <a className="waves-effect waves-light btn amber darken-1 white-text" href="talent/signup.html">Sign Up to Get Hired</a>
            </Col>
          </Row>
          <Row>
            <Col s={12}>
              <a className="waves-effect waves-light btn amber darken-1 white-text" href="recruiter/signup.html">Sign Up to Find the Best Talent</a>
            </Col>
          </Row>
        </Row>
      </div>
    )
  }
});

module.exports = talentSignup;
