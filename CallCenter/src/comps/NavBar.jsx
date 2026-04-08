import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';
import logo from '/src/img/BCI/lg111.jpg';
import linkedin from '/src/img/linkedin.svg';
import facebook from '/src/img/facebook.svg';
import instagram from '/src/img/instagram.png';
// import 'bootstrap/dist/css/bootstrap.css';

export function NavBar(){
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () => {    
       if(window.scrollY > 50){
            setScrolled(true)
        }
        else setScrolled(false)
    }
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
            <Navbar expand="lg" className={scrolled ? "scrolled lg":"lg"}>
      <Container>
        <Navbar.Brand href="#home" onClick={()=>onUpdateActiveLink('home')}><img className='lg' src={logo} width="100%" alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': "navbar-link"} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#aboutus" className={activeLink === 'aboutus' ? 'active navbar-link': "navbar-link"} onClick={()=>onUpdateActiveLink('aboutus')}>About Us</Nav.Link>
            <Nav.Link href="#services" className={activeLink === 'services' ? 'active navbar-link': "navbar-link"} onClick={()=>onUpdateActiveLink('services')}>Services</Nav.Link>
            <Nav.Link href="#contacts" className={activeLink === 'contacts' ? 'active navbar-link': "navbar-link"} onClick={()=>onUpdateActiveLink('contacts')}>Contacts</Nav.Link>

           

          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a  target="_blank" href="https://www.linkedin.com/company/100994705/admin/feed/posts/?feedType=following"><img src={linkedin} alt="" /></a>
                <a  target="_blank" href="#"><img src={instagram} alt="" /></a>
                <a  target="_blank" href="#"><img src={facebook} alt="" /></a>
            </div>
            {/* <button className='vvd' onClick={()=>console.log('connect')}><span>Let's Connect</span></button> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}