var React = require('react');
import { Row, Col } from 'react-materialize';

var signup= React.createClass({
  render: function(){
    return (
      <div className="container center-align">
        <br/>
        <Row className="grey lighten-2">
          <Col s={12}>
            <p></p>
            <Col s={12} m={6} l={6}>
              <h3><strong>Looking for Work?</strong></h3>
              <hr/>
              <p>
                We pull data from your IMDb page to keep hiring agents up to date
                as your body of work grows. You can also add any additional info
                that you think is relevant for your specific line of work.
              </p>
              <p>
                Within minutes, your profile will be visible to a wide array of
                potential employers.
              </p>
              <a href="#/talentsignup" className="waves-effect waves-light btn amber darken-1 white-text">Get Started</a>
              <p></p>
              <hr className="hide-on-med-and-up"/>
            </Col>
            <Col s={12} m={6} l={6}>
              <h3><strong>Trying to Build the Right Team?</strong></h3>
              <hr/>
              <p>
                Get access to our database of available contract workers. Narrow
                down your search by selecting appropriate minimum qualifications.
                Contact potential hires TODAY!
              </p>
              <a href="#/employer" className="waves-effect waves-light btn amber darken-1 white-text">Start Searching</a>
              <p></p>
            </Col>
          </Col>
        </Row>
      </div>
    )
  }
})

module.exports = signup;
