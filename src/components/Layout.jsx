import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/navigation';
import '../styles/components.css';

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="page-wrapper">
      <header className="navbar">
        <div className="container navbar__container">
          <Link to="/" className="navbar__logo">Biffe & Barzagui</Link>
          <nav className="navbar__links">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className="navbar__link">{link.label}</Link>
            ))}
          </nav>
          <div className="navbar__cta">
            <Link to="/contato" className="btn-primary">Falar com o escritório</Link>
          </div>
          <button className="navbar__menu-btn" onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>

        <div className={`navbar__mobile-panel ${isOpen ? 'navbar__mobile-panel--open' : ''}`}>
          <div className="navbar__mobile-header">
            <span className="navbar__logo">Biffe & Barzagui</span>
            <button className="navbar__menu-btn" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
          </div>
          <nav className="navbar__mobile-links">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className="navbar__mobile-link" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
          <Link to="/contato" className="btn-primary" onClick={() => setIsOpen(false)}>Falar com o escritório</Link>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <Link to="/" className="footer__logo">Biffe & Barzagui<br/>Advocacia e Consultoria</Link>
              <p className="footer__text">Atuação jurídica em Direito Tributário e Previdenciário, com orientação técnica para decisões relevantes.</p>
            </div>
            <nav className="footer__links">
              {navLinks.map((link) => (
                <Link key={link.href} to={link.href} className="footer__link">{link.label}</Link>
              ))}
            </nav>
          </div>
          <div className="footer__bottom">
            <p>As informações deste site têm caráter institucional e não substituem análise jurídica individualizada.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
