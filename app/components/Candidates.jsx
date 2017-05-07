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
      console.log(candidate);
      return (
        <Candidate key={candidate.url} {...candidate}/>
      )
    });
  } else {
    return (
      <div>No Candidates Found. Please Try Again!</div>
    )
  }
    };

    return (
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
      </div>
    )
  }
});

module.exports = Candidates;
