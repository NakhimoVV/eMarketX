function generateAuthError(message) {
    switch (message) {
        case 'INVALID_PASSWORD':
            return 'Email or Password is not correct'
        case 'EMAIL_EXISTS':
            return 'The user with this email already exists'
        default:
            return 'Too many login attempts. Please try later'
    }
}
export default generateAuthError
