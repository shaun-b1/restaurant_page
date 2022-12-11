export default function homePage() {
    const homeContent = document.createElement('div') 
    homeContent.id = 'home-content'

    const homeTitle = document.createElement('h2')
    homeTitle.innerText = `"You'll never find a more wretched hive of scum and villainy!" - Time Out Outer Rim`

    const homeDroids = document.createElement('p')
    homeDroids.innerText = `No Droids!`

    homeContent.append(homeTitle, homeDroids)

    return homeContent
}