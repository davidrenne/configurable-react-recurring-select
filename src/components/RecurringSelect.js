var React = require('react');
var RuleSummary = require('./RuleSummary.js');
var FrequencyPicker = require('./FrequencyPicker.js');

var RecurringSelect = React.createClass({
  render: function() {
    return (
      <div className="recurring-select">
        <FrequencyPicker />
        <RuleSummary />
      </div>
    );
  }
});

module.exports = RecurringSelect;
