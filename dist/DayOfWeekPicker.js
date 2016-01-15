var React = require('react');
var cn = require('classnames');

var DayOfWeekPicker = React.createClass({displayName: "DayOfWeekPicker",
  render: function() {
    var activeDays = this.props.active;
    return (
      React.createElement("table", null, 
        React.createElement("tbody", null, 
          React.createElement("tr", null, 
            React.createElement("td", null, this.props.label), 
            React.createElement("td", {id: "0", className: cn("btn", {active: activeDays.indexOf(0) > -1}), onClick: this.props.onDayChange}, "Sun"), 
            React.createElement("td", {id: "1", className: cn("btn", {active: activeDays.indexOf(1) > -1}), onClick: this.props.onDayChange}, "Mon"), 
            React.createElement("td", {id: "2", className: cn("btn", {active: activeDays.indexOf(2) > -1}), onClick: this.props.onDayChange}, "Tue"), 
            React.createElement("td", {id: "3", className: cn("btn", {active: activeDays.indexOf(3) > -1}), onClick: this.props.onDayChange}, "Wed"), 
            React.createElement("td", {id: "4", className: cn("btn", {active: activeDays.indexOf(4) > -1}), onClick: this.props.onDayChange}, "Thu"), 
            React.createElement("td", {id: "5", className: cn("btn", {active: activeDays.indexOf(5) > -1}), onClick: this.props.onDayChange}, "Fri"), 
            React.createElement("td", {id: "6", className: cn("btn", {active: activeDays.indexOf(6) > -1}), onClick: this.props.onDayChange}, "Sat")
          )
        )
      )
    );
  }
});

module.exports = DayOfWeekPicker;
