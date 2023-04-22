export function calcPrice(price, discount) {
    return parseInt(price + (price * discount) / 100)
}
