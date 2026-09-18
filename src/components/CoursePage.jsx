import React, { useState } from "react";
import GlassCard from "./GlassCard";

// 技术栈图标组件
const TechStackIcon = ({ name, size = 32 }) => {
  const icons = {
    HTML: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <path d="M4 2l2.5 28L16 32l9.5-2L28 2H4z" fill="#E44D26" />
        <path d="M16 29.5l7.7-2.1 2.1-24H16v26.1z" fill="#F16529" />
        <path d="M16 12.5h-5l-.5-5H16V4.5H8.5l.2 2 1.3 14.5H16v-8.5zm0 11l-5-1.5-.3-3.5H7l.5 6L16 27l8.5-2.5.1-2H20l-.2 2.5L16 23.5z" fill="#EBEBEB" />
      </svg>
    ),
    CSS: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <path d="M4 2l2.5 28L16 32l9.5-2L28 2H4z" fill="#1572B6" />
        <path d="M16 29.5l7.7-2.1 2.1-24H16v26.1z" fill="#33A9DC" />
        <path d="M16 16.5l-5-.5-.3-3.5H16V9.5H7l.2 2 1 11.5L16 25v-8.5zm0-8H11l-.2-2H16V4.5H8l.2 2 1.3 14L16 27l8.5-2.5.1-2H20l-.2 2.5L16 23.5V16.5z" fill="#fff" />
      </svg>
    ),
    JavaScript: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect x="2" y="2" width="28" height="28" rx="2" fill="#F7DF1E" />
        <path d="M20.5 23.5c.7 1.2 1.6 2.1 3.2 2.1 1.4 0 2.2-.7 2.2-1.6 0-1.1-.9-1.5-2.4-2.2l-.8-.3c-2.4-1-4-2.3-4-5 0-2.5 1.9-4.4 4.9-4.4 2.1 0 3.6.7 4.7 2.6l-2.6 1.7c-.5-1-1.1-1.4-2.1-1.4-.9 0-1.5.6-1.5 1.4 0 1 .6 1.4 2 2l.8.3c2.8 1.2 4.4 2.4 4.4 5.2 0 3-2.3 4.7-5.4 4.7-3 0-5-1.5-5.9-3.3l2.6-1.5zm-7.2.3c.5.9.9 1.6 1.9 1.6 1 0 1.6-.4 1.6-1.9V14h3v9.5c0 3.1-1.8 4.5-4.5 4.5-2.4 0-3.8-1.2-4.5-2.7l2.5-1.5z" fill="#323330" />
      </svg>
    ),
    Vue: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <path d="M2 4h6l8 13.5L24 4h6L16 28 2 4z" fill="#41B883" />
        <path d="M8 4h5l3 5L19 4h5L16 18 8 4z" fill="#35495E" />
      </svg>
    ),
    React: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="2.5" fill="#61DAFB" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 16 16)" />
      </svg>
    ),
    TypeScript: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect x="2" y="2" width="28" height="28" rx="2" fill="#3178C6" />
        <path d="M13 22h-3V10h3v12zm1.5-7.5c.7-.5 1.5-.8 2.5-.8 2 0 3.3 1.2 3.3 3.3 0 2.2-1.4 3.3-3.5 3.3-.8 0-1.6-.2-2.3-.6v-2.5c.6.5 1.3.8 2 .8.8 0 1.3-.4 1.3-1 0-.7-.4-1-1.2-1-.7 0-1.4.3-2.1.8V14.5z" fill="#fff" />
      </svg>
    ),
    Python: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <path d="M15.5 3C9.2 3 9.5 5.7 9.5 5.7l.1 2.3h6.3v.7H6.5S3 7.8 3 14.2s3.1 6.1 3.1 6.1h1.8v-2.9s-.1-3.1 3-3.1h5.3s2.9 0 2.9-2.8V5.8S19.5 3 15.5 3zm-2.8 1.8c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#3776AB" />
        <path d="M16.5 29c6.3 0 6-2.7 6-2.7l-.1-2.3h-6.3v-.7h9.4S29 24.2 29 17.8s-3.1-6.1-3.1-6.1h-1.8v2.9s.1 3.1-3 3.1h-5.3s-2.9 0-2.9 2.8v5.6s-.4 2.8 3.6 2.8zm2.8-1.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#FFD43B" />
      </svg>
    ),
    LLM: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="20" rx="3" stroke="#00f5ff" strokeWidth="1.5" fill="rgba(0,245,255,0.1)" />
        <path d="M10 14h12M10 18h8" stroke="#00f5ff" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="10" r="1.5" fill="#00f5ff" />
      </svg>
    ),
    Agent: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="12" r="6" stroke="#8b5cf6" strokeWidth="1.5" fill="rgba(139,92,246,0.15)" />
        <path d="M16 18v4M10 26h12M12 22h8" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="12" r="2" fill="#8b5cf6" />
        <path d="M8 8l-2-2M24 8l2-2M8 16H4M28 16h-4" stroke="#8b5cf6" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    Comic: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="3" stroke="#ec4899" strokeWidth="1.5" fill="rgba(236,72,153,0.1)" />
        <path d="M10 10h5v5h-5zM17 10h5v5h-5zM10 17h5v5h-5z" stroke="#ec4899" strokeWidth="1.2" fill="rgba(236,72,153,0.15)" />
        <path d="M22 17h-2v5h5v-2" stroke="#ec4899" strokeWidth="1.2" />
      </svg>
    ),
    ComicPlatform: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect x="3" y="6" width="26" height="18" rx="2" stroke="#f59e0b" strokeWidth="1.5" fill="rgba(245,158,11,0.08)" />
        <path d="M3 10h26" stroke="#f59e0b" strokeWidth="1" />
        <rect x="6" y="13" width="8" height="8" rx="1" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" strokeWidth="1" />
        <path d="M17 13h9M17 16h7M17 19h5" stroke="#f59e0b" strokeWidth="1" strokeLinecap="round" />
        <circle cx="7" cy="8" r="0.8" fill="#f59e0b" />
        <circle cx="9.5" cy="8" r="0.8" fill="#f59e0b" />
        <circle cx="12" cy="8" r="0.8" fill="#f59e0b" />
        <path d="M10 27h12" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 24v3M18 24v3" stroke="#f59e0b" strokeWidth="1.5" />
      </svg>
    ),
  };
  return icons[name] || null;
};

