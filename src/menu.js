import Chuba from './Chuba.gif';
import DeathStick from "./Death_sticks.gif";
import Frog from "./Frog.gif";
import GreenMilk from "./Green_milk.gif";
import JawaJuice from "./Jawa_juice.gif";
import Pear from "./Pear.gif";

const menuImages = [Chuba, DeathStick, Frog, GreenMilk, JawaJuice, Pear]
const menuNames = ["Chuba", "Death Sticks", "Frog", "Green Milk", "Jawa Juice", "Pear"]
const menuTexts = [
    "Just wait until you find out how much they cost",
    "You want to go home and rethink your life",
    "I don't want Jabba touching me either",
    "Not to be confused with Blue Milk, equally as disgusting",
    "This is fermented Bantha meat. Look it up",
    "How cringe is this?"
]

export default function menu() {
    const menuContent = document.createElement('div') 
    menuContent.id = 'menu-content'

    for (let i = 0; i < menuImages.length; i++) {
        const menuObject = document.createElement('div')
        menuObject.classList.add('menu-item')

        const menuImage = new Image()
        menuImage.classList.add('menu-image')
        menuImage.src = menuImages[i]

        const menuName = document.createElement('div')
        menuName.classList.add('menu-name')
        menuName.textContent = menuNames[i]

        const menuText = document.createElement('div')
        menuText.classList.add('menu-text')
        menuText.textContent = menuTexts[i]

        menuObject.append(menuImage, menuName, menuText)

        menuContent.appendChild(menuObject)
    }

    return menuContent
}