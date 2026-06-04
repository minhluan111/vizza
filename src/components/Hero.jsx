import React from 'react';
import { ArrowRight, Sparkles, MapPin, Check } from 'lucide-react';

export default function Hero() {
  return (
    <section className="section" style={{
      paddingTop: '160px',
      paddingBottom: '100px',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Background glow orbs */}
      <div className="glow-orb glow-orb-primary animate-pulse-slow"></div>
      <div className="glow-orb glow-orb-secondary animate-pulse-slow" style={{ animationDelay: '4s' }}></div>

      <div className="container relative" style={{ zIndex: 10 }}>
        <div className="grid-2" style={{ alignItems: 'center' }}>
          {/* Left Column: Headline and Call to Actions */}
          <div style={{ textAlign: 'left' }}>
            <span className="badge">
              <Sparkles size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
              Dự Án Công Nghệ FPT University
            </span>
            <h1 style={{
              fontSize: 'clamp(2.3rem, 4.5vw, 3.8rem)',
              lineHeight: 1.15,
              marginBottom: '24px',
              fontWeight: 800,
              letterSpacing: '-1.5px',
              color: 'var(--text-primary)',
            }}>
              Nâng Tầm Trải Nghiệm <br />
              Với Website <span className="text-gradient">Đặt Bàn Qua Ảnh Không Gian</span>
            </h1>
            <p style={{
              fontSize: '1.15rem',
              color: 'var(--text-secondary)',
              marginBottom: '36px',
              maxWidth: '540px',
              lineHeight: '1.6',
            }}>
              vizza thiết kế website cao cấp cho nhà hàng và quán cafe. Tích hợp tính năng đặt bàn trực quan qua hình ảnh không gian thực tế, mang lại cảm giác thân thiện, gần gũi và nâng tầm thương hiệu của bạn.
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '40px',
            }}>
              <a href="#services" className="btn btn-primary">
                Trải nghiệm Chọn Không Gian
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Nhận tư vấn thiết kế
              </a>
            </div>

            {/* Value Props */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              borderTop: '1px solid var(--border)',
              paddingTop: '24px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  background: 'rgba(140, 154, 112, 0.15)',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--secondary)'
                }}>
                  <Check size={12} />
                </div>
                <span>Chọn góc ngồi yêu thích</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  background: 'rgba(140, 154, 112, 0.15)',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--secondary)'
                }}>
                  <Check size={12} />
                </div>
                <span>Thiết kế tối giản, ấm cúng</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  background: 'rgba(140, 154, 112, 0.15)',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--secondary)'
                }}>
                  <Check size={12} />
                </div>
                <span>Tối ưu hóa doanh số F&B</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Preview of Space Selector */}
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {/* Main Mockup Container */}
            <div className="glass-card" style={{
              width: '100%',
              maxWidth: '460px',
              padding: '20px',
              borderRadius: '24px',
              border: '1px solid var(--border)',
              background: '#ffffff',
              boxShadow: '0 20px 48px rgba(181, 130, 87, 0.12), inset 0 1px 0 rgba(255,255,255,0.6)',
              position: 'relative',
            }}>
              {/* Header of the mock app */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px',
                borderBottom: '1px solid var(--border)',
                paddingBottom: '12px',
              }}>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Lạc House Cafe</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                    <MapPin size={11} style={{ color: 'var(--primary)' }} /> Hoàng Hoa Thám, Hà Nội
                  </p>
                </div>
                <div style={{
                  background: 'rgba(140, 154, 112, 0.12)',
                  color: 'var(--secondary)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '3px 8px',
                  borderRadius: '12px',
                  border: '1.5px solid rgba(140, 154, 112, 0.2)',
                }}>
                  Hình ảnh trực quan
                </div>
              </div>

              {/* Spatial Image Mock (Visual graphic) */}
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
                aspectRatio: '16/10',
                border: '1px solid var(--border)',
              }}>
                <img
                  src="/images/window_zone.png"
                  alt="Window zone preview"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                
                {/* Visual hotspot tags representing tables */}
                <div style={{
                  position: 'absolute',
                  top: '35%',
                  left: '25%',
                  background: 'rgba(140, 154, 112, 0.9)',
                  color: '#fff',
                  fontSize: '0.65rem',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  fontWeight: 600,
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#fff', display: 'inline-block' }}></span>
                  Bàn W1 (2 chỗ)
                </div>

                <div style={{
                  position: 'absolute',
                  top: '55%',
                  left: '60%',
                  background: 'rgba(181, 130, 87, 0.9)',
                  color: '#fff',
                  fontSize: '0.65rem',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  fontWeight: 600,
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#fff', display: 'inline-block' }}></span>
                  Bàn W2 (2 chỗ)
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  background: 'rgba(0,0,0,0.5)',
                  color: '#fff',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  fontSize: '0.7rem',
                  backdropFilter: 'blur(4px)',
                }}>
                  🌅 Khu Bên Cửa Sổ
                </div>
              </div>

              {/* Bottom selection details */}
              <div style={{
                marginTop: '12px',
                background: '#faf8f5',
                borderRadius: '12px',
                padding: '10px 14px',
                border: '1px solid var(--border)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Khu vực đang chọn:</span>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--secondary)' }}>Bàn W1 (Còn trống)</div>
                </div>
                <button style={{
                  background: 'var(--primary)',
                  border: 'none',
                  color: '#ffffff',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                }}>
                  Đặt Bàn
                </button>
              </div>
            </div>

            {/* Glowing effect under mockup */}
            <div style={{
              position: 'absolute',
              width: '80%',
              height: '80%',
              background: 'radial-gradient(circle, rgba(181, 130, 87, 0.1) 0%, transparent 70%)',
              top: '10%',
              left: '10%',
              zIndex: -1,
              filter: 'blur(30px)',
            }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
