import localforage from 'localforage'

// Делаем клиентское кэширование картинок

async function cacheImage(url) {
    const cachedImage = await localforage.getItem(url)
    if (cachedImage) {
        return cachedImage
    }

    const response = await fetch(url)
    const blob = await response.blob()
    await localforage.setItem(url, blob)

    return blob
}

async function loadImage(url) {
    const blob = await cacheImage(url)
    const blobUrl = URL.createObjectURL(blob)
    return blobUrl
}

export default loadImage
