import React from "react";
import GlassCard from "./GlassCard";

export default function ResumeTemplatePage({ pdfUrl, isMobile }) {
  return (
    <div style={{ position: "relative", zIndex: 10 }}>
      {/* ① Hero */}
      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: isMobile ? "100px 16px 40px" : "120px 24px 60px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 20px",
            fontSize: 13,
            fontWeight: 600,
            color: "#00f5ff",
            background: "rgba(0,245,255,0.1)",
            border: "1px solid rgba(0,245,255,0.2)",
            borderRadius: 999,
            marginBottom: 28,
            letterSpacing: "0.1em",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#00f5ff",
              boxShadow: "0 0 10px #00f5ff",
            }}
          />
          RESUME TEMPLATE
        </div>
        <h1
          style={{
            fontSize: isMobile ? 32 : 56,
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: 20,
            color: "#fff",
          }}
        >
          简历模板
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 560,
            margin: "0 auto",
            lineHeight: 1.8,
          }}
        >
          为学员提供专业的简历修改，面试指导，助力求职之路
        </p>
      </section>

      {/* ② PDF 预览区 */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: isMobile ? "0 16px" : "0 24px",
        }}
      >
        <GlassCard
          hoverable={false}
          glowColor="cyan"
          style={{ padding: isMobile ? "16px" : "24px" }}
        >
          {/* 提示条 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 13,
              color: "rgba(255,255,255,0.45)",
              paddingBottom: isMobile ? 12 : 16,
              marginBottom: isMobile ? 12 : 16,
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <span>📄</span>
            <span>简历模板.pdf · 可在线预览和下载</span>
          </div>

          {/* PDF iframe */}
          <iframe
            src={pdfUrl}
            title="简历模板预览"
            style={{
              width: "100%",
              height: isMobile ? "55vh" : "72vh",
              border: "none",
              borderRadius: 12,
              background: "#1a1a2e",
              display: "block",
            }}
          />
        </GlassCard>
      </section>

      {/* ③ 下载按钮 */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: isMobile ? "32px 16px 80px" : "48px 24px 100px",
          textAlign: "center",
        }}
      >
        <a
          href={pdfUrl}
          download="简历模板.pdf"
          style={{
            display: "inline-block",
            padding: isMobile ? "14px 40px" : "14px 48px",
            fontSize: 16,
            fontWeight: 600,
            color: "#050510",
            background: "linear-gradient(135deg, #00f5ff, #00d4ff)",
            borderRadius: 12,
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            boxShadow:
              "0 0 40px rgba(0,245,255,0.3), 0 8px 32px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 0 60px rgba(0,245,255,0.5), 0 12px 40px rgba(0,0,0,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 0 40px rgba(0,245,255,0.3), 0 8px 32px rgba(0,0,0,0.3)";
          }}
        >
          ⬇ 下载简历模板
        </a>
      </section>
    </div>
  );
}
