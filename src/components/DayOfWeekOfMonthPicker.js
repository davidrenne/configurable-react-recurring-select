var React = require('react');
var DayOfWeekPicker = require('./DayOfWeekPicker.js');

var DayOfWeekOfMonthPicker = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <DayOfWeekPicker label="Week 1: " />
        </div>
        <div>
          <DayOfWeekPicker label="Week 2: " />
        </div>
        <div>
          <DayOfWeekPicker label="Week 3: " />
        </div>
        <div>
          <DayOfWeekPicker label="Week 4: " />
        </div>
      </div>
    );
  }
});

module.exports = DayOfWeekOfMonthPicker;
