import logo from '../assets/img/LOGO.SVG';
import { FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#9D89DE', color: '#fff', position: 'relative' }}>
      <div className="container py-5">
        {/* Site Title Top Right */}
        <h2 style={{ position: 'absolute', top: '1rem', right: '1rem', fontFamily: 'Glaser Stencil D' }}>
          stim-noi suntem viitorul!
        </h2>

        <div className="row align-items-start" style={{ padding: '2rem 0' }}>
          {/* Logo Left */}
          <div className="col-md-4 d-flex align-items-center mb-4 mb-md-0">
            <img src={logo} alt="Logo" height="150" />
          </div>

          {/* Contact Center */}
          <div className="col-md-4 text-center mb-4 mb-md-0" style={{ padding: '1rem' }}>
            <div className="mb-3">
              <FaEnvelope /> <a href="mailto:contact@domain.com" style={{ color: '#fff', textDecoration: 'none' }}>contact@stim-ong.ro</a>
            </div>
            <div className="mb-3">
              <FaMapMarkerAlt /> Bucharest, Romania 
            </div>
            <div>
              <a href="#" className="me-3" style={{ color: '#fff' }}><FaFacebook size={20} /></a>
              <a href="#" className="me-3" style={{ color: '#fff' }}><FaLinkedin size={20} /></a>
              <a href="#" className="me-3" style={{ color: '#fff' }}><FaInstagram size={20} /></a>
              <a href="#" style={{ color: '#fff' }}><FaTiktok size={20} /></a>
            </div>
          </div>

          {/* Pages Right */}
          <div className="col-md-4 text-md-end text-center">
            
            <ul className="list-unstyled">
              <li><a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
              <li><a href="/projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</a></li>
              <li><a href="/vision" style={{ color: '#fff', textDecoration: 'none' }}>Vision</a></li>
              <li><a href="/partners" style={{ color: '#fff', textDecoration: 'none' }}>Partners</a></li>
              <li><a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
              <li><a href="/get-involved" style={{ color: '#fff', textDecoration: 'none' }}>Get Involved</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bottom Left */}
      <div style={{ padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.3)' }}>
        <small>&copy; {new Date().getFullYear()} ©ȘTIM - Noi suntem viitorul. Toate drepturile rezervate.</small>
      </div>
    </footer>
    );
}
