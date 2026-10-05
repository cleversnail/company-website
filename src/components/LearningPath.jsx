import React from "react";
import GlassCard from "./GlassCard";

export default function LearningPath({ isMobile }) {
  const timeline = [
    {
      year: "大一",
      title: "夯实基础 · 积累项目",
      lines: [
        "有充足的时间做更多的项目",
        "积累高质量项目经验",
        "上架自己的商业化产品",
      ],
      color: "#00f5ff",
    },
    {
      year: "大二",
      title: "竞赛实战 · 远程实习",
      lines: [
        "参加竞赛、积累项目经验",
        "暑期开启远程实习",
        "助力保研加权加分，复试简历更具竞争力",
      ],
      color: "#3b82f6",
    },
    {
      year: "大三",
      title: "进入大厂 · 实战提升",
      lines: [
        "去大厂、去 AI 企业实习",
        "提升开发能力，积累行业经验",
      ],
      color: "#8b5cf6",
    },
    {
      year: "大四",
      title: "All in AI · 高薪就业",
      lines: [
        "All in AI Agent 开发",
        "拿下大厂、AI 企业 offer",
        "高薪就业",
      ],
      color: "#00ff88",
    },
  ];

  return (
    <section style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", padding: isMobile ? "40px 16px" : "80px 24px" }}>
      {/* 标题 */}
      <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 48 }}>
        <h2 style={{ fontSize: isMobile ? 24 : 32, fontWeight: 700, color: "#fff", marginBottom: 12 }}>
          <span style={{ background: "linear-gradient(135deg, #00f5ff, #00ff88)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            学习路径规划
          </span>
        </h2>
        <p style={{ fontSize: isMobile ? 14 : 16, color: "rgba(255,255,255,0.5)" }}>
          不同年级有不同的目标和策略，每一步都有清晰方向
        </p>
      </div>

      {/* 时间线 */}
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {timeline.map((item, i) => (
          <React.Fragment key={i}>
            {/* 节点行 */}
            <div style={{ display: "flex", gap: isMobile ? 16 : 28, alignItems: "flex-start" }}>
              {/* 左侧节点 */}
              <div
                style={{
                  width: isMobile ? 36 : 44,
                  height: isMobile ? 36 : 44,
                  borderRadius: "50%",
                  background: `${item.color}18`,
                  border: `2px solid ${item.color}50`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: isMobile ? 11 : 13,
                  fontWeight: 700,
                  color: item.color,
                  boxShadow: `0 0 16px ${item.color}30`,
                  flexShrink: 0,
                }}
              >
                {item.year}
              </div>

              {/* 右侧卡片 */}
              <GlassCard
                hoverable
                glowColor={i === 0 ? "cyan" : i === 1 ? "blue" : i === 2 ? "purple" : "green"}
                style={{
                  flex: 1,
                  padding: isMobile ? "16px" : "20px 24px",
                  borderLeft: `3px solid ${item.color}40`,
                }}
              >
                <div style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, color: "#fff", marginBottom: 10 }}>
                  {item.title}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {item.lines.map((line, li) => (
                    <div key={li} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: isMobile ? 13 : 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: item.color, marginTop: 8, flexShrink: 0, boxShadow: `0 0 6px ${item.color}60` }} />
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* 连接线行（非最后一个） */}
            {i < timeline.length - 1 && (
              <div style={{ display: "flex", paddingLeft: isMobile ? 16 : 20, marginBottom: isMobile ? 4 : 6, marginTop: isMobile ? 4 : 6 }}>
                <div style={{ position: "relative", width: isMobile ? 8 : 12 }}>
                  {/* 短虚线段 */}
                  <div
                    style={{
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 2,
                      height: "100%",
                      backgroundImage: `linear-gradient(to bottom, ${item.color}60 50%, transparent 50%)`,
                      backgroundSize: "2px 8px",
                    }}
                  />
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* 考研规划（低年级同学） */}
      <div style={{ maxWidth: 800, margin: "16px auto 0" }}>
        <GlassCard
          hoverable={false}
          style={{
            padding: isMobile ? "18px 16px" : "24px 28px",
            background: "linear-gradient(135deg, rgba(139,92,246,0.06), rgba(0,245,255,0.04))",
            border: "1px solid rgba(139,92,246,0.15)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div style={{ fontSize: 20 }}>📚</div>
            <div style={{ fontSize: isMobile ? 15 : 16, fontWeight: 700, color: "#8b5cf6" }}>
              低年级同学考研规划
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
            {[
              "大三回归备研，全力冲刺名校",
              "大四上学期末考研上岸，读研期间凭技术实力在导师项目组中脱颖而出",
              "万一考研失利，大四下学期立即就业，不错过应届生身份",
            ].map((line, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: isMobile ? 13 : 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#8b5cf6", marginTop: 8, flexShrink: 0, boxShadow: "0 0 6px rgba(139,92,246,0.6)" }} />
                <span>{line}</span>
              </div>
            ))}
          </div>

          <div
            style={{
              padding: "12px 16px",
              borderRadius: 10,
              background: "rgba(0,245,255,0.06)",
              border: "1px solid rgba(0,245,255,0.15)",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 16 }}>🤝</span>
            <span style={{ fontSize: isMobile ? 13 : 14, color: "#00f5ff", fontWeight: 600 }}>
              我们会一直陪伴你直到良好就业
            </span>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
