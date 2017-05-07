var React = require('react');
import { Button, Icon, Card, Row, Col, Footer} from 'react-materialize';

var page1= React.createClass({
  render: function(){
    return (
      <div className="center-align">
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
})

module.exports = page1;
