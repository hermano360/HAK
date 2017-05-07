var React = require('react');
import { Row, Col } from 'react-materialize';

var employerSignup= React.createClass({
  render: function(){
    return (
      <div class="container center-align">
        <Row>
          <Col s={4}>
            <h2>Optional Profile Photo</h2>
          </Col>
          <Col s={8}>
            <h2>Name Goes Here</h2>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <h4>PersonalTagline goes here(optional)</h4>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <ul>
              IMDb Credits
              {/*  For each IMDb Credit category */}
              <li>Category1: 7</li>
              <li>Category2: 1</li>
              <li>Category3: 2</li>
              <li>Category4: 1</li>
            </ul>
          </Col>
        <Row>
          <Col s={12}>
            <p>Union/Union Eligible?: yes/no</p>
            <p>Willing to Travel?: yes/no</p>
            <p>Active Passport?: yes/no</p>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <p>This is where other relavent attributes of skills will go(optional)</p>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <h5>My 30 Second Pitch(optional):</h5>
            <p> Embed Video here</p>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <h5>Conect with Me on Social Media (each optional individually)</h5>
            <ul>
              <li>Twitter: </li>
              <li>Instagram: </li>
              <li>Facebook: </li>
              <li>LinkedIn: </li>
            </ul>
          </Col>
        </Row>
          <Col s={12}>
            <a class="waves-effect waves-light btn" href="#">Edit Page</a>
            <a class="waves-effect waves-light btn" href="profile.html">Account Settings</a>
          </Col>
        </Row>
      </div>
    )
  }
});

module.exports = employerSignup;
