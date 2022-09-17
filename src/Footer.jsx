import facebook from './assets/Facebook.svg'
import github from './assets/github.svg'
import instagram from './assets/instagram.svg'
import twitter from './assets/twitter.svg'

export default function Footer() {
    return (
        <footer>
            <a href="https://twitter.com/olatunj55222454">
                <img src={twitter} />
            </a>
            <a href="#">
                <img src={facebook} />
            </a>
            <a href="#">
                <img src={instagram} />
            </a>
            <a href="https://github.com/olakad13">
                <img src={github} />
            </a>
        </footer>
    )
}