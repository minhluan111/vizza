import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Về Vizza', href: '#about' },
    { name: 'Dịch vụ', href: '#services' },
    { name: 'Bảng giá', href: '#pricing' },
    { name: 'Thanh toán', href: '#payment' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'var(--transition)',
      background: isScrolled ? 'rgba(252, 251, 249, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
      padding: isScrolled ? '16px 0' : '24px 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Logo */}
        <a href="#" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: 800,
          fontSize: '1.75rem',
          fontFamily: 'var(--font-heading)',
          letterSpacing: '-1px',
        }}>
          <span style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
            borderRadius: '10px',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 4px 10px rgba(181, 130, 87, 0.2)',
          }}>
            V
          </span>
          <span className="text-gradient">vizza</span>
        </a>

        {/* Desktop Navigation Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
        }} className="desktop-only">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.95rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
            <Sparkles size={16} />
            Liên hệ ngay
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'none', // Shown in CSS media queries
          }}
          className="mobile-toggle-btn"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div style={{
        position: 'fixed',
        top: '100%',
        left: 0,
        width: '100%',
        height: '100vh',
        background: 'var(--bg-main)',
        display: isOpen ? 'flex' : 'none',
        flexDirection: 'column',
        padding: '40px 24px',
        gap: '24px',
        borderTop: '1px solid var(--border)',
        transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
        transition: 'var(--transition)',
      }} className="mobile-drawer">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              padding: '8px 0',
              borderBottom: '1px solid rgba(0,0,0,0.04)',
              color: 'var(--text-primary)',
            }}
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#contact" 
          className="btn btn-primary" 
          onClick={() => setIsOpen(false)}
          style={{ marginTop: '20px', padding: '14px' }}
        >
          <Sparkles size={18} />
          Liên hệ ngay
        </a>
      </div>

      {/* Embedded style for responsive toggle */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: block !important;
          }
          nav {
            padding: 16px 0 !important;
          }
        }
      `}</style>
    </nav>
  );
}
