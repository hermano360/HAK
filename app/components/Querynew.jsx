var React = require('react');
import { Button,Input, Col, Row} from 'react-materialize';

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
      <div className="container">
        <Row>
          <Input s={12} ref="title" id="title" className="validate" type="text" label="Query Title" />
          <Input s={6} ref="actor" id="actor" className="validate" type="text" label="Actor Credits" />
          <Input s={6} ref="writer" id="writer" className="validate" type="text" label="Writer Credits" />
          <Col className="left-align" m={6} offset="m3">
            <Input s={12} ref="union" id="union" className="validate" type='checkbox' label='Union/Union Eligible?' />
            <Input s={12} ref="travel" id="travel" className="validate" type='checkbox'  label='Travel Willingness?' />
            <Input s={12} ref="passport" id="passport" className="validate" type='checkbox'  label='Active Passport Required?' />
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Button className="waves-effect waves-light btn amber darken-2" onClick={this.onSearch}>Search</Button>
          </Col>
        </Row>
      </div>
    )
  }
})

module.exports = Querynew;
