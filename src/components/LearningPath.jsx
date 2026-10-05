import React from "react";
import GlassCard from "./GlassCard";

export default function LearningPath({ isMobile }) {
  const timeline = [
    {
      year: "大一",
      title: "夯实基础",
      desc: "系统学习 AI 编程，掌握核心开发技能",
      color: "#00f5ff",
    },
    {
      year: "大二",
      title: "实战积累",
      lines: [
        "参加竞赛、积累项目经验",
        "暑期开启远程实习",
        "助力保研加权加分，复试简历更具竞争力",
      ],
      color: "#00f5ff",
    },
    {
      year: "大三",
      title: "关键抉择",
      isBranch: true,
      branches: [
        { label: "考研方向", desc: "全力备研，冲刺名校", color: "#8b5cf6" },
        { label: "就业方向", desc: "All in AI Agent 开发，冲击大厂实习", color: "#00f5ff" },
      ],
      color: "#f59e0b",
    },
    {
      year: "大四",
      title: "收获成果",
      lines: [
        "考研上岸 → 读研期间凭技术实力在导师项目组脱颖而出",
        "直接就业 → 拿下大厂 offer，高薪起步",
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
          从大一到大四，每一步都有清晰方向
        </p>
      </div>

      {/* 时间线 */}
      <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
        {/* 左侧竖线 */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              left: 28,
              top: 24,
              bottom: 24,
              width: 2,
              background: "linear-gradient(180deg, #00f5ff, #8b5cf6, #00ff88)",
              opacity: 0.3,
              zIndex: 0,
            }}
          />
        )}

        {/* 各阶段 */}
        {timeline.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: isMobile ? 16 : 28,
              marginBottom: i < timeline.length - 1 ? (isMobile ? 24 : 32) : 0,
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* 左侧节点 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: isMobile ? 40 : 58 }}>
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
            </div>

            {/* 右侧内容卡片 */}
            <GlassCard
              hoverable
              glowColor={item.color === "#00f5ff" ? "cyan" : item.color === "#8b5cf6" ? "purple" : item.color === "#00ff88" ? "green" : "blue"}
              style={{
                flex: 1,
                padding: isMobile ? "16px" : "20px 24px",
                borderLeft: `3px solid ${item.color}40`,
              }}
            >
              <div style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, color: "#fff", marginBottom: 10 }}>
                {item.title}
              </div>

              {/* 普通阶段 */}
              {item.lines && (
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {item.lines.map((line, li) => (
                    <div key={li} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: isMobile ? 13 : 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: item.color, marginTop: 8, flexShrink: 0, boxShadow: `0 0 6px ${item.color}60` }} />
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* 分支阶段（大三） */}
              {item.isBranch && (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {item.branches.map((b, bi) => (
                    <div
                      key={bi}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        padding: "10px 14px",
                        borderRadius: 10,
                        background: `${b.color}08`,
                        border: `1px solid ${b.color}15`,
                      }}
                    >
                      <div
                        style={{
                          padding: "2px 10px",
                          borderRadius: 6,
                          background: `${b.color}20`,
                          color: b.color,
                          fontSize: 12,
                          fontWeight: 700,
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                        }}
                      >
                        {b.label}
                      </div>
                      <span style={{ fontSize: isMobile ? 13 : 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                        {b.desc}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </GlassCard>
          </div>
        ))}
      </div>

      {/* 考研保底提示 */}
      <div style={{ maxWidth: 800, margin: "24px auto 0" }}>
        <GlassCard
          hoverable={false}
          style={{
            padding: isMobile ? "14px 16px" : "16px 24px",
            background: "rgba(245,158,11,0.06)",
            border: "1px solid rgba(245,158,11,0.2)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div style={{ fontSize: 20, flexShrink: 0 }}>💡</div>
          <div style={{ fontSize: isMobile ? 13 : 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
            <span style={{ color: "#f59e0b", fontWeight: 600 }}>考研失利？</span>
            大四下学期立即就业，不错过应届生身份。我们会持续陪伴大家直到良好就业。
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
