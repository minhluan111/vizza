import { Mail, Phone } from "lucide-react";
import logo from "../assets/logo.png";

export default function Contact() {
  const socialLinks = [
    {
      name: "Gmail",
      value: "vizza275@gmail.com",
      icon: <Mail size={20} />,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=vizza275@gmail.com",
      color: "#ea4335",
    },
    {
      name: "Facebook",
      value: "Vizza - Table Booking",
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
          style={{ verticalAlign: "middle" }}
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      href: "https://www.facebook.com/profile.php?id=61590382713069",
      color: "#1877f2",
    },
    {
      name: "TikTok",
      value: "Vizza - Table Booking",
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
          style={{ verticalAlign: "middle" }}
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      ),
      href: "https://www.tiktok.com/@vizzatablebooking?_r=1&_t=ZS-96yy0hisG0a",
      color: "#000000",
    },
    {
      name: "Hotline 1",
      value: "0949 825 507",
      icon: <Phone size={20} />,
      href: "tel:0949825507",
      color: "#22c55e",
    },
    {
      name: "Hotline 2",
      value: "0869 862 152",
      icon: <Phone size={20} />,
      href: "tel:0869862152",
      color: "#22c55e",
    },
  ];

  return (
    <section id="contact" className="section section-bg-alt">
      <div
        className="glow-orb glow-orb-primary animate-pulse-slow"
        style={{ right: "5%" }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Liên Hệ Hợp Tác</span>
          <h2 className="section-title">
            Kết Nối Với <span className="text-gradient">vizza</span>
          </h2>
          <p className="section-subtitle" style={{ marginTop: "10px" }}>
            Bạn muốn nâng tầm trải nghiệm đặt bàn cho khách hàng của mình? Hãy
            để lại thông tin hoặc trò chuyện trực tiếp với nhóm qua các kênh
            liên lạc dưới đây.
          </p>
        </div>

        <div className="grid-2" style={{ gap: "48px", alignItems: "stretch" }}>
          {/* Left Column: Image */}
          <div
            className="glass-card"
            style={{
              background: "#ffffff",
              borderColor: "var(--border)",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "32px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "1px",
                color: "var(--secondary)",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Vizza Partner
            </div>
            <img
              src={logo}
              alt="Vizza logo"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "480px",
                objectFit: "contain",
                filter: "drop-shadow(0 12px 30px rgba(181, 130, 87, 0.18))",
              }}
            />
          </div>

          {/* Right Column: Direct Info */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "left",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1.35rem",
                  marginBottom: "16px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                Liên Hệ Trực Tiếp
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  marginBottom: "32px",
                  fontSize: "0.92rem",
                  lineHeight: "1.6",
                }}
              >
                Nếu bạn muốn liên hệ nhanh không cần qua điền biểu mẫu, vui lòng
                kết nối trực tiếp với nhóm Vizza qua các nền tảng sau:
              </p>

              {/* Social Channels List */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "14px 16px",
                      borderRadius: "12px",
                      background: "#ffffff",
                      border: "1.5px solid var(--border)",
                      transition: "var(--transition)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--primary)";
                      e.currentTarget.style.background =
                        "rgba(181, 130, 87, 0.03)";
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.background = "#ffffff";
                      e.currentTarget.style.transform = "none";
                    }}
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        background: "rgba(181, 130, 87, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: link.color,
                        flexShrink: 0,
                      }}
                    >
                      {link.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {link.name}
                      </div>
                      <div
                        style={{
                          fontSize: "0.92rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                        }}
                      >
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
