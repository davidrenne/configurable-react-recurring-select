var React = require('react');
var DailyRulePicker = require('./DailyRulePicker.js');
var WeeklyRulePicker = require('./WeeklyRulePicker.js');
var MonthlyRulePicker = require('./MonthlyRulePicker.js');
var YearlyRulePicker = require('./YearlyRulePicker.js');

var FrequencyPicker = React.createClass({
  render: function() {
    return (
      <div>
        Recurrence Rule:
        <select onChange={this.props.onRuleChange} >
          <option value="IceCube::DailyRule">Daily</option>
          <option value="IceCube::WeeklyRule">Weekly</option>
          <option value="IceCube::MonthlyRule">Monthly</option>
          <option value="IceCube::YearlyRule">Yearly</option>
        </select>
        {(() => {
          switch (this.props.rule) {
            case "IceCube::DailyRule":   return <DailyRulePicker interval={this.props.interval} onIntervalChange={this.props.onIntervalChange} />;
            case "IceCube::WeeklyRule":  return <WeeklyRulePicker interval={this.props.interval} onIntervalChange={this.props.onIntervalChange} />;
            case "IceCube::MonthlyRule": return <MonthlyRulePicker interval={this.props.interval} onIntervalChange={this.props.onIntervalChange} />;
            case "IceCube::YearlyRule":  return <YearlyRulePicker interval={this.props.interval} onIntervalChange={this.props.onIntervalChange} />;
          }
        })()}
      </div>
    );
  }
});

module.exports = FrequencyPicker;
