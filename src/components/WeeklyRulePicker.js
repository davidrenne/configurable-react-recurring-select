var React = require('react');
var DayOfWeekPicker = require('./DayOfWeekPicker.js');

var WeeklyRulePicker = React.createClass({
  handleDayChange: function(e) {
    var days = this.props.validations;
    var day = parseInt(e.target.id);
    var index = days.indexOf(day);
    if (index > -1) {
      days.splice(index, 1);
    } else {
      days.push(day);
    }
    this.props.onValidationsChange(days);
  },
  render: function() {
    var days = this.props.validations;
    return (
      <div className="rule">
        Every <input className="interval" type="text" value={this.props.interval} onChange={this.props.onIntervalChange}></input> week(s) on:
        <DayOfWeekPicker onDayChange={this.handleDayChange} active={days} />
      </div>
    );
  }
});

module.exports = WeeklyRulePicker;
