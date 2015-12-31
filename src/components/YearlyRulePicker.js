var React = require('react');

var YearlyRulePicker = React.createClass({
  render: function() {
    return (
      <div>Every <input value={this.props.interval} onChange={this.props.onIntervalChange}></input> year(s)</div>
    );
  }
});

module.exports = YearlyRulePicker;
