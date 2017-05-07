var React = require('react');
import { Row, Col, Button } from 'react-materialize';
var Querynew = require('Querynew');
var Querypast = require('Querypast');

var Query= React.createClass({
  getInitialState: function(){
    return {
      stage:'main'
    }
  },
  newQuery:function(){
    this.setState({
      stage:'new'
    })
  },
  pastQueries:function(){
    console.log('past');
    this.setState({
      stage:'past'
    })
  },
  changePhase:function(form){
    this.props.changePhase(form);
  },
  render: function(){
    var {stage} = this.state;
    var renderQuery = ()=>{
      if(stage==='main'){
        return (
          <Row>
            <Col s={4} offset="s2">
              <Button className="waves-effect waves-light btn" onClick={this.newQuery}>New Query</Button>

            </Col>
            <Col s={4}>
              <Button className="waves-effect waves-light btn" onClick={this.pastQueries}>Past Queries</Button>

            </Col>

          </Row>
        )
      } else if(stage==='new'){
        return (
          <Querynew changePhase={this.changePhase}/>
        )
      } else if(stage==='past'){
        return (
        <Querypast changePhase={this.changePhase}/>
        )
      }
    }
    return (
      <div className="container center-align">
        <Row>
          <Col s={12}>
            <h1>Queries</h1>
          </Col>
        </Row>
        {renderQuery()}
      </div>
    )
  }
})

module.exports = Query;