// 学习路径数据
const learningPath = [
  {
    phase: "阶段 1",
    title: "前端基础",
    desc: "构建 Web 开发基石",
    courses: ["HTML5 & CSS3", "JavaScript"],
    color: "#00f5ff",
    icon: "HTML",
  },
  {
    phase: "阶段 2",
    title: "前端进阶",
    desc: "掌握主流框架与工程化",
    courses: ["Vue 3", "React 18", "TypeScript"],
    color: "#3b82f6",
    icon: "React",
  },
  {
    phase: "阶段 3",
    title: "AI 工程",
    desc: "深入 AI 应用开发",
    courses: ["Python", "LLM应用开发", "Agent开发"],
    color: "#8b5cf6",
    icon: "LLM",
  },
  {
    phase: "阶段 4",
    title: "AI 漫剧",
    desc: "AI 漫剧创作与平台开发",
    courses: ["AI漫剧制作", "漫剧平台开发", "项目实战"],
    color: "#ec4899",
    icon: "Comic",
  },
  {
    phase: "阶段 5",
    title: "实战就业",
    desc: "企业级项目与职业冲刺",
    courses: ["综合项目", "简历优化", "模拟面试"],
    color: "#00ff88",
    icon: "Agent",
  },
];

// 课程详情数据
const courseGroups = [
  {
    title: "前端工程",
    subtitle: "Frontend Engineering",
    color: "#00f5ff",
    courses: [
      { name: "HTML5 & CSS3", icon: "HTML", desc: "语义化标签、Flex/Grid 布局、响应式设计、CSS 动画与过渡", tags: ["基础", "必修"] },
      { name: "JavaScript", icon: "JavaScript", desc: "ES6+ 语法、DOM 操作、异步编程、设计模式与数据结构", tags: ["核心", "必修"] },
      { name: "Vue 3", icon: "Vue", desc: "组合式 API、Pinia 状态管理、Vue Router、SSR 与 Nuxt", tags: ["框架", "选修"] },
      { name: "React 18", icon: "React", desc: "Hooks 深度、Redux Toolkit、Next.js、性能优化与测试", tags: ["框架", "选修"] },
      { name: "TypeScript", icon: "TypeScript", desc: "类型系统、泛型、装饰器、工程化配置与类型体操", tags: ["进阶", "必修"] },
    ],
  },
  {
    title: "AI 工程",
    subtitle: "AI Engineering",
    color: "#8b5cf6",
    courses: [
      { name: "Python", icon: "Python", desc: "数据结构、面向对象、异步编程、爬虫与数据分析基础", tags: ["核心", "必修"] },
      { name: "LLM 应用开发", icon: "LLM", desc: "Prompt Engineering、RAG 检索增强、Fine-tuning、API 集成与评估", tags: ["专业", "必修"] },
      { name: "Agent 开发", icon: "Agent", desc: "工具调用、多 Agent 协作、记忆系统、工作流编排与部署上线", tags: ["专业", "必修"] },
    ],
  },
  {
    title: "AI 漫剧",
    subtitle: "AI Comic & Drama",
    color: "#ec4899",
    courses: [
      { name: "AI 漫剧制作", icon: "Comic", desc: "AI 绘图工具链、角色一致性控制、分镜脚本生成、动态漫剧合成与后期制作", tags: ["专业", "必修"] },
      { name: "AI 漫剧平台开发", icon: "ComicPlatform", desc: "漫剧编辑器架构、素材库系统、协作工作流、作品发布与数据统计平台开发", tags: ["专业", "必修"] },
    ],
  },
];

