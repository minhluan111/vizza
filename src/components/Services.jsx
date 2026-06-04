import React, { useState } from 'react';
import { Sparkles, AlertCircle, CheckCircle2, MapPin, Coffee, Eye } from 'lucide-react';

export default function Services() {
  // Spatial Zones Data
  const zones = [
    {
      id: 'window',
      name: 'Khu Bên Cửa Sổ',
      desc: 'Thích hợp đọc sách, làm việc cá nhân hoặc hẹn hò lãng mạn. Đón ánh sáng tự nhiên dịu nhẹ ban sáng và ngắm nhìn phố phường yên tĩnh.',
      image: '/images/window_zone.png',
      tables: [
        { id: 'W1', name: 'Bàn Window 1', size: 2, status: 'available' },
        { id: 'W2', name: 'Bàn Window 2', size: 2, status: 'available' },
        { id: 'W3', name: 'Bàn Window 3', size: 4, status: 'occupied' },
        { id: 'W4', name: 'Bàn Window 4', size: 2, status: 'available' },
      ]
    },
    {
      id: 'garden',
      name: 'Khu Sân Vườn',
      desc: 'Không gian mở thoáng đãng, bao quanh bởi cây xanh mát mẻ. Phù hợp cho những ai yêu thích không khí trong lành, mát mẻ tự nhiên.',
      image: '/images/garden_zone.png',
      tables: [
        { id: 'G1', name: 'Bàn Garden 1', size: 4, status: 'available' },
        { id: 'G2', name: 'Bàn Garden 2', size: 6, status: 'available' },
        { id: 'G3', name: 'Bàn Garden 3', size: 4, status: 'occupied' },
        { id: 'G4', name: 'Bàn Garden 4', size: 2, status: 'available' },
      ]
    },
    {
      id: 'cozy',
      name: 'Trong Nhà Ấm Cúng',
      desc: 'Ánh đèn vàng dịu nhẹ, ghế sofa êm ái cùng nhạc acoustic du dương. Không gian lý tưởng để trò chuyện sâu sắc cùng bạn bè và người thân.',
      image: '/images/cozy_zone.png',
      tables: [
        { id: 'L1', name: 'Bàn Lounge 1', size: 2, status: 'available' },
        { id: 'L2', name: 'Bàn Lounge 2', size: 4, status: 'available' },
        { id: 'L3', name: 'Bàn Lounge 3', size: 8, status: 'occupied' },
        { id: 'L4', name: 'Bàn Lounge 4', size: 4, status: 'available' },
      ]
    },
    {
      id: 'vip',
      name: 'Phòng VIP Riêng Tư',
      desc: 'Phòng kính cách âm yên tĩnh tuyệt đối, trang bị ổ cắm tiện lợi và máy chiếu. Thích hợp cho các buổi họp nhóm, làm việc chung hoặc tiếp đối tác.',
      image: '/images/vip_zone.png',
      tables: [
        { id: 'V1', name: 'Bàn VIP 1', size: 6, status: 'available' },
        { id: 'V2', name: 'Bàn VIP 2', size: 8, status: 'available' },
        { id: 'V3', name: 'Bàn VIP 3', size: 4, status: 'available' },
        { id: 'V4', name: 'Bàn VIP 4', size: 6, status: 'occupied' },
      ]
    }
  ];

  // States
  const [activeZoneId, setActiveZoneId] = useState('window');
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedTime, setSelectedTime] = useState('19:00');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const activeZone = zones.find(z => z.id === activeZoneId);

  const handleZoneChange = (zoneId) => {
    setActiveZoneId(zoneId);
    setSelectedTable(null); // Clear selected table when changing zone
    setBookingSuccess(false);
  };

  const handleTableClick = (table) => {
    if (table.status === 'occupied') return;
    setSelectedTable(selectedTable?.id === table.id ? null : table);
    setBookingSuccess(false);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!selectedTable) return;
    if (!customerName || !customerPhone) {
      alert('Vui lòng nhập đầy đủ thông tin!');
      return;
    }
    setBookingSuccess(true);
  };

  const timeSlots = ['08:00', '10:00', '14:00', '16:00', '19:00', '21:00'];

  return (
    <section id="services" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Trải Nghiệm Dịch Vụ</span>
          <h2 className="section-title">Chọn Vị Trí Theo <span className="text-gradient">Không Gian Thực Tế</span></h2>
          <p className="section-subtitle" style={{ marginTop: '10px' }}>
            Không còn đặt bàn mơ hồ. Chúng tôi cung cấp giải pháp đặt bàn tương tác qua hình ảnh thực tế, giúp khách hàng chọn đúng góc ngồi ưng ý nhất.
          </p>
        </div>

        {/* Feature Cards Grid (Compact & Minimalist) */}
        <div className="grid-3" style={{ marginBottom: '60px', gap: '24px' }}>
          <div className="glass-card" style={{ padding: '24px', textAlign: 'left', background: '#fff' }}>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--primary)', fontWeight: 700 }}>
              Không Gian Sinh Động
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Giúp khách hàng hình dung rõ nét góc view, ánh sáng và kiểu ghế ngồi thông qua ảnh chụp thực tế từng ngóc ngách của quán.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '24px', textAlign: 'left', background: '#fff' }}>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--secondary)', fontWeight: 700 }}>
              Tiết Kiệm Thời Gian
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Nhân viên không cần tư vấn dài dòng qua điện thoại về vị trí bàn. Mọi thông tin trực quan đều hiển thị rõ ràng trên màn hình.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '24px', textAlign: 'left', background: '#fff' }}>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--primary)', fontWeight: 700 }}>
              Tăng Trải Nghiệm Khách
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Khách hàng cảm thấy an tâm và hào hứng hơn khi biết chính xác bàn mình sẽ ngồi có view đẹp hay yên tĩnh như thế nào trước khi tới.
            </p>
          </div>
        </div>

        {/* Widget Banner */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
            <Coffee size={20} style={{ color: 'var(--primary)' }} />
            Ứng Dụng Đặt Bàn Trực Quan 
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '6px', fontSize: '0.95rem' }}>
            Hãy click chọn các khu vực dưới đây để ngắm nhìn hình ảnh thực tế và chọn bàn trống.
          </p>
        </div>

        {/* Interactive Booking Experience Widget */}
        <div className="glass-card" style={{
          background: '#ffffff',
          borderRadius: '24px',
          padding: '32px',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--border)',
        }}>
          
          {/* Spatial Tabs Menu */}
          <div style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '32px',
            overflowX: 'auto',
            paddingBottom: '8px',
            borderBottom: '1px solid rgba(181, 130, 87, 0.1)',
          }} className="tabs-container">
            {zones.map((zone) => (
              <button
                key={zone.id}
                onClick={() => handleZoneChange(zone.id)}
                style={{
                  background: activeZoneId === zone.id ? 'var(--primary)' : 'transparent',
                  border: activeZoneId === zone.id ? '1px solid var(--primary)' : '1px solid var(--border)',
                  color: activeZoneId === zone.id ? '#fff' : 'var(--text-secondary)',
                  borderRadius: 'var(--radius-round)',
                  padding: '8px 20px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'var(--transition)',
                }}
              >
                {zone.name}
              </button>
            ))}
          </div>

          {/* Core Widget Grid */}
          <div className="grid-2" style={{ gap: '40px', alignItems: 'start' }}>
            
            {/* Left Column: Image & Seating List */}
            <div>
              {/* Spatial Area Image Container */}
              <div style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                marginBottom: '20px',
                border: '1px solid var(--border)',
                aspectRatio: '16/10',
              }}>
                <img
                  src={activeZone.image}
                  alt={activeZone.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)',
                  padding: '20px',
                  color: '#fff',
                  textAlign: 'left',
                }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={18} style={{ color: 'var(--tertiary)' }} />
                    {activeZone.name}
                  </h4>
                  <p style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '4px', lineHeight: '1.4' }}>
                    {activeZone.desc}
                  </p>
                </div>
              </div>

              {/* Seating Cards for the Active Space */}
              <div style={{ textAlign: 'left' }}>
                <h5 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>
                  Danh sách bàn trong khu vực này:
                </h5>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '12px',
                }}>
                  {activeZone.tables.map((table) => {
                    const isSelected = selectedTable?.id === table.id;
                    const isOccupied = table.status === 'occupied';

                    let bg = '#faf8f5';
                    let borderColor = 'var(--border)';
                    let textColor = 'var(--text-primary)';

                    if (isOccupied) {
                      bg = '#f2eee6';
                      borderColor = 'rgba(0,0,0,0.04)';
                      textColor = 'var(--text-muted)';
                    } else if (isSelected) {
                      bg = 'rgba(140, 154, 112, 0.15)';
                      borderColor = 'var(--secondary)';
                      textColor = 'var(--secondary)';
                    }

                    return (
                      <div
                        key={table.id}
                        onClick={() => handleTableClick(table)}
                        style={{
                          background: bg,
                          border: `1.5px solid ${borderColor}`,
                          borderRadius: '12px',
                          padding: '14px 16px',
                          cursor: isOccupied ? 'not-allowed' : 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          transition: 'var(--transition)',
                          opacity: isOccupied ? 0.75 : 1,
                        }}
                        onMouseEnter={(e) => {
                          if (!isOccupied && !isSelected) {
                            e.currentTarget.style.borderColor = 'var(--primary)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isOccupied && !isSelected) {
                            e.currentTarget.style.borderColor = 'var(--border)';
                            e.currentTarget.style.transform = 'none';
                          }
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: textColor }}>
                            {table.name}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                            Sức chứa: {table.size} ghế
                          </div>
                        </div>

                        {isOccupied ? (
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', background: 'rgba(0,0,0,0.05)', padding: '2px 8px', borderRadius: '4px' }}>
                            Đã đặt
                          </span>
                        ) : isSelected ? (
                          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--secondary)', background: 'rgba(140,154,112,0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                            Đang chọn
                          </span>
                        ) : (
                          <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 500 }}>
                            Trống
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Time Selection & Information Form */}
            <div style={{
              background: '#faf8f5',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '24px',
              textAlign: 'left',
            }}>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>
                Thông Tin Đăng Ký Đặt
              </h4>

              {/* Time Picker */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
                  Chọn Giờ Đến:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => {
                        setSelectedTime(time);
                        setBookingSuccess(false);
                      }}
                      style={{
                        background: selectedTime === time ? 'var(--primary)' : '#fff',
                        border: selectedTime === time ? '1px solid var(--primary)' : '1px solid var(--border)',
                        color: selectedTime === time ? '#fff' : 'var(--text-secondary)',
                        borderRadius: '8px',
                        padding: '8px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'var(--transition)',
                      }}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected table display */}
              <div style={{
                background: '#ffffff',
                border: '1.5px dashed var(--border)',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '20px',
              }}>
                {selectedTable ? (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Khu vực:</span>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)' }}>{activeZone.name}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Bàn chọn:</span>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>{selectedTable.name}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Thời gian:</span>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--secondary)' }}>{selectedTime}</span>
                    </div>
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', py: '6px' }}>
                    <AlertCircle size={14} />
                    Vui lòng chọn 1 bàn bên sơ đồ
                  </div>
                )}
              </div>

              {/* Booking Submission Form */}
              {selectedTable && (
                <form onSubmit={handleBookingSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <input
                      type="text"
                      placeholder="Họ tên của bạn"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      required
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Số điện thoại liên lạc"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      required
                      style={inputStyle}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-accent"
                    style={{
                      padding: '10px',
                      width: '100%',
                      fontSize: '0.9rem',
                      borderRadius: '8px',
                      marginTop: '8px',
                    }}
                  >
                    Xác Nhận Đặt Chỗ (Demo)
                  </button>
                </form>
              )}

              {/* Booking Success Toast */}
              {bookingSuccess && (
                <div style={{
                  marginTop: '16px',
                  padding: '16px',
                  background: 'rgba(140, 154, 112, 0.1)',
                  border: '1px solid rgba(140, 154, 112, 0.3)',
                  borderRadius: '12px',
                  color: '#556633',
                  textAlign: 'center',
                }}>
                  <CheckCircle2 size={24} style={{ margin: '0 auto 6px', display: 'block', color: 'var(--secondary)' }} />
                  <h5 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '2px' }}>Đăng ký thành công!</h5>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                    {selectedTable.name} ({activeZone.name}) lúc {selectedTime} đã được đặt thử nghiệm thành công cho bạn. Giao diện demo hoạt động đúng luồng!
                  </p>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  background: '#ffffff',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  color: 'var(--text-primary)',
  outline: 'none',
  fontSize: '0.85rem',
  fontFamily: 'var(--font-sans)',
};
