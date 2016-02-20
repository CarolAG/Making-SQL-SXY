var React = require('react');
var ReactDOM = require('react-dom');
var TableInput = require('./TableInput');
var $ = require('jquery');

var App = React.createClass({

  getInitialState: function() {
    return {columns: 0}
  },

  createTable: function() {
    var info = {
      table: $('#TableInput').val(),
      un: $('#UsernameOfDatabase').val(),
      pw: $('#PasswordOfDatabase').val(),
      cols: $('#numberOfColumns').val()
    }
    info = JSON.stringify(info);
    $.ajax({
      type:POST,
      url: '/loggedin',
      data: info,
      contentType: 'application/json; charset=UTF-8',
      dataType: 'json'
    })
  },

  onSubmit: function(e) {
    e.preventDefault();
    console.log(document.getElementById('numberOfColumns').value)
    this.setState({columns: 3})
  },

  render: function () {
    return (
      <div id='App' >
        <TableInput makeForm={this.onSubmit} state={this.state} create='createTable'/>
      </div>
    )
  }
});

module.exports = App;

ReactDOM.render(<App />, document.getElementById('main-container'));
