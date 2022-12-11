import './reset.css'
import './style.css'
import homePage from './home'

(() => {
    var contentWindow = document.getElementById('content')
    contentWindow.appendChild(homePage())

    return (contentWindow)
})()

const buttons = document.querySelectorAll('button')
for (const button of buttons) {
    button.addEventListener('click', (e) => {
        for (const button of buttons) {
            button.classList.remove('active')
        }
        contentWindow.removeChild(contentWindow.firstChild)
        button.classList.add('active')
    })
}
