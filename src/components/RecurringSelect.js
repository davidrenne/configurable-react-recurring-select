var React = require('react');
var FrequencyPicker = require('./FrequencyPicker.js');

var RecurringSelect = React.createClass({
  getInitialState: function() {
    return ({
      rule_type: "IceCube::DailyRule",
      interval: 1
    });
  },
  handleRuleChange: function(e) {
    var rule = e.target.value;
    this.setState({
      rule_type: rule
    });
  },
  handleIntervalChange: function(e) {
    var interval = e.target.value;
    this.setState({
      interval: interval
    });
  },
  render: function() {
    return (
      <div>
        <FrequencyPicker rule={this.state.rule_type} interval={this.state.interval} onRuleChange={this.handleRuleChange} onIntervalChange={this.handleIntervalChange} />
      </div>
    );
  }
});

module.exports = RecurringSelect;
