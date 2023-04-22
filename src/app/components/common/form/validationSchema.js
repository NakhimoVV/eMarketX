export const validationSchema = {
    name: {
        isRequired: {
            message: 'Имя обязательно для заполнения'
        }
    },
    surname: {
        isRequired: {
            message: 'Фамилия обязательна для заполнения'
        }
    },
    email: {
        isRequired: {
            message: 'Электронная почта обязательна для заполнения'
        },
        isEmail: {
            message: 'Email введён некорректно'
        }
    },
    password: {
        isRequired: {
            message: 'Пароль обязателен для заполнения'
        },
        isCapitalSymbol: {
            message: 'Пароль должен содержать заглавную латинскую букву'
        },
        isContainDigit: {
            message: 'Пароль должен содержать число'
        },
        min: {
            message: 'Пароль должен содержать мимимум 8 символов',
            param: 8
        }
    }
}
