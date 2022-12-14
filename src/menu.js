export default function menu() {
    const menuContent = document.createElement('div') 
    menuContent.id = 'menu-content'

    const menuTitle = document.createElement('h2')
    menuTitle.innerText = `THIS IS THE MENU`

    const menuDroids = document.createElement('p')
    menuDroids.innerText = `IT WORKS`

    menuContent.append(menuTitle, menuDroids)

    return menuContent
}