var React = require('react');
import { Button,Input, Col, Row} from 'react-materialize';

var Querynew= React.createClass({
  onSearch:function(){
    this.props.changePhase({
      actor:3,
      writer:5,
      union:false,
      travel:true,
      passport:true
    });
  },
  render: function(){
    return (
      <div className="container">
        <Row>
          <Input s={12} id="title" className="validate" type="text" label="Query Title" />
          <Input s={6} id="actor" className="validate" type="text" label="Actor Credits" />
          <Input s={6} id="writer" className="validate" type="text" label="Writer Credits" />
          <Col className="left-align" m={6} offset="m3">
            <Input s={12} id="union" className="validate" type='checkbox' value='yes' label='Union/Union Eligible?' />
            <Input s={12} id="travel" className="validate" type='checkbox' value='yes' label='Travel Willingness?' />
            <Input s={12} id="passport" className="validate" type='checkbox' value='yes' label='Active Passport Required?' />
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
