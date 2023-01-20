export default function contact() { 
    const contactContent = document.createElement('div') 
    contactContent.id = 'contact-content'

    const contactTitle = document.createElement('h2')
    contactTitle.innerText = `Contact Us`
    contactTitle.classList.add('contact-title')

    const contactText = document.createElement('p')
    contactText.innerText = `Reach out to us via Comlink, or at the email address below`
    contactText.classList.add('contact-text')

    const contactAddress = document.createElement('a')
    const textContent = document.createTextNode(`contact@chalmunscantina.com`)
    contactAddress.appendChild(textContent)
    contactAddress.href = `mailto:contact@chalmunscantina.com`
    contactAddress.classList.add('contact-email')

    contactContent.append(contactTitle, contactText, contactAddress)

    return contactContent
}