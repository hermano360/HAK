var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function(){
    return(
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='menu-text'>In A Flash</li>
            <li>
              <IndexLink to="/" activeClassName="active-link">page1</IndexLink>
            </li>
            <li>
              <Link to="/page2" activeClassName="active-link">page2</Link>
            </li>
            <li>
              <Link to="/Candidates" activeClassName="active-link">Candidates</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="http://google.com" target="_blank">HAK</a>
            </li>
          </ul>
        </div>
      </div>

    )
  }
});

module.exports = Nav;
