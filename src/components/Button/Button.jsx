import './Button.scss';

import React from 'react'

const Button = ({title, gradColor2, fontColor, gradColor1, direction, width, onClick}) => {
    return (
      
          <button type="submit" onClick={onClick} style={{color: fontColor, background: `linear-gradient(${direction},${gradColor1},${gradColor2}`, width: width }} className="btn-grad">{title}</button>
    )
}

export default Button



