import React, { useState, useMemo, useCallback } from "react";
import GlassCard from "./GlassCard";
import StudentPhotoWall from "./StudentPhotoWall";
import config from "../config/siteConfig.json";
import teacherQR from "../assets/images/teacher.png";
const studentsData = config.students;

// ==================== 薪资弹窗 ====================
export function SalaryModal({ student, onClose }) {
  if (!student) return null;
  const trackColors = { "AI全栈": "#00f5ff", "Agent": "#8b5cf6", "AI漫剧": "#ec4899" };
  const accentColor = trackColors[student.track] || "#00f5ff";

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", animation: "fadeIn 0.2s ease" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 380, background: "rgba(15,15,40,0.95)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "40px 32px 32px", textAlign: "center", position: "relative", boxShadow: `0 0 60px ${accentColor}20, 0 20px 60px rgba(0,0,0,0.5)` }}>
        <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: 1, background: `linear-gradient(90deg, transparent, ${accentColor}80, transparent)` }} />
        <button onClick={onClose} style={{ position: "absolute", top: 12, right: 16, width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)", fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
        <div style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 6 }}>薪资详情</div>
        <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 28 }}>{student.name} · {student.company}</div>
        <div style={{ width: 200, height: 200, margin: "0 auto 24px", borderRadius: 16, background: "#fff", overflow: "hidden", boxShadow: `0 0 30px ${accentColor}15`, border: "2px solid rgba(0,245,255,0.2)" }}>
          <img src={teacherQR} alt="老师微信二维码" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div style={{ fontSize: 15, fontWeight: 600, color: accentColor, marginBottom: 6 }}>扫码加入交流群</div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 24 }}>查看完整薪资信息与学员交流</div>
        <button onClick={onClose} style={{ width: "100%", padding: "12px 0", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, cursor: "pointer" }}>关闭</button>
      </div>
    </div>
  );
}

// ==================== 主页面 ====================
const PAGE_SIZE = 8;
const MAX_LOADS = 2;

