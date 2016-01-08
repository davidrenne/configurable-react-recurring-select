var React = require('react');
var cn = require('classnames');

var DayOfWeekPicker = React.createClass({
  render: function() {
    var activeDays = this.props.active;
    return (
      <table>
        <tbody>
          <tr>
            <td>{this.props.label}</td>
            <td id="0" className={cn("btn", {active: activeDays.indexOf(0) > -1})} onClick={this.props.onDayChange}>Sun</td>
            <td id="1" className={cn("btn", {active: activeDays.indexOf(1) > -1})} onClick={this.props.onDayChange}>Mon</td>
            <td id="2" className={cn("btn", {active: activeDays.indexOf(2) > -1})} onClick={this.props.onDayChange}>Tue</td>
            <td id="3" className={cn("btn", {active: activeDays.indexOf(3) > -1})} onClick={this.props.onDayChange}>Wed</td>
            <td id="4" className={cn("btn", {active: activeDays.indexOf(4) > -1})} onClick={this.props.onDayChange}>Thu</td>
            <td id="5" className={cn("btn", {active: activeDays.indexOf(5) > -1})} onClick={this.props.onDayChange}>Fri</td>
            <td id="6" className={cn("btn", {active: activeDays.indexOf(6) > -1})} onClick={this.props.onDayChange}>Sat</td>
          </tr>
        </tbody>
      </table>
    );
  }
});

module.exports = DayOfWeekPicker;
