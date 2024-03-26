const axios = require('axios')
const fs = require('fs/promises')
const path = require('path')
const categories = require('../mockData/categories.json')
const { v4: uuidv4 } = require('uuid')

const getMockDataProducts = async () => {
    const { data } = await axios.get('https://dummyjson.com/products', {
        params: { limit: 100 }
    })
    return data
}

getMockDataProducts().then((data) => {
    const { products } = data
    const updatedProducts = products.map((item) => {
        delete item.id
        item._id = uuidv4().replace(/-/g, '')
        const findedCat = categories.find((cat) => cat.title === item.category)
        category = findedCat._id
        return { ...item, category }
    })
    const jsonData = JSON.stringify(updatedProducts, null, 2)
    const filePath = path.join(__dirname, '../mockData', 'products.json')

    fs.writeFile(filePath, jsonData, (err) => {
        if (err) {
            console.error('Ошибка при записи JSON файла:', err)
            return
        }
        console.log('JSON Файл успешно перезаписан!')
    })
})
