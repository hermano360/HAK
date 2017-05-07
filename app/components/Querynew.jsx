var React = require('react');
import { Button,Input} from 'react-materialize';

var Querynew= React.createClass({
  onSearch:function(){
    this.props.changePhase({
      actor:this.refs.actor.state.value,
      writer:this.refs.writer.state.value,
      union:this.refs.union.state.checked,
      travel:this.refs.travel.state.checked,
      passport:this.refs.passport.state.checked
    });
  },
  render: function(){
    return (
      <div>
        <Input s={12} ref="title" className="validate" type="text" label="Query Title" />
        <Input s={6} ref="actor" className="validate" type="text" label="Actor Credits" />
        <Input s={6} ref="writer" className="validate" type="text" label="Writer Credits" />
        <Input s={12} ref="union" className="validate" type='checkbox' value='yes' label='Union/Union Eligible?' />
        <Input s={12} ref="travel" className="validate" type='checkbox' value='yes' label='Travel Willingness?' />
        <Input s={12} ref="passport" className="validate" type='checkbox' value='yes' label='Active Passport Required?' />
        <Button className="waves-effect waves-light btn" onClick={this.onSearch}>Search</Button>
      </div>
    )
  }
})

module.exports = Querynew;
