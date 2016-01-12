var React = require('react');

var DailyRulePicker = React.createClass({
  render: function() {
    return (
      <div className="rule">Every <input className="interval" type="text" value={this.props.interval} onChange={this.props.onIntervalChange}></input> day(s)</div>
    );
  }
});

module.exports = DailyRulePicker;
