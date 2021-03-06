var React = require('react');
var Link = require('react-router').Link

var Main = React.createClass({
  render: function() {
    return(
      <div className='main-container'>
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
              </button>
              <Link className='navbar-brand' to="/">React Fundamentals</Link>
            </div>
            <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
              <ul className='nav navbar-nav'>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;