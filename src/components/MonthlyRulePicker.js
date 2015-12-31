var React = require('react');
var DayOfWeekOfMonthPicker = require('./DayOfWeekOfMonthPicker.js');

var MonthlyRulePicker = React.createClass({
  render: function() {
    return (
      <div>
        Every <input value={this.props.interval} onChange={this.props.onIntervalChange}></input> month(s) on:
        <DayOfWeekOfMonthPicker />
      </div>
    );
  }
});

module.exports = MonthlyRulePicker;
