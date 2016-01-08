var React = require('react');
var RecurringSelect = require('./components/RecurringSelect.js');


var App = React.createClass({
  render: function() {
    return (
      <RecurringSelect />
    );
  }
});

module.exports = App;
