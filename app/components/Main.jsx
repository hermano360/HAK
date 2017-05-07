var React = require('react');
var Navbar = require('Navbar');

var Main = (props) => {
  return (
    <div>
      <Navbar/>
      <div className='row'>
        <div className='column'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

module.exports = Main;
