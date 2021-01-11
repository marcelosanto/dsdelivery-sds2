import './styles.css'

import { ReactComponent as InstaLogo } from '../../assets/images/instagram.svg'
import { ReactComponent as YouLogo } from '../../assets/images/youtube.svg'
import { ReactComponent as LinkeLogo } from '../../assets/images/linkedin.svg'

export default function Footer() {
  return (
    <footer className='main-footer'>
      App desenvolvido durante a 2º ed. do evento Semana DevSuperior
      <div className='footer-icons'>
        <a href='/' target='_new'>
          <YouLogo />
        </a>
        <a href='/' target='_new'>
          <LinkeLogo />
        </a>
        <a href='/' target='_new'>
          <InstaLogo />
        </a>
      </div>
    </footer>
  )
}
