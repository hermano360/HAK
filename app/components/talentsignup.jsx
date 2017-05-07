var React = require('react');
import { Row, Col, Input } from 'react-materialize';

var talentSignup= React.createClass({
  render: function(){
    return (
      <div class="container center-align">
        <Row>
          <Col s={12}>
            <h2>Talent Sign Up Form</h2>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <div class="row valign-wrapper flow-text">
              <div class="col s4">
                <img src="../img/IMDb-logo.png" class="imdb_signup_logo"/>
              </div>
              <div class="col s8">
                <p>
                  Enter a link to your IMDb Page and we'll make sure that all of your credits are up to date
                </p>
              </div>
            </div>
            <Input s={12} id="imdb_url" class="validate" type="text" label="IMDb URL" />
            <Input s={12} id="email" class="validate" type="email" label="Email" />
            <Input s={12} id="phone" class="validate" type="tel" label="Primary Phone Number" />
            <Input s={12} id="password" class="validate" type="password" label="password" />
            <Input s={12} id="confirm-password" class="validate" type="password" label="password" />
            <Input s={12} id="union" class="validate" type='checkbox' value='yes' label='Are You Union/Union Eligible?' />
            <Input s={12} id="travel" class="validate" type='checkbox' value='yes' label='Are You Willing to Travel?' />
            <Input s={12} id="passport" class="validate" type='checkbox' value='yes' label='Do You Have an Active Passport?' />
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

module.exports = talentSignup;
