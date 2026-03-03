import Styles from './NavbarTop.module.css'

import { FaPhone, FaInstagram, FaXTwitter, FaFacebookF, FaYoutube, FaRegEnvelope } from "react-icons/fa6";

const NavbarTop = () => {
  return (
    <>
    <div className={Styles.navbarTop}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start p-0'>
            <div className={Styles.socialLink}>
              <a href='tel:123-456-7890' className={`${Styles.phone} transition`} title="تواصل معنا">
                123-456-7890<FaPhone />
              </a>
              <a href='#' className='transition' title="Instagram">
                <FaInstagram />
              </a>
              <a href='#' className='transition' title="Twitter">
                <FaXTwitter />
              </a>
              <a href='#' className='transition' title="Facebook">
                <FaFacebookF />
              </a>
              <a href='#' className='transition' title="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className={`${Styles.mail} col-12 col-md-6 text-center text-md-start p-0`}>
            <a href='#' className='transition' title="تواصل معنا">
              sales@yourwebsite.com <FaRegEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default NavbarTop