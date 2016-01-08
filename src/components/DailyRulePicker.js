var React = require('react');

var DailyRulePicker = React.createClass({
  render: function() {
    return (
      <div>Every <input className="recurring-select" type="text" value={this.props.interval} onChange={this.props.onIntervalChange}></input> day(s)</div>
    );
  }
});

module.exports = DailyRulePicker;
