var React = require('react');
import { Row, Col, Input } from 'react-materialize';

var signin= React.createClass({
  render: function(){
    return (
      <div className="container center-align">
        <Row>
          <Col s={12}>
            <h2>Sign In</h2>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Input s={12} id="email" className="validate" type="email" label="Email" />
            <Input s={12} id="password" className="validate" type="password" label="password" />
          </Col>
          <Col s={6}>
            <a className="waves-effect waves-light btn amber darken-2 white-text" href="#/talentsignup">Talent</a>
          </Col>
          <Col s={6}>
            <a className="waves-effect waves-light btn amber darken-2 white-text" href="#/employer">Recruiter</a>
          </Col>
        </Row>
      </div>
    )
  }
});

module.exports = signin;