// 就业方向数据
const careerPaths = [
  {
    title: "AI 全栈开发工程师",
    salary: "15K - 35K",
    desc: "独立完成 AI 产品的前后端开发、模型集成与部署上线，具备从 0 到 1 构建 AI 应用的能力。",
    skills: ["前端框架", "Python", "LLM 集成", "API 设计", "部署运维", "数据库"],
    color: "#00f5ff",
  },
  {
    title: "Agent 开发工程师",
    salary: "20K - 40K",
    desc: "设计开发智能体系统，实现复杂任务自动化，掌握多 Agent 协作与工作流编排技术。",
    skills: ["Python", "LLM 原理", "Agent 框架", "工具调用", "多模态", "系统设计"],
    color: "#8b5cf6",
  },
  {
    title: "AI 漫剧制作师",
    salary: "12K - 30K",
    desc: "运用 AI 工具链完成漫剧全流程制作，包括角色设计、分镜生成、动态合成与内容运营。",
    skills: ["AI 绘图工具", "分镜脚本", "角色一致性", "动态合成", "内容策划", "后期处理"],
    color: "#ec4899",
  },
  {
    title: "AI 产品经理",
    salary: "18K - 40K",
    desc: "主导 AI 产品规划与落地，连接技术与业务，推动 AI 漫剧平台等创新产品的设计与迭代。",
    skills: ["产品设计", "需求分析", "AI 应用理解", "数据驱动", "项目管理", "用户研究"],
    color: "#f59e0b",
  },
];

// 课程特色数据
const features = [
  { icon: "🔧", title: "实战驱动", desc: "每阶段配套真实企业项目，学完即可独立上手开发" },
  { icon: "👨‍💻", title: "企业导师", desc: "来自一线大厂的资深工程师，传授实战经验与行业洞察" },
  { icon: "🎯", title: "就业保障", desc: "专属就业指导服务，简历优化 + 模拟面试 + 岗位推荐" },
  { icon: "🔄", title: "持续更新", desc: "紧跟 AI 前沿技术，课程内容保持季度迭代更新" },
];

