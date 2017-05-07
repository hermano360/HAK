var React = require('react');
import { Row, Col } from 'react-materialize';

var signup= React.createClass({
  render: function(){
    return (
      <div className="container center-align">
        <Row>
          <Col s={6}>
            <h2>Looking for Work?</h2>
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
          </Col>
          <Col s={6}>
            <h2>Trying to Build the Right Team?</h2>
            <p>
              Get access to our database of available contract workers. Narrow
              down your search by selecting appropriate minimum qualifications.
              Contact potential hires TODAY!
            </p>
            <a href="#/employer" className="waves-effect waves-light btn amber darken-1 white-text">Start Searching</a>
          </Col>
        </Row>
      </div>
    )
  }
})

module.exports = signup;
