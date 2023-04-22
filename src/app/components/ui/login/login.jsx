import React, { useState } from 'react'
import ModalWindow from '../../common/modalWindow'
import LoginForm from './loginForm'
import './style.scss'
import RegisterForm from './registerForm'

const Login = () => {
    const [formType, setFormType] = useState('login')

    const toggleTitleItem = ({ target }) => {
        setFormType(target.id === 'login' ? 'login' : 'register')
    }

    const [modalActive, setModalActive] = useState(true)

    return (
        <ModalWindow active={modalActive} setActive={setModalActive}>
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
        </ModalWindow>
    )
}

export default Login
