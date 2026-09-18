import React, { useState } from "react";
import GlassCard from "./GlassCard";

// 服务数据
const services = [
  {
    id: "ai",
    title: "AI 应用开发",
    subtitle: "AI Application Development",
    icon: "🤖",
    color: "#00f5ff",
    shortDesc: "为企业定制 AI 解决方案，实现业务智能化升级",
    description: "基于大语言模型和 AI 技术，为企业定制智能化应用，包括智能客服、知识库问答、自动化工作流等解决方案。",
    capabilities: [
      "LLM 应用开发（GPT/Claude/文心一言等）",
      "RAG 知识库检索增强系统",
      "多 Agent 协作与自动化工作流",
      "智能客服与对话系统",
      "AI 数据分析与智能报表",
      "模型微调与私有化部署",
    ],
    deliverables: "完整可部署的 AI 应用 + 源码 + 技术文档 + 持续技术支持",
    scenarios: "客服自动化、内部知识管理、业务流程自动化、数据智能分析",
  },
  {
    id: "domain",
    title: "域名运行管理",
    subtitle: "Domain Operations",
    icon: "🌐",
    color: "#8b5cf6",
    shortDesc: "顶级域名运行、注册、解析一站式服务",
    description: "提供互联网顶级域名运行管理与注册服务，涵盖域名全生命周期管理，确保域名系统安全稳定运行。",
    capabilities: [
      "顶级域名运行与监控管理",
      "域名注册与备案服务",
      "DNS 解析与智能调度",
      "域名安全防护与反劫持",
      "域名合规审计与报告",
      "域名资产批量管理",
    ],
    deliverables: "域名管理平台 + 7×24 监控 + 安全防护 + 合规报告",
    scenarios: "域名持有企业、域名注册商、互联网服务提供商",
  },
  {
    id: "integration",
    title: "系统集成服务",
    subtitle: "System Integration",
    icon: "🔗",
    color: "#00ff88",
    shortDesc: "企业信息系统规划、集成与数字化转型",
    description: "为企业提供信息系统规划、集成与迁移服务，打通数据孤岛，构建统一高效的企业数字底座。",
    capabilities: [
      "企业信息系统规划与架构设计",
      "多系统集成与数据打通",
      "云迁移与混合云部署",
      "API 网关与中台建设",
      "数据中台与数据治理",
      "DevOps 流程建设",
    ],
    deliverables: "集成方案 + 系统部署 + 数据迁移 + 运维文档 + 培训",
    scenarios: "中大型企业 IT 部门、传统企业上云、多系统整合",
  },
  {
    id: "security",
    title: "互联网安全",
    subtitle: "Internet Security",
    icon: "🛡️",
    color: "#ec4899",
    shortDesc: "全方位互联网安全防护与合规服务",
    description: "提供全面的互联网安全评估、防护与合规服务，保障企业数字资产安全，满足监管合规要求。",
    capabilities: [
      "安全风险评估与渗透测试",
      "Web 应用安全防护",
      "等保合规咨询与整改",
      "安全运维与应急响应",
      "数据安全与隐私保护",
      "安全培训与意识提升",
    ],
    deliverables: "安全评估报告 + 防护方案 + 合规文档 + 应急预案",
    scenarios: "所有互联网企业、金融机构、政务系统、电商平台",
  },
  {
    id: "consulting",
    title: "技术咨询",
    subtitle: "Tech Consulting",
    icon: "💼",
    color: "#f59e0b",
    shortDesc: "数字化转型咨询与技术战略规划",
    description: "为企业提供数字化转型咨询与技术规划服务，帮助企业制定技术战略，选择最优技术路径。",
    capabilities: [
      "数字化转型战略规划",
      "技术选型与架构评审",
      "研发团队建设与管理",
      "技术债务治理",
      "研发效能提升",
      "技术培训与赋能",
    ],
    deliverables: "转型方案 + 技术路线图 + 架构文档 + 培训计划",
    scenarios: "传统企业数字化转型、创业公司技术规划、团队能力提升",
  },
  {
    id: "design",
    title: "设计与品牌",
    subtitle: "Design & Branding",
    icon: "🎨",
    color: "#a855f7",
    shortDesc: "专业视觉设计与品牌推广服务",
    description: "提供专业的 UI/UX 设计、品牌视觉设计与营销物料设计，助力企业打造高品质品牌形象。",
    capabilities: [
      "UI/UX 交互设计",
      "品牌 VI 视觉系统",
      "官网与应用界面设计",
      "营销物料与海报设计",
      "产品原型与动效设计",
      "设计系统与组件库",
    ],
    deliverables: "设计稿 + 切图 + 品牌手册 + 设计规范 + 源文件",
    scenarios: "创业公司品牌搭建、产品界面升级、营销活动设计",
  },
];

// 合作流程数据
const processSteps = [
  { num: "01", title: "需求沟通", desc: "深入了解客户需求与业务场景，明确项目目标与范围" },
  { num: "02", title: "方案设计", desc: "定制技术方案与实施计划，确认报价与交付标准" },
  { num: "03", title: "开发实施", desc: "敏捷开发迭代交付，阶段性验收确保质量" },
  { num: "04", title: "验收交付", desc: "完整交付项目成果，提供培训与技术文档" },
  { num: "05", title: "持续运维", desc: "长期技术支持与运维保障，持续优化迭代" },
];

