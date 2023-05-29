import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const UserProfile = ({ userId }) => {
    const [user] = useState({
        id: '67rdca3eeb7f6fgeed471815',
        name: 'Will',
        surname: 'Smith',
        phone: '9211855383',
        email: 'willsmith@myfriend.ru',
        password: 'b2C!9bmE',
        sex: 'male',
        city: 'Saint-Petersburg'
    })
    return (
        <section className="profile">
            <p className="profile__title">My profile</p>
            <p className="profile__name">
                {user.name} {user.surname}
            </p>
            <p className="profile__sex">{user.sex}</p>
            <p className="profile__phone">{user.phone}</p>
            <p className="profile__email">{user.email}</p>
            <p className="profile__city">{user.city}</p>
        </section>
    )
}
UserProfile.propTypes = {
    userId: PropTypes.string
}
export default UserProfile
