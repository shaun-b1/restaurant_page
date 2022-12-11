import './reset.css'
import './style.css'
import homePage from './home'

(() => {
    const contentWindow = document.getElementById('content')
    contentWindow.appendChild(homePage())

    return contentWindow
})()