export default function ServicePage({ onShowQR, onNavigate }) {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div style={{ position: "relative", zIndex: 10 }}>
      {/* ① Hero */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "120px 24px 60px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 20px", fontSize: 13, fontWeight: 600, color: "#8b5cf6", background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)", borderRadius: 999, marginBottom: 28, letterSpacing: "0.1em" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#8b5cf6", boxShadow: "0 0 10px #8b5cf6" }} />
          ENTERPRISE SERVICES
        </div>
        <h1 style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.15, marginBottom: 20, color: "#fff" }}>企业服务</h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", maxWidth: 600, margin: "0 auto", lineHeight: 1.8 }}>
          为您的企业提供全方位技术解决方案，<br />助力数字化转型与业务增长
        </p>
      </section>

      {/* ② 服务总览 */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {services.map((s) => (
            <GlassCard
              key={s.id}
              hoverable
              glowColor={s.color === "#00f5ff" ? "cyan" : s.color === "#8b5cf6" || s.color === "#a855f7" ? "purple" : s.color === "#00ff88" ? "green" : "blue"}
              style={{
                padding: "28px 24px",
                cursor: "pointer",
                border: activeService.id === s.id ? `1px solid ${s.color}50` : "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.3s ease",
              }}
              onClick={() => setActiveService(s)}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{s.title}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 16, lineHeight: 1.6 }}>{s.shortDesc}</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {s.capabilities.slice(0, 3).map((c) => (
                  <span key={c} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 999, background: `${s.color}12`, color: s.color, border: `1px solid ${s.color}20` }}>{c.split("（")[0]}</span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ③ 服务详情 */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: "#fff", textAlign: "center", marginBottom: 40 }}>
          <span style={{ background: `linear-gradient(135deg, ${activeService.color}, #8b5cf6)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {activeService.title}
          </span>
          <span style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginLeft: 12, fontFamily: "var(--font-mono)" }}>
            {activeService.subtitle}
          </span>
        </h2>

        <GlassCard hoverable={false} style={{ padding: "40px 36px", border: `1px solid ${activeService.color}20` }}>
          {/* 描述 */}
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: 32 }}>{activeService.description}</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            {/* 左：能力清单 */}
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: activeService.color, marginBottom: 16, letterSpacing: "0.05em" }}>核心能力</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {activeService.capabilities.map((c) => (
                  <div key={c} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: activeService.color, boxShadow: `0 0 8px ${activeService.color}60`, flexShrink: 0 }} />
                    {c}
                  </div>
                ))}
              </div>
            </div>

            {/* 右：交付物 + 适用场景 */}
            <div>
              <div style={{ marginBottom: 28 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: activeService.color, marginBottom: 12, letterSpacing: "0.05em" }}>交付物</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, padding: "14px 18px", background: "rgba(255,255,255,0.03)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)" }}>
                  {activeService.deliverables}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: activeService.color, marginBottom: 12, letterSpacing: "0.05em" }}>适用场景</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, padding: "14px 18px", background: "rgba(255,255,255,0.03)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)" }}>
                  {activeService.scenarios}
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* ④ 合作流程 */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: "#fff", textAlign: "center", marginBottom: 48 }}>
          <span style={{ background: "linear-gradient(135deg, #00ff88, #00f5ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>合作流程</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16, position: "relative" }}>
          {/* 连接线 */}
          <div style={{ position: "absolute", top: 36, left: "10%", right: "10%", height: 2, background: "linear-gradient(90deg, #00f5ff, #8b5cf6, #00ff88, #ec4899, #f59e0b)", opacity: 0.3, zIndex: 0 }} />

          {processSteps.map((step, i) => {
            const colors = ["#00f5ff", "#8b5cf6", "#00ff88", "#ec4899", "#f59e0b"];
            return (
              <div key={i} style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                <GlassCard hoverable glowColor={["cyan", "purple", "green", "cyan", "blue"][i]} style={{ padding: "24px 12px" }}>
                  <div style={{ width: 48, height: 48, margin: "0 auto 14px", borderRadius: "50%", background: `${colors[i]}15`, border: `2px solid ${colors[i]}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800, color: colors[i], fontFamily: "var(--font-mono)" }}>
                    {step.num}
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{step.title}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{step.desc}</div>
                </GlassCard>
              </div>
            );
          })}
        </div>
      </section>

      {/* ⑤ CTA */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 100px", textAlign: "center" }}>
        <GlassCard hoverable={false} style={{ padding: "60px 48px", background: "linear-gradient(135deg, rgba(139,92,246,0.05), rgba(0,245,255,0.05))", border: "1px solid rgba(139,92,246,0.2)" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12, color: "#fff" }}>需要技术服务？</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", marginBottom: 32 }}>联系我们，获取专业的技术解决方案与报价</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => onShowQR && onShowQR("consult")}
              style={{ padding: "14px 36px", fontSize: 16, fontWeight: 600, color: "#050510", background: "linear-gradient(135deg, #8b5cf6, #00f5ff)", borderRadius: 12, border: "none", cursor: "pointer", boxShadow: "0 0 40px rgba(139,92,246,0.3), 0 8px 32px rgba(0,0,0,0.3)", transition: "all 0.3s ease" }}
              onMouseEnter={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 0 60px rgba(139,92,246,0.4), 0 12px 40px rgba(0,0,0,0.4)"; }}
              onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 0 40px rgba(139,92,246,0.3), 0 8px 32px rgba(0,0,0,0.3)"; }}
            >咨询服务</button>
            <button
              onClick={() => onNavigate && onNavigate("about")}
              style={{ padding: "14px 36px", fontSize: 16, fontWeight: 500, color: "#fff", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12, cursor: "pointer", transition: "all 0.3s ease" }}
              onMouseEnter={(e) => { e.target.style.background = "rgba(255,255,255,0.1)"; e.target.style.borderColor = "rgba(139,92,246,0.3)"; }}
              onMouseLeave={(e) => { e.target.style.background = "rgba(255,255,255,0.05)"; e.target.style.borderColor = "rgba(255,255,255,0.15)"; }}
            >联系我们</button>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
