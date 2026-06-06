import React from 'react';
import { Award, Users, BookOpen, Heart, Code, Terminal, Palette, ShieldCheck, Cpu, HardDrive, Briefcase, Search, Megaphone } from 'lucide-react';

export default function AboutUs() {
  const members = [
    {
      name: 'Võ Ngọc Kim Khánh',
      role: 'Leader - Tìm kiếm khách hàng',
      desc: 'Quản lý dự án, điều phối công việc, định hướng chiến lược và chịu trách nhiệm tiếp cận, phát triển tệp khách hàng tiềm năng.',
      icon: <Briefcase size={24} style={{ color: 'var(--primary)' }} />,
    },
    {
      name: 'Trần Thị Thanh Ngọc',
      role: 'Nghiên cứu thị trường',
      desc: 'Khảo sát nhu cầu thị trường, phân tích đối thủ cạnh tranh và nghiên cứu hành vi người dùng để định hình các tính năng tối ưu.',
      icon: <Search size={24} style={{ color: 'var(--secondary)' }} />,
    },
    {
      name: 'Vũ Vân Anh',
      role: 'Marketing',
      desc: 'Lên kế hoạch quảng bá thương hiệu, xây dựng nội dung truyền thông và phát triển chiến dịch tiếp thị tiếp cận đối tác.',
      icon: <Megaphone size={24} style={{ color: 'var(--primary)' }} />,
    },
    {
      name: 'Đào Huy Hoàng',
      role: 'Frontend Developer',
      desc: 'Phụ trách lập trình giao diện người dùng tối giản, tương tác mượt mà và tối ưu hóa SEO vượt trội cho toàn hệ thống.',
      icon: <Code size={24} style={{ color: 'var(--secondary)' }} />,
    },
    {
      name: 'Quản Minh Luân',
      role: 'Frontend Developer',
      desc: 'Thiết kế sơ đồ bàn trực quan, tối ưu trải nghiệm đặt chỗ thực tế và đảm bảo website hoạt động ổn định trên mọi thiết bị.',
      icon: <Palette size={24} style={{ color: 'var(--primary)' }} />,
    },
    {
      name: 'Trần Nguyên Minh Thiên',
      role: 'Backend Developer',
      desc: 'Thiết lập cơ sở dữ liệu, đồng bộ hóa hóa đơn đặt chỗ theo thời gian thực và vận hành hạ tầng cloud bảo mật ổn định.',
      icon: <Cpu size={24} style={{ color: 'var(--secondary)' }} />,
    },
  ];

  return (
    <section id="about" className="section section-bg-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-cyan">Chúng tôi là ai?</span>
          <h2 className="section-title">Câu Chuyện Về <span className="text-gradient">vizza</span></h2>
          <p className="section-subtitle" style={{ marginTop: '10px' }}>
            Xuất phát từ một bài tập lớn tại Đại học FPT, 6 sinh viên chúng tôi đã hội tụ cùng mong muốn chuyển đổi số cho các nhà hàng & quán cafe bằng công nghệ đặt chỗ trực quan thân thiện.
          </p>
        </div>

        {/* Intro Grid */}
        <div className="grid-2" style={{ marginBottom: '80px', alignItems: 'center', textAlign: 'left' }}>
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>
              Khởi Đầu Từ Sự Thấu Hiểu Cửa Hàng
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '0.98rem' }}>
              Tại Đại học FPT, chúng tôi nhận thấy các quán cafe và nhà hàng tại Việt Nam thường mất nhiều thời gian tư vấn qua điện thoại khi khách muốn chọn bàn gần cửa sổ, bàn yên tĩnh hay bàn ngoài vườn. Cách đặt bàn cũ không giúp khách hình dung rõ ràng không gian thực tế.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem' }}>
              **vizza** ra đời như một câu trả lời. Chúng tôi mang đến giải pháp thiết kế website tối giản kết hợp công nghệ **Đặt chỗ qua hình ảnh không gian thực tế**. Sự gần gũi, ấm cúng trong thiết kế sẽ giúp thương hiệu của bạn chạm tới cảm xúc khách hàng ngay từ lần truy cập đầu tiên.
            </p>
          </div>

          {/* Stats / Highlight Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
          }}>
            <div className="glass-card" style={{ padding: '24px', textAlign: 'center', background: '#ffffff', border: '1px solid var(--border)' }}>
              <Users size={32} style={{ color: 'var(--primary)', marginBottom: '12px' }} />
              <h4 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>6</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>Thành viên sáng lập</p>
            </div>
            <div className="glass-card" style={{ padding: '24px', textAlign: 'center', background: '#ffffff', border: '1px solid var(--border)' }}>
              <BookOpen size={32} style={{ color: 'var(--secondary)', marginBottom: '12px' }} />
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>FPT Uni</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>Cốt lõi học thuật</p>
            </div>
            <div className="glass-card" style={{ padding: '24px', textAlign: 'center', background: '#ffffff', border: '1px solid var(--border)' }}>
              <Heart size={32} style={{ color: 'var(--primary)', marginBottom: '12px' }} />
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>Thân thiện</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>Giao diện gần gũi</p>
            </div>
            <div className="glass-card" style={{ padding: '24px', textAlign: 'center', background: '#ffffff', border: '1px solid var(--border)' }}>
              <Award size={32} style={{ color: 'var(--secondary)', marginBottom: '12px' }} />
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>Tận tâm</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>Đồng hành lâu dài</p>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <h3 style={{
          fontSize: '1.8rem',
          textAlign: 'center',
          marginBottom: '40px',
          fontWeight: 700,
          color: 'var(--text-primary)'
        }}>
          Đội Ngũ Phát Triển
        </h3>
        
        <div className="grid-3">
          {members.map((member, index) => (
            <div key={index} className="glass-card" style={{
              background: '#ffffff',
              border: '1px solid var(--border)',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div>
                {/* Icon Circle */}
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(181, 130, 87, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  {member.icon}
                </div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '6px', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {member.name}
                </h4>
                <div style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--secondary)',
                  marginBottom: '16px',
                }}>
                  {member.role}
                </div>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                }}>
                  {member.desc}
                </p>
              </div>

              {/* Ready to connect indicator */}
              <div style={{
                marginTop: '24px',
                paddingTop: '16px',
                borderTop: '1px solid var(--border)',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{
                  display: 'inline-block',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--secondary)'
                }}></span>
                Sẵn sàng kết nối & trao đổi
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
