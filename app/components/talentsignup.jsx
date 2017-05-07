var React = require('react');
import { Row, Col, Input } from 'react-materialize';

var talentsignup= React.createClass({
  render: function(){
    return (
      <div className="container center-align">
        <Row>
          <Col s={12}>
            <h2>Talent Sign Up Form</h2>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <div className="row valign-wrapper flow-text">
              <div className="col s4">
                <img src="../img/IMDb-logo.png" className="imdb_signup_logo"/>
              </div>
              <div className="col s8">
                <p>
                  Enter a link to your IMDb Page and we'll make sure that all of your credits are up to date
                </p>
              </div>
            </div>
            <Input s={12} id="imdb_url" className="validate" type="text" label="IMDb URL" />
            <Input s={12} id="email" className="validate" type="email" label="Email" />
            <Input s={12} id="phone" className="validate" type="tel" label="Primary Phone Number" />
            <Input s={12} id="password" className="validate" type="password" label="password" />
            <Input s={12} id="confirm-password" className="validate" type="password" label="password" />
            <Input s={12} id="union" className="validate" type='checkbox' value='yes' label='Are You Union/Union Eligible?' />
            <Input s={12} id="travel" className="validate" type='checkbox' value='yes' label='Are You Willing to Travel?' />
            <Input s={12} id="passport" className="validate" type='checkbox' value='yes' label='Do You Have an Active Passport?' />
          </Col>
          <Col s={12}>
            <a class="waves-effect waves-light btn amber darken-1" href="#">Cancel</a>
            <a class="waves-effect waves-light btn amber darken-1" href="#">Sign Up!</a>
          </Col>
        </Row>
      </div>
    )
  }
});

module.exports = talentsignup;
