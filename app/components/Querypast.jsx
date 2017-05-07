var React = require('react');
import { Col, Card} from 'react-materialize';

var Querypast= React.createClass({
  onSearch1:function(){
    this.props.changePhase({
      actor:10,
      writer:6,
      union:false,
      travel:false,
      passport:false
    });
  },
  onSearch2:function(){
    this.props.changePhase({
      actor:2,
      writer:1,
      union:true,
      travel:false,
      passport:true
    });
  },
  onSearch3:function(){
    this.props.changePhase({
      actor:14,
      writer:30,
      union:true,
      travel:true,
      passport:true
    });
  },

  render: function(){
    return (
      <div>
        <Col m={6} s={12}>
          <Card className='blue-grey darken-1' textClassName='white-text' title='Remember The Titans - Lead' onClick={this.onSearch1}>
            <p>Actor Credits:10</p>
            <p> Writer Credits: 6</p>
            <p>Union: N, Travel: N, Passport: N</p>
          </Card>
        </Col>
        <Col m={6} s={12}>
          <Card className='blue-grey darken-1' textClassName='white-text' title='Sleeping Beauty - Stunt Double' onClick={this.onSearch2}>
            <p>Actor Credits:2</p>
            <p> Writer Credits: 1</p>
            <p>Union: Y, Travel: N, Passport: Y</p>
          </Card>
        </Col>
        <Col m={6} s={12}>
          <Card className='blue-grey darken-1' textClassName='white-text' title='Tarzan - Director' onClick={this.onSearch3}>
            <p>Actor Credits:14</p>
            <p> Writer Credits: 30</p>
            <p>Union: Y, Travel: Y, Passport: Y</p>
          </Card>
        </Col>
      </div>
    )
  }
})

module.exports = Querypast;
