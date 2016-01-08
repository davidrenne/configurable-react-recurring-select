var React = require('react');

var YearlyRulePicker = React.createClass({
  render: function() {
    return (
      <div>Every <input className="recurring-select" type="text" value={this.props.interval} onChange={this.props.onIntervalChange}></input> year(s)</div>
    );
  }
});

module.exports = YearlyRulePicker;
