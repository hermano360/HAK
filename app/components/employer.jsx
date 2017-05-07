var React = require('react');
var Employersignup = require('employersignup');
var Query = require('Query');
var Candidates = require('Candidates');

var employer= React.createClass({
  getInitialState: function(){
    return {
      phase:'signup',
      actor: 0,
      writer:0
    };
  },
  signupSubmission: function(){
    this.setState({phase:'query'})
  },
  querySubmission: function(){
    this.setState({phase:'display'})
  },
  render: function(){
    var {phase} = this.state;
    if(phase==='signup'){
      return (
        <Employersignup changePhase={this.signupSubmission}/>
      )
    } else if (phase ==='query'){
        return (
          <Query changePhase={this.querySubmission}/>
        )
    } else if( phase ==='display') {
      return (
        <Candidates/>
      )
    }
  }
});

module.exports = employer;
