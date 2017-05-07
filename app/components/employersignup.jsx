var React = require('react');
import { Row, Col, Input } from 'react-materialize';

var employerSignup= React.createClass({
  render: function(){
    return (
      <div class="container center-align">
        <Row>
          <Col s={12}>
            <h2>Employer Sign Up Form</h2>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Input s={12} id="email" class="validate" type="email" label="Email" />
            <Input s={12} id="password" class="validate" type="password" label="password" />
            <Input s={12} id="confirm-password" class="validate" type="password" label="password" />
          </Col>
          <Col s={12}>
            <a class="waves-effect waves-light btn amber darken-1" href="#">Cancel</a>
            <a class="waves-effect waves-light btn amber darken-1" href="profile.html">Sign Up!</a>
          </Col>
        </Row>
      </div>
    )
  }
});

module.exports = employerSignup;
