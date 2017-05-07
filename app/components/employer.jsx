var React = require('react');
var Employersignup = require('employersignup');
var Query = require('Query');
var Candidates = require('Candidates');

var employer= React.createClass({
  getInitialState: function(){
    return {
      phase:'signup',
      actor:0,
      writer:0,
      union:true,
      travel:true,
      passport:true
    };
  },
  signupSubmission: function(){
    this.setState({phase:'query'})
  },
  querySubmission: function(form){
    this.setState({
      phase:'display',
      actor:form.actor,
      writer:form.writer,
      union:form.union,
      travel:form.travel,
      passport:form.passport
    });
  },
  newQuery: function(){
    this.setState({phase:'query'});
  },
  render: function(){
    var {phase,actor,writer,union,travel,passport} = this.state;
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
        <Candidates actor={actor} writer={writer} union={union} travel={travel} passport={passport} changePhase={this.newQuery}/>
      )
    }
  }
});

module.exports = employer;
