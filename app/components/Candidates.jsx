var React = require('react');
var Candidate = require('Candidate');
var CandidatesAPI = require('CandidatesAPI');
import {Button, Col, Row} from 'react-materialize';


var Candidates= React.createClass({
  resetSearch: function(){
    this.props.resetSearch();
  },
  onSubmit: function (e){
    e.preventDefault();
    this.props.resetSearch();

  },
  handleClick: function(){
    this.props.changePhase();
  },
  render: function() {
    var {actor,writer,union,travel,passport} = this.props;
    var renderCandidates = () => {
      var matchedCandidates = CandidatesAPI.filterActors(actor,writer,union,travel,passport);
    if(matchedCandidates.length > 0){
    return matchedCandidates.map((candidate) => {
      return (
        <Candidate key={candidate.url} {...candidate}/>
      )
    });
  } else {
    return (
      <div className="container center-align">No Candidates Found. Please Try Again!</div>
    )
  }
    };

    return (
<<<<<<< HEAD
      <div className="container">
        <Row>
          <Col s={12}>
            <h1 className="red-text text-darken-2">Candidates Available</h1>
            <hr/>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            {renderCandidates()}
          </Col>
        </Row>
        <Row>
          <Col s={6} m={4} offset="m4">
            <Button className="waves-effect waves-light btn amber darken-2" onClick={this.handleClick}>Another Query?</Button>
          </Col>
          <Col s={6} m={4}>
            <a className="waves-effect waves-light btn amber darken-2 white-text" href="#">Start Over</a>
          </Col>
        </Row>
=======
      <div>
        <h1 className="container center-align">Candidates Available</h1>
        {renderCandidates()}
        <Col s={4} offset="s2">
          <Button className="waves-effect waves-light btn" onClick={this.handleClick}>Another Query?</Button>
        </Col>
        <Col s={4}>
          <a className="waves-effect waves-light btn amber darken-1 white-text" href="#">Start Over</a>
        </Col>
>>>>>>> f7bdd8c58ac3d95199da33283a9aa4f2beb82ef4
      </div>
    )
  }
});

module.exports = Candidates;
