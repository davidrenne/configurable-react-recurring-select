var React = require('react');

var YearlyRulePicker = React.createClass({
  render: function() {
    if (this.props.showInterval) {
      return (
        <div className="rule">{this.props.translations.Every} <input className="interval" type="text" value={this.props.interval} onChange={this.props.onIntervalChange}></input> {this.props.translations.Years}</div>
      );
    } else {
      return null;
    }
  }
});

module.exports = YearlyRulePicker;
