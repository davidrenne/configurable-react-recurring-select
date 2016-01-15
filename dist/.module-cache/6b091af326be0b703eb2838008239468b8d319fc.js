var React = require('react');

var DailyRulePicker = React.createClass({displayName: "DailyRulePicker",
  render: function() {
    return (
      React.createElement("div", {className: "rule"}, "Every ", React.createElement("input", {className: "interval", type: "text", value: this.props.interval, onChange: this.props.onIntervalChange}), " day(s)")
    );
  }
});

module.exports = DailyRulePicker;
