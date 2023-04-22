export const categoriesArray = [
    'smartphones',
    'laptops',
    'fragrances',
    'skincare',
    'groceries',
    'home-decoration'
]

export const categories = [
    {
        id: 'smartphones',
        title: 'Smartphones',
        imageURL: 'smartphones'
    },
    { id: 'laptops', title: 'Laptops', imageURL: 'laptops' },
    {
        id: 'fragrances',
        title: 'Fragrances',
        imageURL: 'fragrances'
    },
    {
        id: 'skincare',
        title: 'Skincare',
        imageURL: 'skincare'
    },
    {
        id: 'groceries',
        title: 'Groceries',
        imageURL: 'groceries'
    },
    {
        id: 'home-decoration',
        title: 'Home-decoration',
        imageURL: 'home-decoration'
    }
]
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(categories)
        }, 1000)
    })

export default { fetchAll }
