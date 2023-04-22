export default {
    isRequired: (value) => Boolean(value.trim()),
    isEmail: (value) => /^\S+@\S+\.\S+$/g.test(value),
    isUrl: (value) => /^https?:\/\/\S+$/g.test(value),
    min: (value, length) => value.length >= length,
    // Содержит заглавную букву
    isCapitalSymbol: (value) => /[A-Z]+/g.test(value),
    // Содержит число
    isContainDigit: (value) => /\d+/g.test(value),
    // ФИО
    isFIO: (value) =>
        /^(([a-zA-Zа-яА-Я]+)\s){1,}(([a-zA-Zа-яА-Я]+)\s?){1,}$/g.test(value),
    // Массив содержит значение
    isContainValue: (array, value) => array.includes(value)
}