export default function CoursePage({ onShowQR }) {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div style={{ position: "relative", zIndex: 10 }}>
      {/* ① Hero */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "120px 24px 60px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 20px", fontSize: 13, fontWeight: 600, color: "#8b5cf6", background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)", borderRadius: 999, marginBottom: 28, letterSpacing: "0.1em" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#8b5cf6", boxShadow: "0 0 10px #8b5cf6" }} />
          COURSE SYSTEM
        </div>
        <h1 style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.15, marginBottom: 20, color: "#fff" }}>课程体系</h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", maxWidth: 600, margin: "0 auto", lineHeight: 1.8 }}>
          从前端基础到 AI 全栈，再到 AI 漫剧创作与平台开发，<br />系统化培养面向未来的核心竞争力。
        </p>
      </section>

      {/* ② 学习路径图 - 5个模块同一水平线 */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px 80px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: "#fff", textAlign: "center", marginBottom: 48 }}>
          <span style={{ background: "linear-gradient(135deg, #00f5ff, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>学习路径</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16, position: "relative", alignItems: "stretch" }}>
          {/* 连接线 */}
          <div style={{ position: "absolute", top: 50, left: "10%", right: "10%", height: 2, background: "linear-gradient(90deg, #00f5ff, #3b82f6, #8b5cf6, #ec4899, #00ff88)", opacity: 0.4, zIndex: 0 }} />

          {learningPath.map((p, i) => (
            <div key={i} onClick={() => setActivePhase(i)} style={{ position: "relative", zIndex: 1, cursor: "pointer", display: "flex" }}>
              <GlassCard
                hoverable
                glowColor={i === 0 ? "cyan" : i === 1 ? "blue" : i === 2 ? "purple" : i === 3 ? "cyan" : "green"}
                style={{
                  textAlign: "center",
                  padding: "24px 12px",
                  border: activePhase === i ? `1px solid ${p.color}60` : "1px solid rgba(255,255,255,0.08)",
                  transform: activePhase === i ? "scale(1.03)" : "scale(1)",
                  transition: "all 0.3s ease",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <div style={{ width: 44, height: 44, margin: "0 auto 12px", borderRadius: "50%", background: `${p.color}20`, border: `2px solid ${p.color}60`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: activePhase === i ? `0 0 20px ${p.color}40` : "none", flexShrink: 0 }}>
                  <TechStackIcon name={p.icon} size={22} />
                </div>
                <div style={{ fontSize: 11, fontWeight: 600, color: p.color, marginBottom: 4, letterSpacing: "0.05em" }}>{p.phase}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{p.title}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginBottom: 12 }}>{p.desc}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center", marginTop: "auto" }}>
                  {p.courses.map((c) => (
                    <span key={c} style={{ fontSize: 11, padding: "2px 8px", borderRadius: 999, background: `${p.color}12`, color: p.color, border: `1px solid ${p.color}20`, whiteSpace: "nowrap" }}>{c}</span>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </section>

      {/* ③ 课程详情卡片 */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px 80px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: "#fff", textAlign: "center", marginBottom: 48 }}>
          <span style={{ background: "linear-gradient(135deg, #00f5ff, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>课程详情</span>
        </h2>

        {courseGroups.map((group, gi) => (
          <div key={gi} style={{ marginBottom: gi < courseGroups.length - 1 ? 48 : 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 4, height: 28, borderRadius: 2, background: group.color, boxShadow: `0 0 10px ${group.color}60` }} />
              <div>
                <span style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginRight: 10 }}>{group.title}</span>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-mono)" }}>{group.subtitle}</span>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 16 }}>
              {group.courses.map((course, ci) => (
                <GlassCard key={ci} hoverable glowColor={gi === 0 ? "cyan" : gi === 1 ? "purple" : "cyan"} style={{ padding: "20px 22px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: `${group.color}12`, border: `1px solid ${group.color}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <TechStackIcon name={course.icon} size={28} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{course.name}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, marginBottom: 10 }}>{course.desc}</div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {course.tags.map((t) => (
                        <span key={t} style={{ fontSize: 11, padding: "2px 10px", borderRadius: 999, background: t === "必修" ? `${group.color}20` : "rgba(255,255,255,0.06)", color: t === "必修" ? group.color : "rgba(255,255,255,0.5)", border: `1px solid ${t === "必修" ? `${group.color}30` : "rgba(255,255,255,0.08)"}`, fontWeight: 600 }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ④ 就业方向 - 核心技能 tag 同一水平线 */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px 80px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: "#fff", textAlign: "center", marginBottom: 12 }}>
          <span style={{ background: "linear-gradient(135deg, #00ff88, #00f5ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>就业方向</span>
        </h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", textAlign: "center", marginBottom: 40 }}>
          完成课程体系学习后，你将具备以下岗位的核心竞争力
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, alignItems: "stretch" }}>
          {careerPaths.map((career, i) => (
            <GlassCard
              key={i}
              hoverable
              glowColor={i === 0 ? "cyan" : i === 1 ? "purple" : i === 2 ? "cyan" : "green"}
              style={{
                padding: "32px 28px",
                borderTop: `3px solid ${career.color}`,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* 标题行 */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{career.title}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>参考薪资范围</div>
                </div>
                <div style={{ fontSize: 20, fontWeight: 800, color: career.color, fontFamily: "var(--font-mono)" }}>{career.salary}</div>
              </div>

              {/* 描述 - 固定高度保证对齐 */}
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 20, minHeight: 48 }}>
                {career.desc}
              </div>

              {/* 弹性填充，将技能区推到底部 */}
              <div style={{ flex: 1 }} />

              {/* 核心技能 - 固定在底部同一水平线 */}
              <div style={{ marginTop: "auto" }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)", marginBottom: 10 }}>核心技能</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {career.skills.map((s) => (
                    <span key={s} style={{ fontSize: 13, padding: "6px 14px", borderRadius: 8, background: `${career.color}12`, color: career.color, border: `1px solid ${career.color}25`, fontWeight: 500 }}>{s}</span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ⑤ 课程特色 */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px 80px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: "#fff", textAlign: "center", marginBottom: 48 }}>
          <span style={{ background: "linear-gradient(135deg, #ec4899, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>课程特色</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {features.map((f, i) => (
            <GlassCard key={i} hoverable glowColor={["cyan", "purple", "green", "blue"][i]} style={{ textAlign: "center", padding: "32px 20px" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>{f.icon}</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{f.title}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{f.desc}</div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ⑥ CTA */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 100px", textAlign: "center" }}>
        <GlassCard hoverable={false} style={{ padding: "60px 48px", background: "linear-gradient(135deg, rgba(0,245,255,0.05), rgba(139,92,246,0.05))", border: "1px solid rgba(0,245,255,0.2)" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12, color: "#fff" }}>准备好开启学习之旅了吗？</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", marginBottom: 32 }}>预约免费试听，体验我们的课程质量与教学方式</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{ padding: "14px 36px", fontSize: 16, fontWeight: 600, color: "#050510", background: "linear-gradient(135deg, #00f5ff, #8b5cf6)", borderRadius: 12, border: "none", cursor: "pointer", boxShadow: "0 0 40px rgba(0,245,255,0.3), 0 8px 32px rgba(0,0,0,0.3)", transition: "all 0.3s ease" }}
              onMouseEnter={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 0 60px rgba(0,245,255,0.4), 0 12px 40px rgba(0,0,0,0.4)"; }}
              onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 0 40px rgba(0,245,255,0.3), 0 8px 32px rgba(0,0,0,0.3)"; }}
            
              onClick={() => onShowQR && onShowQR("trial")}
            >试听课程</button>
            <button style={{ padding: "14px 36px", fontSize: 16, fontWeight: 500, color: "#fff", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12, cursor: "pointer", transition: "all 0.3s ease" }}
              onMouseEnter={(e) => { e.target.style.background = "rgba(255,255,255,0.1)"; e.target.style.borderColor = "rgba(0,245,255,0.3)"; }}
              onMouseLeave={(e) => { e.target.style.background = "rgba(255,255,255,0.05)"; e.target.style.borderColor = "rgba(255,255,255,0.15)"; }}
            onClick={() => onShowQR && onShowQR("consult")} >咨询课程顾问</button>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
