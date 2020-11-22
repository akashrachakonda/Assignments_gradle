import React, { Component } from 'react';

class Toggle extends Component {
 

  render() {
    return (
      <div className='custom-control custom-switch' >
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitches'
          checked={this.props.switchToggle}
          onChange={this.props.handleSwitchChange}
          readOnly
         
        />
        <label className='custom-control-label' htmlFor='customSwitches' style={{color:"white"}} >
          Travel mode
        </label>
      </div>
    );
  }
}

export default Toggle;