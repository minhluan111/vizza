import React from "react";
import { Check, ArrowRight } from "lucide-react";

export default function Pricing() {
  const tiers = [
    // {
    //   name: "GÓI STARTER",
    //   price: "3.500.000 đ",
    //   period: "trọn gói",
    //   desc: "Phù hợp cho các quán cafe nhỏ, tiệm bánh hoặc quán ăn gia đình cần menu online và cổng thông tin cơ bản.",
    //   features: [
    //     "Thiết kế chuẩn Responsive (Đẹp trên mobile & máy tính)",
    //     "Thực đơn điện tử trực quan (E-Menu) thân thiện",
    //     "Thông tin liên hệ, giờ mở cửa & định vị Google Maps",
    //     "Biểu mẫu đặt chỗ gửi thông tin trực tiếp về email",
    //     "Tối ưu hóa tốc độ tải trang & SEO tiêu chuẩn",
    //     "Hỗ trợ kỹ thuật và bảo hành hệ thống 3 tháng",
    //   ],
    //   cta: "Bắt đầu ngay",
    //   popular: false,
    //   accent: "var(--primary)",
    // },
    {
      name: "GÓI PROFESSIONAL",
      price: "5.000.000 đ",
      period: "trọn gói",
      desc: "Giải pháp đặt bàn chuyên nghiệp giúp nhà hàng tối ưu vận hành và nâng cao trải nghiệm khách hàng.",
      features: [
        "Bàn giao website hoàn chỉnh ngay sau khi thanh toán",
        "Website đặt bàn trực quan với hình ảnh thực tế",
        "Tích hợp menu, giá cả và đánh giá món ăn",
        "Cập nhật trạng thái bàn theo thời gian thực (Real-time)",
        "Giao diện tối ưu cho cả điện thoại và máy tính",
        "Bàn giao đầy đủ mã nguồn và hướng dẫn sử dụng",
        "Hỗ trợ & sửa lỗi kỹ thuật trong 3 tháng",
        "Hỗ trợ vận hành và sử dụng hệ thống",
        "Tư vấn tối ưu trải nghiệm người dùng cơ bản",
        "Các yêu cầu phát triển thêm tính năng mới sẽ được báo giá riêng",
      ],
      popular: true,
    },
    // {
    //   name: "GÓI ENTERPRISE",
    //   price: "Thương lượng",
    //   period: "theo dự án",
    //   desc: "Hệ thống tùy biến cao cấp cho chuỗi quán ăn, nhà hàng cần tích hợp hệ thống POS và thanh toán online.",
    //   features: [
    //     "Thiết kế độc quyền UI/UX hoàn toàn theo định vị thương hiệu",
    //     "Sơ đồ không gian động tùy biến (Tự vẽ sơ đồ bàn trong Admin)",
    //     "Tích hợp Cổng thanh toán (Momo, VNPAY, Chuyển khoản QR)",
    //     "Kết nối dữ liệu thời gian thực với phần mềm POS tại quán",
    //     "Phân quyền nhân viên (Thu ngân, Quản lý, Phục vụ)",
    //     "Bảo trì, vận hành máy chủ và sao lưu dữ liệu trọn đời",
    //     "Hệ thống khách hàng thân thiết (Loyalty Points)",
    //   ],
    // cta: "Liên hệ thảo luận",
    // popular: false,
    // accent: "var(--primary)",
    //   },
  ];

  return (
    <section id="pricing" className="section section-bg-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-cyan"> Dịch Vụ</span>
          <h2 className="section-title">
            Chi Phí Đầu Tư{" "}
            <span className="text-gradient">Hợp Lý & Tiết Kiệm</span>
          </h2>
          <p className="section-subtitle" style={{ marginTop: "10px" }}>
            Chúng tôi thiết lập các gói dịch vụ với chi phí cạnh tranh nhất,
            giúp quán cafe/nhà hàng của bạn nhanh chóng sở hữu website chuyên
            nghiệp.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div>
          {tiers.map((tier, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "40px 24px",
                border: tier.popular
                  ? "2px solid var(--primary)"
                  : "1px solid var(--border)",
                background: "#ffffff",
                boxShadow: tier.popular
                  ? "var(--shadow-glow)"
                  : "var(--shadow-md)",
              }}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: "-14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--primary)",
                    color: "#fff",
                    padding: "4px 18px",
                    borderRadius: "var(--radius-round)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    boxShadow: "0 4px 10px rgba(181, 130, 87, 0.25)",
                  }}
                >
                  PHỔ BIẾN NHẤT
                </div>
              )}

              {/* Top details */}
              <div>
                <h4
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    color: tier.accent,
                    marginBottom: "16px",
                  }}
                >
                  {tier.name}
                </h4>

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "8px",
                    marginBottom: "16px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                    }}
                  >
                    {tier.price}
                  </span>
                  <span
                    style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}
                  >
                    / {tier.period}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    marginBottom: "10px",
                    lineHeight: "1.5",
                    minHeight: "1px",
                  }}
                >
                  {tier.desc}
                </p>

                {/* Features List */}
                <div
                  style={{
                    borderTop: "1px solid rgba(181, 130, 87, 0.1)",
                    paddingTop: "24px",
                    marginBottom: "32px",
                    textAlign: "left",
                  }}
                >
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                    }}
                  >
                    {tier.features.map((feat, fIndex) => (
                      <li
                        key={fIndex}
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "flex-start",
                          fontSize: "0.9rem",
                        }}
                      >
                        <div
                          style={{
                            background: "rgba(181, 130, 87, 0.08)",
                            borderRadius: "50%",
                            width: "18px",
                            height: "18px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: tier.popular
                              ? "var(--secondary)"
                              : "var(--primary)",
                            marginTop: "2px",
                            flexShrink: 0,
                          }}
                        >
                          <Check size={12} />
                        </div>
                        <span
                          style={{
                            color: "var(--text-secondary)",
                            lineHeight: "1.4",
                          }}
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA button */}
              <a
                href="#contact"
                className={`btn ${tier.popular ? "btn-primary" : "btn-secondary"}`}
                style={{ width: "100%", padding: "12px" }}
              >
                {tier.cta}
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
