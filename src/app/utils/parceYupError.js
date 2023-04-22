export const parceYupError = (yupErr) => {
    const { inner } = yupErr

    return Array.isArray(inner) // Возвращаем объект с ошибками
        ? inner.reduce((acc, item) => {
              const { path, errors } = item
              // Проверяем есть ли ошибка уже в объекте
              if (!(path in acc) && errors.length) {
                  // Если нет, то добавляем первую
                  acc[path] = errors[0]
              }

              return acc
          }, {})
        : {}
}
