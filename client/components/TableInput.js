var React = require('react');


var TableInput = React.createClass({
  render: function () {
    var newForm = [];
    for(var i = 0; i < this.props.state.columns; i++) {
      newForm.push(<div>
        <input placeholder='Column Name'></input>
        <select>
        <option>string</option>
        <option>number</option>
        </select>
        </div>);
    }

    if(this.props.state.columns !== 0) {
      var newForm = [];
      for(var i = 0; i < this.props.state.columns; i++) {
        newForm.push(<div>
          <input placeholder='Column Name'></input>
          <select>
          <option>string</option>
          <option>number</option>
          </select>
          </div>);
      }
      return (
        <div>
        <form id='createSchema' onSubmit={this.props.create}>
          {newForm}
          <button type='submit'></button>
        </form>
        </div>
      )
    } else {
      return (
        <div>
        <form id='makeNewForm' onSubmit={this.props.makeForm}>
          <input id='TableInput' placeholder='Table Name'></input><br/>
          <input id='UsernameOfDatabase' placeholder='UsernameOfDatabase'></input><br/>
          <input id='PasswordOfDatabase' placeholder='PasswordOfDatabase'></input><br/>
          <select id='numberOfColumns'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select><br/>
          <button type='submit'>Make columns</button>
        </form>
        </div>
      )
    }
  }
});

module.exports = TableInput;
