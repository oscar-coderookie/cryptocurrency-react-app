
import React from 'react'
import { LoginForm} from '../../components'

const LoginPage = (props) => {
    return (
        <div className="register-page">
            <LoginForm {...props}/>    
        </div>
    )
}

export default LoginPage
