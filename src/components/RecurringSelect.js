var React = require('react');
var RulePicker = require('./RulePicker.js');

var RecurringSelect = React.createClass({
  getInitialState: function() {
    return ({
      rule_type: "IceCube::DailyRule",
      interval: 1,
      validations: {}
    });
  },
  handleRuleChange: function(e) {
    var rule = e.target.value;
    var validations = {};
    if (rule === "IceCube::WeeklyRule") validations = {day: []};
    if (rule === "IceCube::MonthlyRule") validations = {day_of_week: {1: [], 2: [], 3: [], 4: []}};
    this.setState({
      rule_type: rule,
      validations: validations
    });
  },
  handleIntervalChange: function(e) {
    var interval = parseInt(e.target.value);
    this.setState({
      interval: interval
    });
  },
  handleValidationsChange: function(validations) {
    this.setState({
      validations: validations
    });
  },
  handleSave: function(e) {
    console.log(JSON.stringify(this.state));
  },
  render: function() {
    return (
      <div>
        <RulePicker
          rule={this.state.rule_type}
          interval={this.state.interval}
          validations={this.state.validations}
          onRuleChange={this.handleRuleChange}
          onIntervalChange={this.handleIntervalChange}
          onValidationsChange={this.handleValidationsChange} />
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
});

module.exports = RecurringSelect;
