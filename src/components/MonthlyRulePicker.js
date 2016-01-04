var React = require('react');
var DayOfWeekOfMonthPicker = require('./DayOfWeekOfMonthPicker.js');

var MonthlyRulePicker = React.createClass({
  render: function() {
    return (
      <div>
        Every <input value={this.props.interval} onChange={this.props.onIntervalChange}></input> month(s) on:
        <DayOfWeekOfMonthPicker validations={this.props.validations} onValidationsChange={this.props.onValidationsChange} />
      </div>
    );
  }
});

module.exports = MonthlyRulePicker;
