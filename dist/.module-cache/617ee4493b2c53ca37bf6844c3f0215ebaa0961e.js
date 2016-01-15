var React = require('react');
var DayOfWeekPicker = require('./DayOfWeekPicker.js');

var WeeklyRulePicker = React.createClass({displayName: "WeeklyRulePicker",
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
      React.createElement("div", {className: "rule"}, 
        "Every ", React.createElement("input", {className: "interval", type: "text", value: this.props.interval, onChange: this.props.onIntervalChange}), " week(s) on:", 
        React.createElement(DayOfWeekPicker, {onDayChange: this.handleDayChange, active: days})
      )
    );
  }
});

module.exports = WeeklyRulePicker;
