import React, { useEffect, useState } from 'react'
import TextField from '../../common/form/textField'
import RadioField from '../../common/form/radioField'
import CheckBoxField from '../../common/form/checkBoxField'
import * as yup from 'yup'
import { parceYupError } from '../../../utils/parceYupError'
import { useDispatch } from 'react-redux'
import { signUp } from '../../../store/users'
import { useTriggerPopup } from '../../../hooks/useTriggerPopup'

const RegisterForm = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        sex: 'male',
        city: '',
        licence: false
    })
    const [errors, setErrors] = useState({})
    const { setOpenPopup } = useTriggerPopup()

    const isValid = Object.keys(errors).length === 0

    const validationSchema = yup.object().shape({
        licence: yup
            .boolean()
            .test(
                'required true',
                'Consent to data processing is required',
                (value) => value === true
            ),
        city: yup.string('string'),
        password: yup
            .string()
            .required('Required field')
            .matches(
                /[A-Z]+/g,
                'The password must contain a capital Latin letter'
            )
            .matches(/\d+/g, 'Пароль должен содержать число')
            .min(8, 'Password must be at least 8 characters long'),
        email: yup
            .string()
            .required('Required field')
            .email('Email entered incorrectly'),
        surname: yup
            .string()
            .required('Required field')
            .matches(
                /^[A-ZА-Я][a-zа-я]*([ -][A-ZА-Я][a-zа-я]*)?/gmu,
                'The last name must start with a capital letter'
            ),
        name: yup
            .string()
            .required('Required field')
            .matches(
                /^[A-ZА-Я][a-zа-я]*([ -][A-ZА-Я][a-zа-я]*)?/gmu,
                'The name must start with a capital letter'
            )
    })

    useEffect(() => {
        // const errors = validate(data, validationSchema)
        validationSchema
            .validate(data, { abortEarly: false })
            .then(() => setErrors({}))
            .catch((yupErr) => {
                const errors = parceYupError(yupErr)
                setErrors(errors)
            })
        // setErrors(errors)
    }, [data])

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
        dispatch(signUp(data))
        setOpenPopup(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Name"
                name="name"
                value={data.name}
                onChange={handleChange}
                error={errors.name}
            />
            <TextField
                label="Surname"
                name="surname"
                value={data.surname}
                onChange={handleChange}
                error={errors.surname}
            />
            <TextField
                label="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Password"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <RadioField
                options={[
                    { name: 'Male', value: 'male' },
                    { name: 'Female', value: 'female' }
                ]}
                name="sex"
                onChange={handleChange}
                value={data.sex}
                label="Your gender?"
            />
            <TextField
                label="What city are you from?"
                name="city"
                value={data.city}
                onChange={handleChange}
                error={errors.city}
            />
            <CheckBoxField
                value={data.licence}
                onChange={handleChange}
                name="licence"
                error={errors.licence}
            >
                Confirm <a>the license agreement</a>?
            </CheckBoxField>
            <button type="submit" disabled={!isValid} className="btn">
                Sign Up
            </button>
        </form>
    )
}

export default RegisterForm
