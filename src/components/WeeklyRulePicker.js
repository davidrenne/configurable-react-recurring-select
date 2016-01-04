var React = require('react');
var DayOfWeekPicker = require('./DayOfWeekPicker.js');

var WeeklyRulePicker = React.createClass({
  handleDayChange: function(e) {
    var days = this.props.validations.day;
    var day = parseInt(e.target.value);
    var index = days.indexOf(day);
    if (index > -1) {
      days.splice(index, 1);
    } else {
      days.push(day);
    }
    this.props.onValidationsChange({
      day: days
    });
  },
  render: function() {
    return (
      <div>
        Every <input value={this.props.interval} onChange={this.props.onIntervalChange}></input> week(s) on:
        <DayOfWeekPicker onDayChange={this.handleDayChange} />
      </div>
    );
  }
});

module.exports = WeeklyRulePicker;
