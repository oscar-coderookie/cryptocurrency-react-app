import React from 'react';
import './ToogleSwitch.scss';
import Switch from '@mui/material/Switch';

const ToogleSwitch = ({onChange, name}) => {
  return (

<div className="toogle">
<Switch color="default" onChange={onChange} />
        <p>{name}</p>
</div>
        
  )
}

export default ToogleSwitch