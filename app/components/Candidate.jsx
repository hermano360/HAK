var React = require('react');
import {Button, Row, Col} from 'react-materialize';

var Candidate= React.createClass({

  render: function(){
    var writingCredits= function(writer){
      if(writer !== ''){
        return (
          <p>Writing Credits: {writer}</p>
        )
      }
    };
    var actingCredits= function(actor){
      if(actor !== ''){
        return (
          <p>Acting Credits: {actor}</p>
        )
      }
    };
    var convertingBooleans = function(union,travel,passport){
      var properties = {};
      if(union){
        properties.union = "Yes"
      } else {
        properties.union = "No"
      }
      if(travel){
        properties.travel = "Yes"
      } else {
        properties.travel = "No"
      }
      if(passport){
        properties.passport = "Yes"
      } else {
        properties.passport = "No"
      }
      return properties
    }

    var {name,writer,actor,url,photo,union,travel,passport}=this.props;
    return (
      <div className="container">
        <Row>
          <a href={url}>
            <Col s={8} m={4} offset="s2">
              <img src={photo}></img>
            </Col>
            <Col s={12} m={4} className="black-text">
              <h3>{name}</h3>
              <p>
                {actingCredits(actor)}
                {writingCredits(writer)}
              </p>
            </Col>
            <Col s={12} m={4} className="black-text">
              <p>
                Union: {convertingBooleans(union,travel,passport).union}<br/>
                Travel : {convertingBooleans(union,travel,passport).travel}<br/>
                Passport: {convertingBooleans(union,travel,passport).passport}
              </p>
            </Col>
          </a>
          <Button className="waves-effect waves-light btn amber darken-2">Email Candidate!</Button>
        </Row>
        <hr/>
      </div>
    )
  }
})

module.exports = Candidate;
