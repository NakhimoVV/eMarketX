import React, { useEffect, useState } from 'react'
import TextField from '../../common/form/textField'
import RadioField from '../../common/form/radioField'
import CheckBoxField from '../../common/form/checkBoxField'
import * as yup from 'yup'
import { parceYupError } from '../../../utils/parceYupError'

const RegisterForm = () => {
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

    const isValid = Object.keys(errors).length === 0

    const validationSchema = yup.object().shape({
        licence: yup
            .boolean()
            .test(
                'required true',
                'Согласие на обработку данных обязательно',
                (value) => value === true
            ),
        city: yup.string('string'),
        password: yup
            .string()
            .required('Required field')
            .matches(
                /[A-Z]+/g,
                'Пароль должен содержать заглавную латинскую букву'
            )
            .matches(/\d+/g, 'Пароль должен содержать число')
            .min(8, 'Пароль должен содержать мимимум 8 символов'),
        email: yup
            .string()
            .required('Required field')
            .email('Email введён некорректно'),
        surname: yup
            .string()
            .required('Required field')
            .matches(
                /^[A-ZА-Я][a-zа-я]*([ -][A-ZА-Я][a-zа-я]*)?/gmu,
                'Фамилия должна начинаться с большой буквы'
            ),
        name: yup
            .string()
            .required('Required field')
            .matches(
                /^[A-ZА-Я][a-zа-я]*([ -][A-ZА-Я][a-zа-я]*)?/gmu,
                'Имя должно начинаться с большой буквы'
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
        if (isValid) {
            console.log(data)
        }
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
                label="City are you from?"
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
                Подтвердить <a>лицензионное соглашение</a>?
            </CheckBoxField>
            <button type="submit" disabled={!isValid} className="btn">
                Sign Up
            </button>
        </form>
    )
}

export default RegisterForm
