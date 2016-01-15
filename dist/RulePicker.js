var React = require('react');
var DailyRulePicker = require('./DailyRulePicker.js');
var WeeklyRulePicker = require('./WeeklyRulePicker.js');
var MonthlyRulePicker = require('./MonthlyRulePicker.js');
var YearlyRulePicker = require('./YearlyRulePicker.js');

var RulePicker = React.createClass({displayName: "RulePicker",
  render: function() {
    return (
      React.createElement("div", null, 
        "Recurrence Rule:", 
        React.createElement("select", {onChange: this.props.onRuleChange}, 
          React.createElement("option", {value: "daily"}, "Daily"), 
          React.createElement("option", {value: "weekly"}, "Weekly"), 
          React.createElement("option", {value: "monthly (by day of week)"}, "Monthly (by day of week)"), 
          React.createElement("option", {value: "monthly (by day of month)"}, "Monthly (by day of month)"), 
          React.createElement("option", {value: "yearly"}, "Yearly")
        ), 
        (() => {
          switch (this.props.rule) {
            case "daily":   return React.createElement(DailyRulePicker, {interval: this.props.interval, onIntervalChange: this.props.onIntervalChange});
            case "weekly":  return React.createElement(WeeklyRulePicker, {interval: this.props.interval, validations: this.props.validations, onIntervalChange: this.props.onIntervalChange, onValidationsChange: this.props.onValidationsChange});
            case "monthly": return React.createElement(MonthlyRulePicker, {interval: this.props.interval, validations: this.props.validations, onIntervalChange: this.props.onIntervalChange, onValidationsChange: this.props.onValidationsChange});
            case "yearly":  return React.createElement(YearlyRulePicker, {interval: this.props.interval, onIntervalChange: this.props.onIntervalChange});
          }
        })()
      )
    );
  }
});

module.exports = RulePicker;
