var React = require('react');
var DayOfWeekOfMonthPicker = require('./DayOfWeekOfMonthPicker.js');
var DayOfMonthPicker = require('./DayOfMonthPicker.js');

var MonthlyRulePicker = React.createClass({
  render: function() {
    var pickerComponent;
    if (this.props.validations.constructor == Array) {
      pickerComponent = <DayOfMonthPicker validations={this.props.validations} translations={this.props.translations} onValidationsChange={this.props.onValidationsChange} />;
    } else if (this.props.validations.constructor == Object) {
      pickerComponent = <DayOfWeekOfMonthPicker translations={this.props.translations} validations={this.props.validations} onValidationsChange={this.props.onValidationsChange} />;
    }

    var intervalInput = null;
    if (this.props.showInterval) {
      intervalInput = <input className="interval" type="text" value={this.props.interval} onChange={this.props.onIntervalChange}></input>
    } else {
      intervalInput = <span>{this.props.interval}</span>
    }
    var interval = <span>{this.props.translations.Every} {intervalInput} {this.props.translations.MonthsOn}:</span>;

    return (
      <div className="rule">
        {interval}
        {pickerComponent}
      </div>
    );
  }
});

module.exports = MonthlyRulePicker;
