var React = require('react');
var RulePicker = require('./RulePicker.js');
var TimePicker = require('react-time-picker');
var DatePicker = require('react-date-picker');
var RuleSummary = require("./RuleSummary.js");
var moment = require('moment');

var RecurringSelect = React.createClass({
  getInitialState: function() {
    return ({
      rule: "daily",
      interval: 1,
      validations: null,
      until: moment(),
      startTime: "10:00 AM"
    });
  },
  handleRuleChange: function(e) {
    var rule = e.target.value;
    var validations = null;
    if (rule === "weekly") validations = [];
    if (rule === "monthly (by day of week)") {
      rule = "monthly";
      validations = {1: [], 2: [], 3: [], 4: []};
    }
    if (rule === "monthly (by day of month)") {
      rule = "monthly";
      validations = [];
    }
    this.setState({
      rule: rule,
      validations: validations
    });
  },
  handleIntervalChange: function(e) {
    var interval;
    if (e.target.value != "") {
      interval = parseInt(e.target.value);
    } else {
      interval = 0;
    }
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
  handleEndDateChange: function (date) {
    this.setState({
      until: date
    });
  },
  handleTimeChange : function(time) {
    this.setState({
      startTime: time
    });
  },
  render: function() {
    return (
      <div>
        <RulePicker
          rule={this.state.rule}
          interval={this.state.interval}
          validations={this.state.validations}
          onRuleChange={this.handleRuleChange}
          onIntervalChange={this.handleIntervalChange}
          onValidationsChange={this.handleValidationsChange} />
        <div>
          At: <TimePicker value={this.state.startTime} onChange={this.handleTimeChange} />
        </div>
        <div>
          Until: <DatePicker minDate={this.state.until} date={this.state.until} onChange={this.handleEndDateChange} />
        </div>
        <RuleSummary fields={this.state} />
        <button className="btn" onClick={this.handleSave}>Save</button>
      </div>
    );
  }
});

module.exports = RecurringSelect;
