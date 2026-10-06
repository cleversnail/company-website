import React, { useState } from "react";
import GlassCard from "./GlassCard";

export default function ResumeTemplatePage({ pdfUrl, isMobile }) {
  const [showPreview, setShowPreview] = useState(false);

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

      {/* ② 操作区 */}
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
          style={{ padding: isMobile ? "24px 16px" : "40px 32px" }}
        >
          {/* PDF 图标 + 信息 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: isMobile ? 16 : 24,
              flexDirection: isMobile ? "column" : "row",
              marginBottom: 32,
            }}
          >
            <div
              style={{
                width: 80,
                height: 100,
                borderRadius: 12,
                background: "linear-gradient(135deg, rgba(0,245,255,0.15), rgba(139,92,246,0.15))",
                border: "1px solid rgba(0,245,255,0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                flexShrink: 0,
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00f5ff" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#00f5ff" }}>PDF</span>
            </div>
            <div style={{ textAlign: isMobile ? "center" : "left" }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
                简历模板.pdf
              </div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
                专业的简历模板，可在线预览后下载使用
              </div>
            </div>
          </div>

          {/* 按钮区 */}
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={pdfUrl}
              download="简历模板.pdf"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: isMobile ? "14px 32px" : "14px 40px",
                fontSize: 15,
                fontWeight: 600,
                color: "#050510",
                background: "linear-gradient(135deg, #00f5ff, #00d4ff)",
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                textDecoration: "none",
                boxShadow: "0 0 40px rgba(0,245,255,0.3), 0 8px 32px rgba(0,0,0,0.3)",
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

            <button
              onClick={() => setShowPreview(!showPreview)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: isMobile ? "14px 32px" : "14px 40px",
                fontSize: 15,
                fontWeight: 500,
                color: "#fff",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 12,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.borderColor = "rgba(0,245,255,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              }}
            >
              {showPreview ? "✕ 关闭预览" : "👁 在线预览"}
            </button>
          </div>
        </GlassCard>
      </section>

      {/* ③ PDF 预览区（点击后才加载） */}
      {showPreview && (
        <section
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: isMobile ? "24px 16px 80px" : "32px 24px 100px",
          }}
        >
          <GlassCard
            hoverable={false}
            glowColor="cyan"
            style={{ padding: isMobile ? "12px" : "20px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 13,
                color: "rgba(255,255,255,0.45)",
                paddingBottom: 12,
                marginBottom: 12,
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span>📄</span>
              <span>简历模板.pdf · 在线预览</span>
            </div>
            <iframe
              src={pdfUrl}
              title="简历模板预览"
              style={{
                width: "100%",
                height: isMobile ? "60vh" : "75vh",
                border: "none",
                borderRadius: 12,
                background: "#1a1a2e",
                display: "block",
              }}
            />
          </GlassCard>
        </section>
      )}
    </div>
  );
}
