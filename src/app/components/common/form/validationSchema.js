export const validationSchema = {
    name: {
        isRequired: {
            message: 'First name is required'
        }
    },
    surname: {
        isRequired: {
            message: 'Last name is required'
        }
    },
    email: {
        isRequired: {
            message: 'Email is required'
        },
        isEmail: {
            message: 'Email is entered incorrectly'
        }
    },
    password: {
        isRequired: {
            message: 'Password is required'
        },
        isCapitalSymbol: {
            message: 'Password must contain a capital Latin letter'
        },
        isContainDigit: {
            message: 'Password must contain a number'
        },
        min: {
            message: 'Password must be at least 8 characters long',
            param: 8
        }
    }
}
