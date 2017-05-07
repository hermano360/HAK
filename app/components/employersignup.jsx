var React = require('react');
import { Row, Col, Input,Button} from 'react-materialize';

var employersignup= React.createClass({
  handleClick: function(){
    this.props.changePhase();
  },
  render: function(){
    return (
      <div >
        <Row>
          <Col s={12} className="container center-align">
            <h2>Employer Sign Up Form</h2>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Input s={12} id="email" className="validate" type="email" label="Email" />
            <Input s={12} id="password" className="validate" type="password" label="password" />
            <Input s={12} id="confirm-password" className="validate" type="password" label="password" />
          </Col>
          <Col s={4} offset='s2'>
            <a className="waves-effect waves-light btn" href="#">Cancel</a>
          </Col>
          <Col s={4}>
            <Button className="waves-effect waves-light btn" onClick={this.handleClick}>Sign Up!</Button>
          </Col>

        </Row>
      </div>
    )
  }
});

module.exports = employersignup;
