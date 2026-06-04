import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: '#f0ede6',
      borderTop: '1px solid var(--border)',
      padding: '40px 0',
      color: 'var(--text-secondary)',
      fontSize: '0.9rem',
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        textAlign: 'center',
      }}>
        {/* Logo */}
        <a href="#" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: 800,
          fontSize: '1.5rem',
          fontFamily: 'var(--font-heading)',
          letterSpacing: '-1.0px',
        }}>
          <span style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
            borderRadius: '8px',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: '1.1rem',
          }}>
            V
          </span>
          <span className="text-gradient">vizza</span>
        </a>

        {/* Short description */}
        <p style={{ maxWidth: '600px', lineHeight: '1.6', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          Dự án website giới thiệu thương hiệu và giải pháp chọn bàn trực quan qua ảnh thực tế được phát triển bởi nhóm 6 sinh viên đam mê công nghệ tại Đại học FPT.
        </p>

        {/* Quick links */}
        <div style={{
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          fontSize: '0.85rem',
        }}>
          <a href="#about" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Về Vizza</a>
          <a href="#services" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Dịch vụ</a>
          <a href="#pricing" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Bảng giá</a>
          <a href="#payment" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Thanh toán</a>
          <a href="#contact" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Liên hệ</a>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '20px',
          width: '100%',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }} className="footer-bottom">
          <span>&copy; {currentYear} Vizza Team. Bảo lưu mọi quyền.</span>
          <span>Made with ☕ and ❤️ by FPT University Students</span>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 600px) {
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
