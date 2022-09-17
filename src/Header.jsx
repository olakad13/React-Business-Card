import myImage from './assets/myImage.jpg'
import email from './assets/email.svg'
import linkedin from './assets/linkedin.svg'
export default function Header() {
    return (
        <header>
            <img className='myimg' src={myImage}  alt="My Image"/>
            <h2>Kayode Olatunji</h2>
            <p className='job'>Frontend DEveloper</p>
            <p>Kayode.website</p>
            <div className='link-container'>
                <a className='social-link email-link' href="olakad13@gmail.com">
                    <img src={email} alt=""/>
                    <span>Email</span>
                </a>
                <a className='social-link linkedin-link' href="https://www.linkedin.com/in/kayode-olatunji-ab244917b/">
                    <img src={linkedin} alt=""/>
                    <span>LinkedIn</span>
                </a>
            </div>
        </header>
    )
}