import React from 'react';
import Select from 'react-select';

var options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two', clearableValue: false }
];
function cleanInput(inputValue) {
  // Strip all non-number characters from the input
  return inputValue.replace(/[^0-9]/g, "");
}

export default React.createClass({
  getInitialState: function(){
    return {
      value: 'one'
    }
  },
  onChange: function(e){
    var target = e.target.value;
    this.setState({
      value: target
    })
  },
  render() {
    return (
      <div className="select-react">
        <Select
          name="form-field-name"
          multi={true}
          value={this.state.value}
          options={options}
          onChange={this.onChange}
        />
      </div>
    )
  }
})