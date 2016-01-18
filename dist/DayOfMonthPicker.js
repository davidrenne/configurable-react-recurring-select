var React = require('react');
var cn = require('classnames');

var DayOfMonthPicker = React.createClass({displayName: "DayOfMonthPicker",
  handleDayChange: function (e) {
    var days = this.props.validations;
    var day = parseInt(e.target.id);
    var index = days.indexOf(day);
    if (index > -1) {
      days.splice(index, 1);
    } else {
      days.push(day);
    }
    this.props.onValidationsChange(days);
  },
  render: function() {
    var activeDays = this.props.validations;
    return (
      React.createElement("div", {style: {width: "300px"}}, 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "1", className: cn("btn", {active: activeDays.indexOf(1) > -1}), onClick: this.handleDayChange}, "1")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "2", className: cn("btn", {active: activeDays.indexOf(2) > -1}), onClick: this.handleDayChange}, "2")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "3", className: cn("btn", {active: activeDays.indexOf(3) > -1}), onClick: this.handleDayChange}, "3")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "4", className: cn("btn", {active: activeDays.indexOf(4) > -1}), onClick: this.handleDayChange}, "4")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "5", className: cn("btn", {active: activeDays.indexOf(5) > -1}), onClick: this.handleDayChange}, "5")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "6", className: cn("btn", {active: activeDays.indexOf(6) > -1}), onClick: this.handleDayChange}, "6")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "7", className: cn("btn", {active: activeDays.indexOf(7) > -1}), onClick: this.handleDayChange}, "7")
          )
        ), 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "8", className: cn("btn", {active: activeDays.indexOf(8) > -1}), onClick: this.handleDayChange}, "8")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "9", className: cn("btn", {active: activeDays.indexOf(9) > -1}), onClick: this.handleDayChange}, "9")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "10", className: cn("btn", {active: activeDays.indexOf(10) > -1}), onClick: this.handleDayChange}, "10")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "11", className: cn("btn", {active: activeDays.indexOf(11) > -1}), onClick: this.handleDayChange}, "11")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "12", className: cn("btn", {active: activeDays.indexOf(12) > -1}), onClick: this.handleDayChange}, "12")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "13", className: cn("btn", {active: activeDays.indexOf(13) > -1}), onClick: this.handleDayChange}, "13")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "14", className: cn("btn", {active: activeDays.indexOf(14) > -1}), onClick: this.handleDayChange}, "14")
          )
        ), 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "15", className: cn("btn", {active: activeDays.indexOf(15) > -1}), onClick: this.handleDayChange}, "15")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "16", className: cn("btn", {active: activeDays.indexOf(16) > -1}), onClick: this.handleDayChange}, "16")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "17", className: cn("btn", {active: activeDays.indexOf(17) > -1}), onClick: this.handleDayChange}, "17")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "18", className: cn("btn", {active: activeDays.indexOf(18) > -1}), onClick: this.handleDayChange}, "18")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "19", className: cn("btn", {active: activeDays.indexOf(19) > -1}), onClick: this.handleDayChange}, "19")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "20", className: cn("btn", {active: activeDays.indexOf(20) > -1}), onClick: this.handleDayChange}, "20")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "21", className: cn("btn", {active: activeDays.indexOf(21) > -1}), onClick: this.handleDayChange}, "21")
          )
        ), 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "22", className: cn("btn", {active: activeDays.indexOf(22) > -1}), onClick: this.handleDayChange}, "22")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "23", className: cn("btn", {active: activeDays.indexOf(23) > -1}), onClick: this.handleDayChange}, "23")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "24", className: cn("btn", {active: activeDays.indexOf(24) > -1}), onClick: this.handleDayChange}, "24")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "25", className: cn("btn", {active: activeDays.indexOf(25) > -1}), onClick: this.handleDayChange}, "25")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "26", className: cn("btn", {active: activeDays.indexOf(26) > -1}), onClick: this.handleDayChange}, "26")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "27", className: cn("btn", {active: activeDays.indexOf(27) > -1}), onClick: this.handleDayChange}, "27")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "28", className: cn("btn", {active: activeDays.indexOf(28) > -1}), onClick: this.handleDayChange}, "28")
          )
        ), 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "29", className: cn("btn", {active: activeDays.indexOf(29) > -1}), onClick: this.handleDayChange}, "29")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "30", className: cn("btn", {active: activeDays.indexOf(30) > -1}), onClick: this.handleDayChange}, "30")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "31", className: cn("btn", {active: activeDays.indexOf(31) > -1}), onClick: this.handleDayChange}, "31")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", {id: "-1", className: cn("btn", {active: activeDays.indexOf(-1) > -1}), onClick: this.handleDayChange}, "Last Day")
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", null)
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", null)
          ), 
          React.createElement("div", {className: "col-xs"}, 
          React.createElement("div", null)
          )
        )
      )
    )
  }
});

module.exports = DayOfMonthPicker;
