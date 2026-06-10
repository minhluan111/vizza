import React from "react";
import {
  MessageSquare,
  ShieldCheck,
  Milestone,
  CheckCircle2,
} from "lucide-react";

export default function Payment() {
  const steps = [
    {
      step: "BƯỚC 1",
      title: "Trao Đổi & Phác Thảo",
      desc: "Nhóm thảo luận chi tiết với bạn để nắm bắt phong cách của quán (đặc điểm không gian, các khu vực ngồi thực tế). Khảo sát và MIỄN PHÍ tư vấn cùng lên bản thiết kế phác thảo ban đầu.",
      icon: <MessageSquare size={24} style={{ color: "var(--primary)" }} />,
      cost: "Miễn phí tư vấn",
    },
    {
      step: "BƯỚC 2",
      title: "Thống Nhất & Đặt Cọc",
      desc: "Sau khi bạn duyệt bản thiết kế UI/UX sơ bộ và đồng ý hợp tác, hai bên ký kết biên bản thỏa thuận. Quán thực hiện đặt cọc trước một phần chi phí (linh hoạt từ 30% - 50% tùy thảo luận) để tiến hành lập trình.",
      icon: <Milestone size={24} style={{ color: "var(--secondary)" }} />,
      cost: "Đặt cọc linh hoạt (30-50%)",
    },
    {
      step: "BƯỚC 3",
      title: "Nghiệm Thu & Bàn Giao",
      desc: "Chúng tôi hoàn thiện mã nguồn website, chạy thử nghiệm thực tế và hỗ trợ bạn nhập liệu. Khi bạn hoàn toàn hài lòng, quán sẽ thanh toán nốt phần chi phí còn lại và nhận bàn giao toàn bộ mã nguồn.",
      icon: <ShieldCheck size={24} style={{ color: "var(--primary)" }} />,
      cost: "Thanh toán khi bàn giao",
    },
  ];

  return (
    <section id="payment" className="section">
      <div
        className="glow-orb glow-orb-secondary animate-pulse-slow"
        style={{ left: "10%" }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Thanh Toán Linh Hoạt{" "}
            <span className="text-gradient">Theo Thỏa Thuận</span>
          </h2>
          <p className="section-subtitle" style={{ marginTop: "10px" }}>
            Chúng tôi hiểu mỗi doanh nghiệp F&B đều có tiến độ dòng tiền riêng.
            Mọi điều khoản về thanh toán đều được thảo luận thân thiện và điều
            chỉnh linh hoạt theo ý kiến hai bên.
          </p>
        </div>

        {/* Timeline Layout */}
        <div
          style={{
            position: "relative",
            maxWidth: "900px",
            margin: "0 auto",
            padding: "20px 0",
          }}
        >
          {/* Middle Line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "2px",
              background:
                "linear-gradient(to bottom, var(--primary) 0%, var(--secondary) 50%, var(--primary) 100%)",
              transform: "translateX(-50%)",
              opacity: 0.2,
            }}
            className="timeline-line"
          ></div>

          {/* Timeline Nodes */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "48px" }}
          >
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    width: "100%",
                  }}
                  className="timeline-row"
                >
                  {/* Left Column */}
                  <div
                    style={{
                      width: "45%",
                      textAlign: isEven ? "right" : "left",
                      paddingRight: isEven ? "40px" : "0",
                      paddingLeft: isEven ? "0" : "40px",
                      order: isEven ? 1 : 3,
                    }}
                    className="timeline-content-side"
                  >
                    <div
                      className="glass-card"
                      style={{
                        display: "inline-block",
                        textAlign: "left",
                        padding: "24px",
                        background: "#ffffff",
                        borderColor: "var(--border)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "12px",
                          gap: "12px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            color: "var(--primary)",
                            background: "rgba(181, 130, 87, 0.08)",
                            padding: "3px 8px",
                            borderRadius: "4px",
                          }}
                        >
                          {step.step}
                        </span>
                        <span
                          style={{
                            fontSize: "0.8rem",
                            color: "var(--secondary)",
                            fontWeight: 600,
                          }}
                        >
                          {step.cost}
                        </span>
                      </div>
                      <h4
                        style={{
                          fontSize: "1.15rem",
                          marginBottom: "8px",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                        }}
                      >
                        {step.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "0.88rem",
                          color: "var(--text-secondary)",
                          lineHeight: "1.5",
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Middle Circle */}
                  <div
                    style={{
                      width: "10%",
                      display: "flex",
                      justifyContent: "center",
                      zIndex: 2,
                      order: 2,
                    }}
                    className="timeline-center-side"
                  >
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "50%",
                        background: "#ffffff",
                        border: "2px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "var(--shadow-md)",
                        transition: "var(--transition)",
                      }}
                      className="timeline-icon-box"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--primary)";
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div
                    style={{ width: "45%", order: isEven ? 3 : 1 }}
                    className="timeline-empty-side"
                  ></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Policy Guarantee Card */}
        <div
          className="glass-card"
          style={{
            maxWidth: "750px",
            margin: "60px auto 0",
            padding: "24px",
            background:
              "linear-gradient(135deg, rgba(181, 130, 87, 0.05) 0%, rgba(140, 154, 112, 0.05) 100%)",
            borderColor: "var(--border)",
            textAlign: "center",
          }}
        >
          <h4
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "1.05rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "8px",
            }}
          >
            <CheckCircle2 size={18} style={{ color: "var(--secondary)" }} />
            Cam kết đồng hành từ VIZZA Team
          </h4>
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              maxWidth: "620px",
              margin: "0 auto",
            }}
          >
            Chúng tôi đảm bảo chất lượng lập trình, bàn giao đầy đủ mã nguồn và
            hướng dẫn quản trị chi tiết. Đồng hành bảo trì miễn phí trong suốt
            thời gian bảo hành hợp đồng.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line {
            left: 20px !important;
            transform: none !important;
          }
          .timeline-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
          }
          .timeline-content-side {
            width: 100% !important;
            padding-left: 55px !important;
            padding-right: 0 !important;
            text-align: left !important;
            order: 2 !important;
          }
          .timeline-center-side {
            width: auto !important;
            position: absolute !important;
            left: 0 !important;
            top: 24px !important;
            order: 1 !important;
          }
          .timeline-empty-side {
            display: none !important;
          }
          .timeline-icon-box {
            width: 40px !important;
            height: 40px !important;
          }
          .timeline-icon-box svg {
            width: 18px !important;
            height: 18px !important;
          }
        }
      `}</style>
    </section>
  );
}
