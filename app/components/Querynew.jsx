var React = require('react');
import { Button, Icon, Card, Row, Col,Input} from 'react-materialize';

var Querynew= React.createClass({
  onSearch:function(){
    console.log(this.refs.title);
    this.props.changePhase();
  },
  render: function(){
    return (
      <div>
        <Input s={12} ref="title" className="validate" type="text" label="Query Title" />
        <Input s={6} id="actor" className="validate" type="text" label="Actor Credits" />
        <Input s={6} id="writer" className="validate" type="text" label="Writer Credits" />
        <Input s={12} id="union" className="validate" type='checkbox' value='yes' label='Union/Union Eligible?' />
        <Input s={12} id="travel" className="validate" type='checkbox' value='yes' label='Travel Willingness?' />
        <Input s={12} id="passport" className="validate" type='checkbox' value='yes' label='Active Passport Required?' />
        <Button className="waves-effect waves-light btn" onClick={this.onSearch}>Search</Button>
      </div>
    )
  }
})

module.exports = Querynew;
