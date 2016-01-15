var React = require('react');

var YearlyRulePicker = React.createClass({displayName: "YearlyRulePicker",
  render: function() {
    return (
      React.createElement("div", {className: "rule"}, "Every ", React.createElement("input", {className: "interval", type: "text", value: this.props.interval, onChange: this.props.onIntervalChange}), " year(s)")
    );
  }
});

module.exports = YearlyRulePicker;
