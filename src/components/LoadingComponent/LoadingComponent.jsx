import './LoadingComponent.scss';
import Logo2 from "../../img/logo-coin.png";

import React from 'react'

const LoadingComponent = () => {
    return (
        <div className="loading">
            <img className="loading__logo" src={Logo2} alt="logo2" />
        </div>
    )
}

export default LoadingComponent
