export default function contact() { 
    const contactContent = document.createElement('div') 
    contactContent.id = 'contact-content'

    const contactTitle = document.createElement('h2')
    contactTitle.innerText = `This is but a test`

    const contactDroids = document.createElement('p')
    contactDroids.innerText = `Soon, it shall be gone, like tears in the rain`

    contactContent.append(contactTitle, contactDroids)

    return contactContent
}