var React = require('react');
import { Button, Icon, Card, Row, Col,Footer} from 'react-materialize';

var page2= React.createClass({
  render: function(){
    return (
      <div>
        <h1>Apply as Candidate</h1>
        <div>
          <form ref="form" onSubmit={this.onSubmit} className="apply-form">
            <Button node='a' waves='light'><Icon right>file_cloud</Icon>button</Button>
            <input type="text" ref="url" placeholder="Enter IMBd URL"/>
            <label>
              Are you eligible to work in the US?
              <input type="checkbox" ref="us_auth"/>
            </label>
            <button className="button expanded">Start</button>
          </form>
        </div>
      </div>
    )
  }
})

module.exports = page2;
