// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
// const myNotification = new Notification('Title', {
//     body: 'Notification from the Renderer process'
// })

// myNotification.onclick = () => {
//     console.log('Notification clicked')
// }
const alertOnlineStatus = () => {
    window.alert(navigator.onLine ? 'online' : 'offline')
}

window.addEventListener('online', alertOnlineStatus)
window.addEventListener('offline', alertOnlineStatus)

alertOnlineStatus()