var React = require('react');
import { Row, Col, Input,Button} from 'react-materialize';

var employersignup= React.createClass({
  handleClick: function(){
    this.props.changePhase();
  },
  render: function(){
    return (
      <div className="container">
        <Row>
          <br/>
          <Col s={12} className="container center-align">
            <h3 className="red-text text-darken-2"><strong>Employer Sign Up Form</strong></h3>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Input s={12} id="email" className="validate" type="email" label="Email" />
            <Input s={12} id="password" className="validate" type="password" label="password" />
            <Input s={12} id="confirm-password" className="validate" type="password" label="password" />
          </Col>
          <Col s={6} m={4} offset="m2">
            <a className="waves-effect waves-light btn amber darken-2" href="#">Cancel</a>
          </Col>
          <Col s={6} m={4}>
            <Button className="waves-effect waves-light btn amber darken-2" onClick={this.handleClick}>Sign Up!</Button>
          </Col>

        </Row>
      </div>
    )
  }
});

module.exports = employersignup;
