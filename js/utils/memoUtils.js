export function getCurrentTime() {
    const now = new Date()
    const currentTime = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`

    return currentTime
}