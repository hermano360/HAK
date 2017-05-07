var React = require('react');

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
      <div>
        <a href={url}>
          <img src={photo}></img>
        <p>Name: {name}</p>
        {actingCredits(actor)}
        {writingCredits(writer)}
        Union: {convertingBooleans(union,travel,passport).union},
        Travel : {convertingBooleans(union,travel,passport).travel},
        Passport: {convertingBooleans(union,travel,passport).passport}
        </a>
      </div>
    )
  }
})

module.exports = Candidate;
