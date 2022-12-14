import './reset.css'
import './style.css'
import homePage from './home'
import menu from './menu'
import contact from './contact'

const pageConstructor = (() => {
    // object to hold all the functions that create the pages
    const pages = {
        homePage: homePage(),
        menu: menu(),
        contact: contact()
    }

    // selectors
    const contentWindow = document.getElementById('content')

    //functions
    const createPage = (pageName) => contentWindow.appendChild(pages[pageName])
    const deletePage = () => contentWindow.removeChild(contentWindow.firstChild)

    return { createPage, deletePage }
})();

const buttons = document.querySelectorAll('button')
for (const button of buttons) {
    button.addEventListener('click', (e) => {
        pageConstructor.deletePage()
        for (const button of buttons) {
            button.classList.remove('active')
        }
        pageConstructor.createPage(e.target.id)
        button.classList.add('active')
    })
}

(() => {
    const contentWindow = document.getElementById('content')
    contentWindow.appendChild(homePage())
})()