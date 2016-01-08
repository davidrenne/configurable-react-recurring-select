var React = require('react');
var cn = require('classnames');

var DayOfMonthPicker = React.createClass({
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
      <div>
        <table>
          <tbody>
            <tr>
              <td id="1" className={cn("btn", {active: activeDays.indexOf(1) > -1})} onClick={this.handleDayChange}>1</td>
              <td id="2" className={cn("btn", {active: activeDays.indexOf(2) > -1})} onClick={this.handleDayChange}>2</td>
              <td id="3" className={cn("btn", {active: activeDays.indexOf(3) > -1})} onClick={this.handleDayChange}>3</td>
              <td id="4" className={cn("btn", {active: activeDays.indexOf(4) > -1})} onClick={this.handleDayChange}>4</td>
              <td id="5" className={cn("btn", {active: activeDays.indexOf(5) > -1})} onClick={this.handleDayChange}>5</td>
              <td id="6" className={cn("btn", {active: activeDays.indexOf(6) > -1})} onClick={this.handleDayChange}>6</td>
              <td id="7" className={cn("btn", {active: activeDays.indexOf(7) > -1})} onClick={this.handleDayChange}>7</td>
            </tr>
            <tr>
              <td id="8" className={cn("btn", {active: activeDays.indexOf(8) > -1})} onClick={this.handleDayChange}>8</td>
              <td id="9" className={cn("btn", {active: activeDays.indexOf(9) > -1})} onClick={this.handleDayChange}>9</td>
              <td id="10" className={cn("btn", {active: activeDays.indexOf(10) > -1})} onClick={this.handleDayChange}>10</td>
              <td id="11" className={cn("btn", {active: activeDays.indexOf(11) > -1})} onClick={this.handleDayChange}>11</td>
              <td id="12" className={cn("btn", {active: activeDays.indexOf(12) > -1})} onClick={this.handleDayChange}>12</td>
              <td id="13" className={cn("btn", {active: activeDays.indexOf(13) > -1})} onClick={this.handleDayChange}>13</td>
              <td id="14" className={cn("btn", {active: activeDays.indexOf(14) > -1})} onClick={this.handleDayChange}>14</td>
            </tr>
            <tr>
              <td id="15" className={cn("btn", {active: activeDays.indexOf(15) > -1})} onClick={this.handleDayChange}>15</td>
              <td id="16" className={cn("btn", {active: activeDays.indexOf(16) > -1})} onClick={this.handleDayChange}>16</td>
              <td id="17" className={cn("btn", {active: activeDays.indexOf(17) > -1})} onClick={this.handleDayChange}>17</td>
              <td id="18" className={cn("btn", {active: activeDays.indexOf(18) > -1})} onClick={this.handleDayChange}>18</td>
              <td id="19" className={cn("btn", {active: activeDays.indexOf(19) > -1})} onClick={this.handleDayChange}>19</td>
              <td id="20" className={cn("btn", {active: activeDays.indexOf(20) > -1})} onClick={this.handleDayChange}>20</td>
              <td id="21" className={cn("btn", {active: activeDays.indexOf(21) > -1})} onClick={this.handleDayChange}>21</td>
            </tr>
            <tr>
              <td id="22" className={cn("btn", {active: activeDays.indexOf(22) > -1})} onClick={this.handleDayChange}>22</td>
              <td id="23" className={cn("btn", {active: activeDays.indexOf(23) > -1})} onClick={this.handleDayChange}>23</td>
              <td id="24" className={cn("btn", {active: activeDays.indexOf(24) > -1})} onClick={this.handleDayChange}>24</td>
              <td id="25" className={cn("btn", {active: activeDays.indexOf(25) > -1})} onClick={this.handleDayChange}>25</td>
              <td id="26" className={cn("btn", {active: activeDays.indexOf(26) > -1})} onClick={this.handleDayChange}>26</td>
              <td id="27" className={cn("btn", {active: activeDays.indexOf(27) > -1})} onClick={this.handleDayChange}>27</td>
              <td id="28" className={cn("btn", {active: activeDays.indexOf(28) > -1})} onClick={this.handleDayChange}>28</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td id="29" className={cn("btn", {active: activeDays.indexOf(29) > -1})} onClick={this.handleDayChange}>29</td>
              <td id="30" className={cn("btn", {active: activeDays.indexOf(30) > -1})} onClick={this.handleDayChange}>30</td>
              <td id="31" className={cn("btn", {active: activeDays.indexOf(31) > -1})} onClick={this.handleDayChange}>31</td>
              <td id="-1" className={cn("btn", {active: activeDays.indexOf(-1) > -1})} onClick={this.handleDayChange}>Last Day</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
});

module.exports = DayOfMonthPicker;
