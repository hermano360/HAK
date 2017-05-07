var React = require('react');
var Candidate = require('Candidate');
var CandidatesAPI = require('CandidatesAPI');
import {Button} from 'react-materialize';


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
      <div>
        <h1>Candidates Available</h1>
        {renderCandidates()}
          <Button className="waves-effect waves-light btn" onClick={this.handleClick}>Another Query?</Button>
          <a className="waves-effect waves-light btn amber darken-1 white-text" href="#">Start Over</a>
      </div>
    )
  }
});

module.exports = Candidates;
