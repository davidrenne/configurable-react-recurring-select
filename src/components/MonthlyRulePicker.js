var React = require('react');
var DayOfWeekOfMonthPicker = require('./DayOfWeekOfMonthPicker.js');
var DayOfMonthPicker = require('./DayOfMonthPicker.js');

var MonthlyRulePicker = React.createClass({
  render: function() {
    var pickerComponent;
    if (this.props.validations.constructor == Array) {
      pickerComponent = <DayOfMonthPicker validations={this.props.validations} onValidationsChange={this.props.onValidationsChange} />;
    } else if (this.props.validations.constructor == Object) {
      pickerComponent = <DayOfWeekOfMonthPicker validations={this.props.validations} onValidationsChange={this.props.onValidationsChange} />;
    }
    return (
      <div className="rule">
        Every <input className="interval" type="text" value={this.props.interval} onChange={this.props.onIntervalChange}></input> month(s) on:
        {pickerComponent}
      </div>
    );
  }
});

module.exports = MonthlyRulePicker;
