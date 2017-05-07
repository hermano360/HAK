var React = require('react');
import { Row, Col, Input } from 'react-materialize';

var talentsignup= React.createClass({
  render: function(){
    return (
      <div className="container center-align">
        <Row>
          <Col s={12}>
            <br/>
            <h3 className="red-text text-darken-2"><strong>Talent Sign Up Form</strong></h3>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <div className="row valign-wrapper flow-text">
              <div className="col s4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png" className="imdb_signup_logo"/>
              </div>
              <div className="col s8 left-align">
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
            <Col className="left-align" m={6} offset="m3">
              <Input s={12} id="union" className="validate" type='checkbox' value='yes' label='Are You Union/Union Eligible?' />
              <Input s={12} id="travel" className="validate" type='checkbox' value='yes' label='Are You Willing to Travel?' />
              <Input s={12} id="passport" className="validate" type='checkbox' value='yes' label='Do You Have an Active Passport?' />
            <br/>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col s={6} m={4} offset="m2">
            <a className="waves-effect waves-light btn amber darken-2" href="#">Cancel</a>
          </Col>
          <Col s={6} m={4}>
            <a className="waves-effect waves-light btn amber darken-2" href="#/thankyou">Sign Up!</a>
          </Col>

        </Row>
      </div>
    )
  }
});

module.exports = talentsignup;
