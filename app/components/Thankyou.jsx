var React = require('react');
import { Row,Col } from 'react-materialize';

var Thankyou= React.createClass({
  render: function(){
    return (
      <div className="container center-align">
        <Row>
          <Col s={12}>
            <h2>Thank you for Applying!</h2>
          </Col>
        </Row>
        <Row>
          <Col s={12} center-align>
            <a className="waves-effect waves-light btn amber darken-2 white-text" href="#">Return to Home Screen</a>
          </Col>
        </Row>
      </div>
    )
  }
});

module.exports = Thankyou;
