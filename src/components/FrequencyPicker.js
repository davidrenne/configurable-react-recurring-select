var React = require('react');
var DailyRulePicker = require('./DailyRulePicker.js');
var WeeklyRulePicker = require('./WeeklyRulePicker.js');
var MonthlyRulePicker = require('./MonthlyRulePicker.js');
var YearlyRulePicker = require('./YearlyRulePicker.js');

var FrequencyPicker = React.createClass({
  getInitialState: function() {
    return ({frequency: 'daily'});
  },
  handleFrequencyChange: function(e) {
    var frequency = e.target.value;
    this.setState({frequency: frequency});
  },
  render: function() {
    return (
      <div className="frequency-picker" onChange={this.handleFrequencyChange} >
        Frequency:
        <select name="frequency">
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
        {(() => {
          switch (this.state.frequency) {
            case "daily":   return <DailyRulePicker />;
            case "weekly":  return (<WeeklyRulePicker />);
            case "monthly": return (<MonthlyRulePicker />);
            case "yearly":  return (<YearlyRulePicker />);
          }
        })()}
      </div>
    );
  }
});

module.exports = FrequencyPicker;
