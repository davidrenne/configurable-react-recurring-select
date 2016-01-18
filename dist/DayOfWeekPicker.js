var React = require('react');
var cn = require('classnames');

var DayOfWeekPicker = React.createClass({displayName: "DayOfWeekPicker",
  label: function() {
    if (this.props.label) {
      return React.createElement('div', {className:"col-xs"}, React.createElement('div', {className:"label"}, this.props.label));
    }
  },
  render: function() {
    var activeDays = this.props.active;
    return (
      React.createElement("div", {className: "row"}, 
        this.label(), 
        React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "0", className: cn("btn", {active: activeDays.indexOf(0) > -1}), onClick: this.props.onDayChange}, "Sun")
        ), 
        React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "1", className: cn("btn", {active: activeDays.indexOf(1) > -1}), onClick: this.props.onDayChange}, "Mon")
        ), 
        React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "2", className: cn("btn", {active: activeDays.indexOf(2) > -1}), onClick: this.props.onDayChange}, "Tue")
        ), 
        React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "3", className: cn("btn", {active: activeDays.indexOf(3) > -1}), onClick: this.props.onDayChange}, "Wed")
        ), 
        React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "4", className: cn("btn", {active: activeDays.indexOf(4) > -1}), onClick: this.props.onDayChange}, "Thu")
        ), 
        React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "5", className: cn("btn", {active: activeDays.indexOf(5) > -1}), onClick: this.props.onDayChange}, "Fri")
        ), 
        React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "6", className: cn("btn", {active: activeDays.indexOf(6) > -1}), onClick: this.props.onDayChange}, "Sat")
        )
      )
    );
  }
});

module.exports = DayOfWeekPicker;
