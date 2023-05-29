import React, { useEffect, useState } from 'react'
import { validate } from '../../../utils/validator'
import { validationSchema } from '../../common/form/validationSchema'
import TextField from '../../common/form/textField'
import { useDispatch } from 'react-redux'
import { logIn } from '../../../store/users'
import { useHistory } from 'react-router-dom'

const LoginForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [data, setData] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState({})

    useEffect(() => {
        const errors = validate(data, validationSchema)
        setErrors(errors)
    }, [data])

    const isValid = Object.keys(errors).length === 0

    const handleChange = (e) => {
        const { value, name } = e.target
        setData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!isValid) return
        const redirect = history.location.state
            ? history.location.state.from.pathname
            : '/'
        dispatch(logIn({ payload: data, redirect }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Email or phone"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
                className="inputEmail"
            />
            <TextField
                label="Password"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
                className="inputPassword"
            />
            <button type="submit" disabled={!isValid} className="btn">
                Sign In
            </button>
        </form>
    )
}

export default LoginForm
