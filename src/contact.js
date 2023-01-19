export default function contact() { 
    const contactContent = document.createElement('div') 
    contactContent.id = 'contact-content'

    const contactTitle = document.createElement('h2')
    contactTitle.innerText = `Contact Us`
    contactTitle.classList.add('contact-title')

    const contactText = document.createElement('p')
    contactText.innerText = `Reach out to us via Comlink, or at the email address below`
    contactTitle.classList.add('contact-text')

    const contactAddress = document.createElement('href')
    contactAddress.innerText = `contact@chalmunscantina.com`
    contactTitle.classList.add('contact-email')

    contactContent.append(contactTitle, contactText, contactAddress)

    return contactContent
}