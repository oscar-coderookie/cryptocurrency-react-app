import React from 'react';
import './ToogleSwitch.scss';
import Switch from 'react-switch';

const ToogleSwitch = ({onChange, name, value}) => {
  return (

<div className="toogle">
<Switch  onChange={onChange} onColor="#2d5a08"
offColor='#999999'
checkedIcon={true} 
uncheckedIcon={false} 
checked={value}  />
        <p>{name}</p>
</div>
        
  )
}

export default ToogleSwitch