var React = require('react');

var DailyRulePicker = React.createClass({
  render: function() {
    return (
      <div>Every <input value={this.props.interval} onChange={this.props.onIntervalChange}></input> day(s)</div>
    );
  }
});

module.exports = DailyRulePicker;
