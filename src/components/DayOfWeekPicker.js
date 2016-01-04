var React = require('react');

var DayOfWeekPicker = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.label}
        <button value="0" onClick={this.props.onDayChange}>Sun</button>
        <button value="1" onClick={this.props.onDayChange}>Mon</button>
        <button value="2" onClick={this.props.onDayChange}>Tues</button>
        <button value="3" onClick={this.props.onDayChange}>Wed</button>
        <button value="4" onClick={this.props.onDayChange}>Thurs</button>
        <button value="5" onClick={this.props.onDayChange}>Fri</button>
        <button value="6" onClick={this.props.onDayChange}>Sat</button>
      </div>
    );
  }
});

module.exports = DayOfWeekPicker;
