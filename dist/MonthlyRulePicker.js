var React = require('react');
var DayOfWeekOfMonthPicker = require('./DayOfWeekOfMonthPicker.js');
var DayOfMonthPicker = require('./DayOfMonthPicker.js');

var MonthlyRulePicker = React.createClass({displayName: "MonthlyRulePicker",
  render: function() {
    var pickerComponent;
    if (this.props.validations.constructor == Array) {
      pickerComponent = React.createElement(DayOfMonthPicker, {validations: this.props.validations, onValidationsChange: this.props.onValidationsChange});
    } else if (this.props.validations.constructor == Object) {
      pickerComponent = React.createElement(DayOfWeekOfMonthPicker, {validations: this.props.validations, onValidationsChange: this.props.onValidationsChange});
    }
    return (
      React.createElement("div", {className: "rule"}, 
        "Every ", React.createElement("input", {className: "interval", type: "text", value: this.props.interval, onChange: this.props.onIntervalChange}), " month(s) on:", 
        pickerComponent
      )
    );
  }
});

module.exports = MonthlyRulePicker;
