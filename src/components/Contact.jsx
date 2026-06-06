import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    shopName: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormState({
      name: '',
      email: '',
      phone: '',
      shopName: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    {
      name: 'Gmail',
      value: 'vizza.tech.fpt@gmail.com',
      icon: <Mail size={20} />,
      href: 'mailto:vizza.tech.fpt@gmail.com',
      color: '#ea4335',
    },
    {
      name: 'Điện thoại',
      value: '098 765 4321',
      icon: <Phone size={20} />,
      href: 'tel:0987654321',
      color: '#4caf50',
    },
    {
      name: 'Zalo',
      value: '098 765 4321 (Vizza Team)',
      icon: <MessageCircle size={20} />,
      href: 'https://zalo.me/0987654321',
      color: '#0068ff',
    },
    {
      name: 'Facebook',
      value: 'facebook.com/vizza.fpt',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ verticalAlign: 'middle' }}
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      href: 'https://www.facebook.com/profile.php?id=61590382713069',
      color: '#1877f2',
    },
    {
      name: 'TikTok',
      value: 'Vizza- Table Booking',
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ verticalAlign: 'middle' }}
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      ),
      href: 'https://www.tiktok.com/@vizzatablebooking?_r=1&_t=ZS-96yy0hisG0a',
      color: '#333333',
    },
  ];

  return (
    <section id="contact" className="section section-bg-alt">
      <div className="glow-orb glow-orb-primary animate-pulse-slow" style={{ right: '5%' }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Liên Hệ Hợp Tác</span>
          <h2 className="section-title">Kết Nối Với <span className="text-gradient">vizza</span></h2>
          <p className="section-subtitle" style={{ marginTop: '10px' }}>
            Bạn muốn nâng tầm trải nghiệm đặt bàn cho khách hàng của mình? Hãy để lại thông tin hoặc trò chuyện trực tiếp với nhóm qua các kênh liên lạc dưới đây.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '48px', alignItems: 'stretch' }}>
          
          {/* Left Column: Form */}
          <div className="glass-card" style={{
            background: '#ffffff',
            borderColor: 'var(--border)',
            textAlign: 'left',
          }}>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '24px', fontWeight: 700, color: 'var(--text-primary)' }}>
              Đăng Ký Tư Vấn Miễn Phí
            </h3>

            {isSubmitted ? (
              <div style={{
                padding: '40px 20px',
                textAlign: 'center',
                color: 'var(--secondary)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
              }}>
                <CheckCircle size={48} style={{ color: 'var(--secondary)' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>Gửi thông tin thành công!</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '380px' }}>
                  Cảm ơn bạn đã tin tưởng Vizza. Chúng tôi đã nhận được thông tin và sẽ liên hệ lại qua Số điện thoại hoặc Email bạn đã cung cấp sớm nhất.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ marginTop: '12px', fontSize: '0.85rem' }}
                >
                  Gửi yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="grid-2" style={{ gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Họ và tên *</label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="Nguyễn Văn A"
                      style={inputStyle}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Số điện thoại *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      placeholder="0912345678"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="grid-2" style={{ gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Địa chỉ Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="example@gmail.com"
                      style={inputStyle}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Tên quán / Cửa hàng</label>
                    <input
                      type="text"
                      name="shopName"
                      value={formState.shopName}
                      onChange={handleChange}
                      placeholder="Vizza Coffee & Bistro"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Nội dung tin nhắn / Yêu cầu</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Hãy mô tả sơ bộ nhu cầu làm web hoặc mong muốn thiết kế sơ đồ của bạn..."
                    style={{ ...inputStyle, resize: 'vertical' }}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ padding: '14px', width: '100%' }}>
                  Gửi Thông Tin Yêu Cầu
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Info */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'left' }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>
                Liên Hệ Trực Tiếp
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Nếu bạn muốn liên hệ nhanh không cần qua điền biểu mẫu, vui lòng kết nối trực tiếp với nhóm Vizza qua các nền tảng sau:
              </p>

              {/* Social Channels List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '14px 16px',
                      borderRadius: '12px',
                      background: '#ffffff',
                      border: '1.5px solid var(--border)',
                      transition: 'var(--transition)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary)';
                      e.currentTarget.style.background = 'rgba(181, 130, 87, 0.03)';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'rgba(181, 130, 87, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: link.color,
                      flexShrink: 0,
                    }}>
                      {link.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {link.name}
                      </div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {link.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            
          </div>

        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  background: '#ffffff',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  color: 'var(--text-primary)',
  outline: 'none',
  fontSize: '0.88rem',
  transition: 'all 0.3s ease',
  fontFamily: 'var(--font-sans)',
};
