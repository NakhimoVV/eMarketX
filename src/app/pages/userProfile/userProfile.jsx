import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { useSelector } from 'react-redux'
import { getCurrentUserData } from '../../store/users'
import { Link } from 'react-router-dom'

const UserProfile = ({ userId }) => {
    const user = useSelector(getCurrentUserData())
    return (
        <section className="profile">
            <p className="profile__title">My profile</p>
            <p className="profile__name">
                {user.name} {user.surname}
            </p>
            <p className="profile__sex">{user.sex}</p>
            <p className="profile__phone">{user.phone}</p>
            <p className="profile__email">{user.email}</p>
            {user.city && <p className="profile__city">{user.city}</p>}
            <div className="profile__buttons">
                {/* <a href="">edit profile</a> / */}
                <Link to="/logout">logout</Link>
            </div>
        </section>
    )
}
UserProfile.propTypes = {
    userId: PropTypes.string
}
export default UserProfile