export default function StudentPage({ onShowSalary, onShowQR, isMobile }) {
  const [activeFilter, setActiveFilter] = useState("全部");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loadCount, setLoadCount] = useState(0);

  const filters = ["全部", "AI全栈", "Agent", "AI漫剧"];

  const allFilteredStudents = useMemo(() => {
    if (activeFilter === "全部") return studentsData;
    return studentsData.filter((s) => s.track === activeFilter);
  }, [activeFilter]);

  const visibleStudents = useMemo(() => {
    return allFilteredStudents.slice(0, visibleCount);
  }, [allFilteredStudents, visibleCount]);

  const canLoadMore = loadCount < MAX_LOADS && visibleCount < allFilteredStudents.length;
  const reachedLimit = loadCount >= MAX_LOADS;
  const showAll = visibleCount >= allFilteredStudents.length && visibleStudents.length > PAGE_SIZE;

  const handleFilterChange = useCallback((filter) => {
    setActiveFilter(filter);
    setVisibleCount(PAGE_SIZE);
    setLoadCount(0);
  }, []);

  const handleLoadMore = useCallback(() => {
    if (loadCount < MAX_LOADS) {
      setVisibleCount((prev) => prev + PAGE_SIZE);
      setLoadCount((prev) => prev + 1);
    }
  }, [loadCount]);

  const stats = [
    { ...config.stats.students, color: "#00f5ff" },
    { ...config.stats.schools, color: "#8b5cf6" },
    { ...config.stats.companies, color: "#00ff88" },
    { ...config.stats.salaryGrowth, color: "#ec4899" },
  ];

  return (
    <div style={{ position: "relative", zIndex: 10 }}>
      {/* ① Hero */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: isMobile ? "100px 16px 40px" : "120px 24px 60px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 20px", fontSize: 13, fontWeight: 600, color: "#00ff88", background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.2)", borderRadius: 999, marginBottom: 28, letterSpacing: "0.1em" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00ff88", boxShadow: "0 0 10px #00ff88" }} />
          STUDENT SUCCESS
        </div>
        <h1 style={{ fontSize: isMobile ? 32 : 56, fontWeight: 800, lineHeight: 1.15, marginBottom: 20, color: "#fff" }}>学员成果</h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: "0 auto", lineHeight: 1.8 }}>真实数据，见证每一位学员的成长与蜕变</p>
      </section>

      {/* ② 数据统计条 */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: isMobile ? 12 : 20 }}>
          {stats.map((s) => (
            <GlassCard key={s.label} hoverable glowColor={s.color === "#00f5ff" ? "cyan" : s.color === "#8b5cf6" ? "purple" : "green"} style={{ textAlign: "center", padding: "28px 16px" }}>
              <div style={{ fontSize: 36, fontWeight: 800, color: s.color, lineHeight: 1.1, marginBottom: 6, fontFamily: "var(--font-mono)" }}>{s.num}</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{s.label}</div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ③ 筛选栏 */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 32px" }}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {filters.map((f) => (
            <button key={f} onClick={() => handleFilterChange(f)} style={{ padding: "8px 20px", fontSize: 14, fontWeight: 600, borderRadius: 999, cursor: "pointer", transition: "all 0.2s ease", background: activeFilter === f ? "rgba(0,245,255,0.15)" : "rgba(255,255,255,0.04)", color: activeFilter === f ? "#00f5ff" : "rgba(255,255,255,0.5)", border: activeFilter === f ? "1px solid rgba(0,245,255,0.3)" : "1px solid rgba(255,255,255,0.08)" }}>
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* ④ 学员照片墙 */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "20px 24px 40px" }}>
        <StudentPhotoWall students={visibleStudents} onShowSalary={onShowSalary} columns={isMobile ? 2 : 4} isMobile={isMobile} />
        {visibleStudents.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0", color: "rgba(255,255,255,0.4)", fontSize: 15 }}>暂无该方向学员数据</div>
        )}
      </section>

      {/* ⑤ 查看更多 / 达到上限提示 */}
      {canLoadMore && (
        <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 60px", textAlign: "center" }}>
          <button onClick={handleLoadMore} style={{ padding: "14px 48px", fontSize: 15, fontWeight: 600, color: "#00f5ff", background: "rgba(0,245,255,0.08)", border: "1px solid rgba(0,245,255,0.25)", borderRadius: 12, cursor: "pointer", transition: "all 0.3s ease", display: "inline-flex", alignItems: "center", gap: 8 }}
            onMouseEnter={(e) => { e.target.style.background = "rgba(0,245,255,0.15)"; e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 0 30px rgba(0,245,255,0.2)"; }}
            onMouseLeave={(e) => { e.target.style.background = "rgba(0,245,255,0.08)"; e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M8 3v10M3 8l5 5 5-5" /></svg>
            查看更多学员
            <span style={{ fontSize: 12, color: "rgba(0,245,255,0.6)" }}>({loadCount}/{MAX_LOADS})</span>
          </button>
        </section>
      )}

      {/* 达到最大加载次数 → 提示加群 */}
      {reachedLimit && (
        <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 60px", textAlign: "center" }}>
          <div
            onClick={() => onShowQR && onShowQR("group")}
            style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "16px 32px", background: "rgba(0,245,255,0.06)", border: "1px solid rgba(0,245,255,0.15)", borderRadius: 14, backdropFilter: "blur(10px)", cursor: "pointer", transition: "all 0.3s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,245,255,0.12)"; e.currentTarget.style.borderColor = "rgba(0,245,255,0.3)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,245,255,0.06)"; e.currentTarget.style.borderColor = "rgba(0,245,255,0.15)"; }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#00f5ff" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="10" cy="10" r="8" /><path d="M10 6v5M10 13.5v.5" />
            </svg>
            <span style={{ fontSize: 15, color: "rgba(255,255,255,0.7)" }}>查看更多数据请</span>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#00f5ff" }}>加入交流群</span>
          </div>
        </section>
      )}

      {/* 全部展示完成 */}
      {showAll && !reachedLimit && (
        <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 60px", textAlign: "center" }}>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.1)" }} />
            已展示全部 {allFilteredStudents.length} 位学员
            <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.1)" }} />
          </div>
        </section>
      )}

      {/* ⑥ CTA */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 100px", textAlign: "center" }}>
        <GlassCard hoverable={false} style={{ padding: "60px 48px", background: "linear-gradient(135deg, rgba(0,255,136,0.05), rgba(0,245,255,0.05))", border: "1px solid rgba(0,255,136,0.2)" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12, color: "#fff" }}>成为下一位优秀学员</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", marginBottom: 32 }}>加入蜗牛 AI，与全国优秀学员一起，开启你的 AI 开发之路</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => onShowQR && onShowQR("group")}
              style={{ padding: "14px 36px", fontSize: 16, fontWeight: 600, color: "#050510", background: "linear-gradient(135deg, #00ff88, #00f5ff)", borderRadius: 12, border: "none", cursor: "pointer", boxShadow: "0 0 40px rgba(0,255,136,0.3), 0 8px 32px rgba(0,0,0,0.3)", transition: "all 0.3s ease" }}
              onMouseEnter={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 0 60px rgba(0,255,136,0.4), 0 12px 40px rgba(0,0,0,0.4)"; }}
              onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 0 40px rgba(0,255,136,0.3), 0 8px 32px rgba(0,0,0,0.3)"; }}
            >加入交流群</button>
            <button
              onClick={() => onShowQR && onShowQR("trial")}
              style={{ padding: "14px 36px", fontSize: 16, fontWeight: 500, color: "#fff", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12, cursor: "pointer", transition: "all 0.3s ease" }}
              onMouseEnter={(e) => { e.target.style.background = "rgba(255,255,255,0.1)"; e.target.style.borderColor = "rgba(0,255,136,0.3)"; }}
              onMouseLeave={(e) => { e.target.style.background = "rgba(255,255,255,0.05)"; e.target.style.borderColor = "rgba(255,255,255,0.15)"; }}
            >试听课程</button>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
