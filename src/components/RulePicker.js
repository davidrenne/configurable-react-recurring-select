var React = require('react');
var DailyRulePicker = require('./DailyRulePicker.js');
var WeeklyRulePicker = require('./WeeklyRulePicker.js');
var MonthlyRulePicker = require('./MonthlyRulePicker.js');
var YearlyRulePicker = require('./YearlyRulePicker.js');

var RulePicker = React.createClass({
  getRule: function() {
    switch (this.props.rule) {
      case "daily":   return <DailyRulePicker interval={this.props.interval} onIntervalChange={this.props.onIntervalChange} />;
      case "weekly":  return <WeeklyRulePicker interval={this.props.interval} validations={this.props.validations} onIntervalChange={this.props.onIntervalChange} onValidationsChange={this.props.onValidationsChange} />;
      case "monthly": return <MonthlyRulePicker interval={this.props.interval} validations={this.props.validations} onIntervalChange={this.props.onIntervalChange} onValidationsChange={this.props.onValidationsChange} />;
      case "yearly":  return <YearlyRulePicker interval={this.props.interval} onIntervalChange={this.props.onIntervalChange} />;
    }
  },
  render: function() {
    return (
      <div>
        Recurrence Rule:
        <select onChange={this.props.onRuleChange} >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly (by day of week)">Monthly (by day of week)</option>
          <option value="monthly (by day of month)">Monthly (by day of month)</option>
          <option value="yearly">Yearly</option>
        </select>
        {this.getRule()}
      </div>
    );
  }
});

module.exports = RulePicker;
