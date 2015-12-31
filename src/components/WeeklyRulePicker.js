var React = require('react');
var DayOfWeekPicker = require('./DayOfWeekPicker.js');

var WeeklyRulePicker = React.createClass({
  render: function() {
    return (
      <div>
        Every <input value={this.props.interval} onChange={this.props.onIntervalChange}></input> week(s) on:
        <DayOfWeekPicker />
      </div>
    );
  }
});

module.exports = WeeklyRulePicker;
