import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux'
import { parceYupError } from '../../utils/parceYupError'
import TextField from '../../components/common/form/textField'
import { getCurrentUserData } from '../../store/users'
import RadioField from '../../components/common/form/radioField'
import { typeShipping, typePayment } from './fieldsOptions'
import { getCart, getTotalPrice } from '../../store/cart'
import { createTicket } from '../../store/tickets'

const CheckoutPage = () => {
    const user = useSelector(getCurrentUserData())
    const totalPrice = useSelector(getTotalPrice())
    const cart = useSelector(getCart())
    const dispatch = useDispatch()
    const [data, setData] = useState({
        name: user ? user.name : '',
        surname: user ? user.surname : '',
        email: user ? user.email : '',
        shipping: '1',
        address: '',
        payment: '1',
        fullPrice: totalPrice
    })
    const [errors, setErrors] = useState({})

    const isValid = Object.keys(errors).length === 0

    const validationSchema = yup.object().shape({
        payment: yup.string().oneOf(['1', '2']),
        address: yup
            .string()
            .test('requiredWithDelivery', 'Required field', function (value) {
                const shipping = this.parent.shipping
                if (shipping === '2') {
                    return !!value
                }
                return true
            }),
        shipping: yup.string().oneOf(['1', '2']),
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
        validationSchema
            .validate(data, { abortEarly: false })
            .then(() => setErrors({}))
            .catch((yupErr) => {
                const errors = parceYupError(yupErr)
                setErrors(errors)
            })
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
        const ticketData = { ...data, ...cart }
        console.log(ticketData)
        dispatch(createTicket(ticketData))
        //переадресация
        //обнуление корзины
        //сообщение о создании заказа
    }

    return (
        <div className="checkoutPage">
            <h2 className="checkoutPage__title title">Checkout</h2>
            <form onSubmit={handleSubmit}>
                <ol className="checkoutPage__body checkout">
                    <li className="checkout__customer">
                        <p>Customer Info</p>
                        <div>
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
                        </div>
                    </li>
                    <li className="checkout__shipping">
                        <p>Method of shipping</p>
                        <div>
                            <RadioField
                                options={typeShipping}
                                name="shipping"
                                onChange={handleChange}
                                value={data.shipping}
                            />
                            {data.shipping === '1' ? (
                                <p>Saint-Petersburg, Nevskiy pr., 55</p>
                            ) : (
                                <TextField
                                    label="Address to delivery"
                                    name="address"
                                    value={data.address}
                                    onChange={handleChange}
                                    error={errors.address}
                                />
                            )}
                        </div>
                    </li>
                    <li className="checkout__payment">
                        <p>Method of payment</p>
                        <div>
                            <RadioField
                                options={typePayment}
                                name="payment"
                                onChange={handleChange}
                                value={data.payment}
                            />
                        </div>
                    </li>
                    <li className="checkout__fullPrice">
                        Total: <span>{totalPrice}</span> $
                    </li>
                </ol>
                <div className="checkoutPage__btn">
                    <button type="submit" disabled={!isValid} className="btn">
                        {data.payment === '1' ? 'Confirm' : 'Confirm and pay'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutPage
