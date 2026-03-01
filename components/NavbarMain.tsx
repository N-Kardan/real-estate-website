'use client'
import Styles from './NavbarMain.module.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarMain = () => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  return (
    <>
    <Navbar sticky='top' expanded={expanded} expand="lg" className={`${Styles.navbarMain} navbar`}>
      <Container>

        <Link href="/" className={`${Styles.navbarBrand} d-flex align-items-center`}>
          <Image
            src="/RealEstateLogo.png"
            alt='شعار الموقع'
            width={73}
            height={50}
            loading='eager'
            />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)}>
          <div className={Styles.iconWrapper}>
            <FaBars className={`${Styles.toggleIcon} ${!expanded ? Styles.iconVisible : Styles.iconHidden}`} />
            <FaTimes className={`${Styles.toggleIcon} ${expanded ? Styles.iconVisible : Styles.iconHidden}`} />
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${Styles.navShow} ms-auto`}>
            <Nav.Link as={Link} href="/" onClick={() => setExpanded(false)} className='nav-link transition'>
              الرئيسية
            </Nav.Link>
            <Nav.Link as={Link} href="/properties" onClick={() => setExpanded(false)} className={`${Styles.navLink} ${pathname === '/properties' ? Styles.active : ''} nav-link transition`}>
              عقاراتنا
            </Nav.Link>
            <Nav.Link as={Link} href="/service" onClick={() => setExpanded(false)} className={`${Styles.navLink} ${pathname === '/service' ? Styles.active : ''} nav-link transition`}>
             خدماتنا
            </Nav.Link>
            <Nav.Link as={Link} href="/agents" onClick={() => setExpanded(false)} className={`${Styles.navLink} ${pathname === '/agents' ? Styles.active : ''} nav-link transition`}>
              وكلائنا
            </Nav.Link>
            <Nav.Link as={Link} href="/blog" onClick={() => setExpanded(false)} className={`${Styles.navLink} ${pathname === '/blog' ? Styles.active : ''} nav-link transition`}>
             مدونتنا
            </Nav.Link>
            <Nav.Link as={Link} href="/contactUs" onClick={() => setExpanded(false)} className={`${Styles.navLink} ${pathname === '/contactUs' ? Styles.active : ''} nav-link transition`}>
              تواصل معنا
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
    </>
  )
}

export default NavbarMain