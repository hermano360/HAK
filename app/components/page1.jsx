var React = require('react');
import { Row, Col } from 'react-materialize';

var page1= React.createClass({
  render: function(){
    return (
      <div className="container center-align small-centered medium-6 large-4">
        <Row>
          <Col s={12}>
            <h1 className="red-text text-darken-2">Welcome to EFlash!</h1>
            <h3>Find your next job in ... EFlash</h3>
          </Col>
          <Row>
            <Col s={12}>
              <a className="waves-effect waves-light btn amber darken-1 white-text" href="#/talentsignup">Sign Up to Get Hired</a>
            </Col>
          </Row>
          <Row>
            <Col s={12}>
              <a className="waves-effect waves-light btn amber darken-1 white-text" href="#/employer">Sign Up to Find the Best Talent</a>
            </Col>
          </Row>
        </Row>
      </div>
    )
  }
});

module.exports = page1;
