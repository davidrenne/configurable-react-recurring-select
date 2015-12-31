var React = require('react');

var DayOfWeekPicker = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.label}
        <button>Sun</button>
        <button>Mon</button>
        <button>Tues</button>
        <button>Wed</button>
        <button>Thurs</button>
        <button>Fri</button>
        <button>Sat</button>
      </div>
    );
  }
});

module.exports = DayOfWeekPicker;
