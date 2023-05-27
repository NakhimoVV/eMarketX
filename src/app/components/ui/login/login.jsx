import React, { useState } from 'react'
import LoginForm from './loginForm'
import RegisterForm from './registerForm'
import './style.scss'

const Login = () => {
    const [formType, setFormType] = useState('login')

    const toggleTitleItem = ({ target }) => {
        setFormType(target.id === 'login' ? 'login' : 'register')
    }

    return (
        <>
            <div className="login-title">
                <a
                    role="button"
                    id="login"
                    className={formType === 'login' ? 'active' : ''}
                    onClick={toggleTitleItem}
                >
                    Log In
                </a>{' '}
                /{' '}
                <a
                    role="button"
                    id="register"
                    className={formType === 'register' ? 'active' : ''}
                    onClick={toggleTitleItem}
                >
                    Register
                </a>
            </div>
            {formType === 'login' && <LoginForm />}
            {formType === 'register' && <RegisterForm />}
        </>
    )
}
export default Login
