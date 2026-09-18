import React from "react";
import GlassCard from "./GlassCard";
import teacherQR from "../assets/images/teacher.png";
import config from "../config/siteConfig.json";

export default function AboutPage({ onShowQR, isMobile }) {
  return (
    <div style={{ position: "relative", zIndex: 10 }}>
      {/* ① Hero */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: isMobile ? "100px 16px 40px" : "120px 24px 60px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 20px", fontSize: 13, fontWeight: 600, color: "#00f5ff", background: "rgba(0,245,255,0.1)", border: "1px solid rgba(0,245,255,0.2)", borderRadius: 999, marginBottom: 28, letterSpacing: "0.1em" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00f5ff", boxShadow: "0 0 10px #00f5ff" }} />
          ABOUT US
        </div>
        <h1 style={{ fontSize: isMobile ? 32 : 56, fontWeight: 800, lineHeight: 1.15, marginBottom: 20, color: "#fff" }}>关于我们</h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: "0 auto", lineHeight: 1.8 }}>
          用技术驱动教育，用服务创造价值
        </p>
      </section>

      {/* ② 公司简介 */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.2fr 0.8fr", gap: isMobile ? 20 : 40, alignItems: "start" }}>
          {/* 左侧：公司介绍 */}
          <GlassCard hoverable={false} style={{ padding: "36px 32px" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#00f5ff", marginBottom: 20, letterSpacing: "0.05em" }}>公司简介</div>
            <div style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 2 }}>
              <p style={{ marginBottom: 16 }}>
                南昌蜗牛信息技术有限公司（简称"蜗牛 AI"）是一家专注于 AI 技术教育与互联网基础服务的科技公司。
              </p>
              <p style={{ marginBottom: 16 }}>
                公司以"AI编程"为核心业务，致力于培养面向未来的 AI 全栈开发人才。同时提供互联网域名运行管理、域名注册、软件开发、信息系统集成、互联网安全等全方位企业技术服务。
              </p>
              <p>
                我们相信，技术的力量在于赋能每一个人。蜗牛 AI 以务实、专业、创新的精神，帮助学员掌握前沿技术，帮助企业实现数字化转型。
              </p>
            </div>
          </GlassCard>

          {/* 右侧：公司数据 */}
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr", gap: isMobile ? 10 : 16 }}>
            {[
              { ...config.stats.serviceYears, color: "#00f5ff" },
              { ...config.stats.students, label: "服务学员", color: "#8b5cf6" },
              { ...config.stats.schools, color: "#00ff88" },
              { ...config.stats.companies, color: "#ec4899" },
            ].map((s) => (
              <GlassCard key={s.label} hoverable glowColor={s.color === "#00f5ff" ? "cyan" : s.color === "#8b5cf6" ? "purple" : s.color === "#00ff88" ? "green" : "cyan"} style={{ textAlign: "center", padding: "28px 16px" }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: s.color, lineHeight: 1.1, marginBottom: 8, fontFamily: "var(--font-mono)" }}>{s.num}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{s.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ③ 使命与愿景 */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: "#fff", textAlign: "center", marginBottom: 40 }}>
          <span style={{ background: "linear-gradient(135deg, #00f5ff, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>使命与愿景</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 16 : 24 }}>
          {[
            { icon: "🎯", title: "使命", desc: "让每个人都能掌握 AI 技术，让每家企业都能享受数字化红利", color: "#00f5ff" },
            { icon: "🔭", title: "愿景", desc: "成为国内领先的 AI 技术教育与企业服务平台", color: "#8b5cf6" },
            { icon: "💎", title: "价值观", desc: "务实创新 · 学员至上 · 技术驱动 · 合规经营", color: "#00ff88" },
          ].map((item) => (
            <GlassCard key={item.title} hoverable glowColor={item.color === "#00f5ff" ? "cyan" : item.color === "#8b5cf6" ? "purple" : "green"} style={{ textAlign: "center", padding: "36px 24px" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>{item.icon}</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12 }}>{item.title}</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>{item.desc}</div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ④ 业务版图 */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: "#fff", textAlign: "center", marginBottom: 40 }}>
          <span style={{ background: "linear-gradient(135deg, #00ff88, #00f5ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>业务版图</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 16 : 24 }}>
          {[
            {
              icon: "🎓", title: "AI 教育", color: "#00f5ff",
              items: ["AI 编程", "Agent 开发", "AI 漫剧制作", "LLM 应用开发"],
            },
            {
              icon: "🌐", title: "域名服务", color: "#8b5cf6",
              items: ["顶级域名运行管理", "域名注册服务", "DNS 解析", "域名安全防护"],
            },
            {
              icon: "🔧", title: "技术服务", color: "#00ff88",
              items: ["软件开发", "系统集成", "互联网安全", "技术咨询"],
            },
          ].map((block) => (
            <GlassCard key={block.title} hoverable glowColor={block.color === "#00f5ff" ? "cyan" : block.color === "#8b5cf6" ? "purple" : "green"} style={{ padding: "32px 28px" }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{block.icon}</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: block.color, marginBottom: 20 }}>{block.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {block.items.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.65)" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: block.color, boxShadow: `0 0 8px ${block.color}60`, flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ⑤ 联系我们 */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 100px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: "#fff", textAlign: "center", marginBottom: 40 }}>
          <span style={{ background: "linear-gradient(135deg, #ec4899, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>联系我们</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 16 : 24, marginBottom: 24 }}>
          {/* 左侧：联系信息 */}
          <GlassCard hoverable={false} style={{ padding: "32px 28px" }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 24 }}>联系方式</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {[
                { label: "公司名称", value: config.company.fullName },
                { label: "品牌名称", value: config.company.shortName },
                { label: "所在地区", value: config.company.address },
                { label: "联系邮箱", value: config.company.email },
                { label: "工作时间", value: config.company.workTime },
              ].map((info) => (
                <div key={info.label}>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginBottom: 4, letterSpacing: "0.05em" }}>{info.label}</div>
                  <div style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{info.value}</div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* 右侧：二维码 */}
          <GlassCard hoverable={false} style={{ padding: "32px 28px", textAlign: "center" }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 8 }}>扫码咨询</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 24 }}>添加老师微信，获取更多信息</div>
            <div style={{ width: 200, height: 200, margin: "0 auto 20px", borderRadius: 16, background: "#fff", overflow: "hidden", border: "2px solid rgba(0,245,255,0.2)", boxShadow: "0 0 30px rgba(0,245,255,0.1)" }}>
              <img src={teacherQR} alt="老师微信二维码" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
              {["课程咨询", "企业合作", "技术支持"].map((tag) => (
                <span key={tag} style={{ fontSize: 12, padding: "4px 14px", borderRadius: 999, background: "rgba(0,245,255,0.08)", color: "rgba(0,245,255,0.8)", border: "1px solid rgba(0,245,255,0.15)" }}>{tag}</span>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* 底部：公司全称 */}
        <GlassCard hoverable={false} style={{ padding: "20px 28px", textAlign: "center" }}>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.4)" }}>
            {config.company.icp} · {config.company.footerTags.join(" · ")}
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
