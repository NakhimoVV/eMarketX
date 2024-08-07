const axios = require('axios')
const fs = require('fs/promises')
const path = require('path')
const categories = require('../mockData/categories.json')
const { v4: uuidv4 } = require('uuid')

const getMockDataProducts = async () => {
    const { data } = await axios.get('https://dummyjson.com/products', {
        params: { limit: 194 }
    })
    return data
}
// Для запуска обновления mock data product
// Запускаем ран "node src/app/api/getmockdata.js"
getMockDataProducts().then((data) => {
    const { products } = data
    //Обновляем категории
    // const cats = products.map((item) => item.category)
    // const uniqCats = [...new Set(cats)]
    // const updatedCategories = uniqCats.map((item) => {
    //     return { _id: uuidv4().replace(/-/g, '').slice(0, 10), title: item }
    // })
    //Обновляем подукты
    const updatedProducts = products.map((item) => {
        delete item.id
        item._id = uuidv4().replace(/-/g, '').slice(0, 10)
        const findedCat = categories.find((cat) => cat.title === item.category)
        category = findedCat._id
        return { ...item, category }
    })

    // const jsonData1 = JSON.stringify(updatedCategories, null, 2)
    // const filePath1 = path.join(__dirname, '../mockData', 'categories.json')
    const jsonData2 = JSON.stringify(updatedProducts, null, 2)
    const filePath2 = path.join(__dirname, '../mockData', 'products.json')

    // fs.writeFile(filePath1, jsonData1, (err) => {
    //     if (err) {
    //         console.error('Ошибка при записи JSON файла:', err)
    //         return
    //     }
    //     console.log('Categories JSON Файл успешно перезаписан!')
    // })
    fs.writeFile(filePath2, jsonData2, (err) => {
        if (err) {
            console.error('Ошибка при записи JSON файла:', err)
            return
        }
        console.log('Products JSON Файл успешно перезаписан!')
    })
})
