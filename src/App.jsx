import React, { useEffect, useState, useCallback } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import GlassCard from "./components/GlassCard";
import StudentTicker from "./components/student-ticker/StudentTicker";
import CoursePage from "./components/CoursePage";
import StudentPage, { SalaryModal } from "./components/StudentPage";
import TeacherQRModal from "./components/TeacherQRModal";
import ServicePage from "./components/ServicePage";
import AboutPage from "./components/AboutPage";
import DrawerMenu from "./components/DrawerMenu";
import useResponsive from "./hooks/useResponsive";
import "./components/student-ticker/StudentTicker.css";
import logoImg from "./assets/images/logo-ai.png";
import config from "./config/siteConfig.json";

const TechIcon = ({ type }) => {
  const icons = {
    students: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    school: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" /></svg>,
    company: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
    satisfaction: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>,
  };
  return icons[type] || null;
};

// ==================== 首页 ====================
function HomePage({ onNavigate, onShowQR, isMobile }) {
  const homeStats = [
    { ...config.stats.students, icon: "students", color: "#00f5ff" },
    { ...config.stats.schools, icon: "school", color: "#8b5cf6" },
    { ...config.stats.companies, icon: "company", color: "#00ff88" },
    { ...config.stats.satisfaction, icon: "satisfaction", color: "#ec4899" },
  ];

  return (
    <>
      {/* Hero */}
      <header style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", padding: isMobile ? "120px 20px 60px" : "160px 24px 100px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: isMobile ? "6px 14px" : "8px 20px", fontSize: isMobile ? 11 : 13, fontWeight: 600, color: "#00f5ff", background: "rgba(0,245,255,0.1)", border: "1px solid rgba(0,245,255,0.2)", borderRadius: 999, marginBottom: isMobile ? 20 : 32, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00f5ff", boxShadow: "0 0 10px #00f5ff" }} />
          AI Coding Training
        </div>
        <h1 style={{ fontSize: isMobile ? 36 : 64, fontWeight: 800, lineHeight: 1.15, marginBottom: isMobile ? 16 : 24, letterSpacing: "-0.02em" }}>
          <span style={{ color: "#ffffff" }}>构建面向未来的</span><br />
          <span style={{ background: "linear-gradient(135deg, #00f5ff 0%, #8b5cf6 50%, #00ff88 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", backgroundSize: "200% 200%", animation: "gradient-shift 4s ease infinite" }}>AI编程能力</span>
        </h1>
        <p style={{ fontSize: isMobile ? 15 : 18, color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: `0 auto ${isMobile ? 32 : 48}px`, lineHeight: 1.8 }}>
          从基础到工程化落地，系统性培养 AI 全栈开发能力。<br />学员涵盖国内各大高校，入职头部互联网企业。
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", flexDirection: isMobile ? "column" : "row", alignItems: "center" }}>
          <button onClick={() => onShowQR("trial")} style={{ padding: isMobile ? "14px 0" : "16px 36px", fontSize: 16, fontWeight: 600, color: "#050510", background: "linear-gradient(135deg, #00f5ff, #00d4ff)", borderRadius: 12, border: "none", cursor: "pointer", transition: "all 0.3s ease", boxShadow: "0 0 40px rgba(0,245,255,0.4), 0 8px 32px rgba(0,0,0,0.3)", width: isMobile ? "85%" : "auto" }}>试听课程</button>
          <button onClick={() => onNavigate("courses")} style={{ padding: isMobile ? "14px 0" : "16px 36px", fontSize: 16, fontWeight: 500, color: "#ffffff", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12, cursor: "pointer", transition: "all 0.3s ease", width: isMobile ? "85%" : "auto" }}>查看课程体系</button>
        </div>
        {!isMobile && (
          <>
            <div style={{ position: "absolute", top: "20%", left: "5%", width: 120, height: 120, borderRadius: 20, background: "linear-gradient(135deg, rgba(0,245,255,0.1), rgba(139,92,246,0.1))", border: "1px solid rgba(0,245,255,0.2)", backdropFilter: "blur(10px)", animation: "float 6s ease-in-out infinite", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00f5ff" strokeWidth="1"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
            </div>
            <div style={{ position: "absolute", top: "30%", right: "8%", width: 100, height: 100, borderRadius: "50%", background: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(236,72,153,0.15))", border: "1px solid rgba(139,92,246,0.2)", backdropFilter: "blur(10px)", animation: "float 8s ease-in-out infinite reverse", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
            </div>
          </>
        )}
      </header>

      {/* 学员滚动 */}
      <section style={{ position: "relative", zIndex: 10 }}>
        <StudentTicker title="AI学员去向" subtitle="学校 · 年级 · 就业公司" students={config.students} speed={1} direction="left" pauseOnHover />
      </section>

      {/* 统计 */}
      <section style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", padding: isMobile ? "40px 16px" : "80px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: isMobile ? 12 : 24 }}>
          {homeStats.map((s) => (
            <GlassCard key={s.label} hoverable glowColor={s.color === "#00f5ff" ? "cyan" : s.color === "#8b5cf6" ? "purple" : "green"} style={{ textAlign: "center", padding: isMobile ? "20px 12px" : "32px 24px" }}>
              <div style={{ width: isMobile ? 36 : 48, height: isMobile ? 36 : 48, margin: `0 auto ${isMobile ? 8 : 16}px`, borderRadius: isMobile ? 8 : 12, background: s.color + "15", border: "1px solid " + s.color + "30", display: "flex", alignItems: "center", justifyContent: "center", color: s.color }}><TechIcon type={s.icon} /></div>
              <div style={{ fontSize: isMobile ? 28 : 40, fontWeight: 800, color: s.color, lineHeight: 1.1, marginBottom: isMobile ? 4 : 8, fontFamily: "var(--font-mono)" }}>{s.num}</div>
              <div style={{ fontSize: isMobile ? 12 : 14, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{s.label}</div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: "relative", zIndex: 10, maxWidth: 800, margin: "0 auto", padding: isMobile ? "40px 16px" : "80px 24px", textAlign: "center" }}>
        <GlassCard hoverable={false} style={{ padding: isMobile ? "36px 20px" : "60px 48px", background: "linear-gradient(135deg, rgba(0,245,255,0.05), rgba(139,92,246,0.05))", border: "1px solid rgba(0,245,255,0.2)" }}>
          <h2 style={{ fontSize: isMobile ? 22 : 32, fontWeight: 700, marginBottom: isMobile ? 10 : 16, color: "#ffffff" }}>开启你的 AI 编程之旅</h2>
          <p style={{ fontSize: isMobile ? 14 : 16, color: "rgba(255,255,255,0.6)", marginBottom: isMobile ? 20 : 32, lineHeight: 1.7 }}>加入{config.company.shortName}，与全国优秀学员一起，掌握前沿 AI 技术，赢在职业起跑线。</p>
          <button onClick={() => onShowQR("consult")} style={{ padding: isMobile ? "14px 0" : "16px 48px", fontSize: 16, fontWeight: 600, color: "#050510", background: "linear-gradient(135deg, #00f5ff, #8b5cf6)", borderRadius: 12, border: "none", cursor: "pointer", transition: "all 0.3s ease", boxShadow: "0 0 40px rgba(0,245,255,0.3), 0 8px 32px rgba(0,0,0,0.3)", width: isMobile ? "85%" : "auto" }}>立即咨询</button>
        </GlassCard>
      </section>
    </>
  );
}

// ==================== 主应用 ====================
export default function App() {
  const { isMobile } = useResponsive();
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [salaryModal, setSalaryModal] = useState(null);
  const [qrModalVariant, setQrModalVariant] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const navItems = [
    { label: "首页", page: "home" },
    { label: "课程体系", page: "courses" },
    { label: "学员成果", page: "students" },
    { label: "企业服务", page: "services" },
    { label: "关于我们", page: "about" },
  ];

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <AnimatedBackground />

      {/* Navigation */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? "rgba(5,5,16,0.95)" : "rgba(5,5,16,0.6)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent", transition: "all 0.3s ease" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px", height: isMobile ? 60 : 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => navigateTo("home")}>
            <img src={logoImg} alt={config.company.shortName} style={{ height: isMobile ? 32 : 40, width: "auto", display: "block", objectFit: "contain" }} />
            <span style={{ fontSize: isMobile ? 17 : 20, fontWeight: 700, color: "#ffffff", letterSpacing: "0.05em" }}>{config.company.shortName}</span>
          </div>

          {/* 桌面端导航 */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 36, fontSize: 15, fontWeight: 500 }}>
              {navItems.map((item) => (
                <a key={item.label} href="#" onClick={(e) => { e.preventDefault(); navigateTo(item.page); }}
                  style={{ color: currentPage === item.page ? "#00f5ff" : "rgba(255,255,255,0.7)", textDecoration: "none", transition: "color 0.2s ease", paddingBottom: 4, borderBottom: currentPage === item.page ? "2px solid #00f5ff" : "2px solid transparent" }}
                  onMouseEnter={(e) => { if (currentPage !== item.page) e.target.style.color = "#00f5ff"; }}
                  onMouseLeave={(e) => { if (currentPage !== item.page) e.target.style.color = "rgba(255,255,255,0.7)"; }}
                >{item.label}</a>
              ))}
              <button onClick={() => setQrModalVariant("trial")} style={{ padding: "10px 24px", fontSize: 14, fontWeight: 600, color: "#050510", background: "linear-gradient(135deg, #00f5ff, #00d4ff)", borderRadius: 8, border: "none", cursor: "pointer", transition: "all 0.2s ease", boxShadow: "0 0 20px rgba(0,245,255,0.3)" }}
                onMouseEnter={(e) => { e.target.style.boxShadow = "0 0 30px rgba(0,245,255,0.5)"; e.target.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.target.style.boxShadow = "0 0 20px rgba(0,245,255,0.3)"; e.target.style.transform = "translateY(0)"; }}
              >试听课程</button>
            </div>
          )}

          {/* 手机端汉堡按钮 */}
          {isMobile && (
            <button
              onClick={() => setDrawerOpen(true)}
              style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5, padding: 0 }}
            >
              <span style={{ width: 20, height: 2, background: "#fff", borderRadius: 1, display: "block" }} />
              <span style={{ width: 20, height: 2, background: "#fff", borderRadius: 1, display: "block" }} />
              <span style={{ width: 14, height: 2, background: "#00f5ff", borderRadius: 1, display: "block" }} />
            </button>
          )}
        </div>
      </nav>

      {/* 手机端抽屉菜单 */}
      {isMobile && (
        <DrawerMenu
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          navItems={navItems}
          currentPage={currentPage}
          onNavigate={navigateTo}
          onShowQR={setQrModalVariant}
        />
      )}

      {/* Page Content */}
      {currentPage === "home" && <HomePage onNavigate={navigateTo} onShowQR={setQrModalVariant} isMobile={isMobile} />}
      {currentPage === "courses" && <CoursePage onShowQR={setQrModalVariant} isMobile={isMobile} />}
      {currentPage === "students" && <StudentPage onShowSalary={setSalaryModal} onShowQR={setQrModalVariant} isMobile={isMobile} />}
      {currentPage === "services" && <ServicePage onShowQR={setQrModalVariant} onNavigate={navigateTo} isMobile={isMobile} />}
      {currentPage === "about" && <AboutPage onShowQR={setQrModalVariant} isMobile={isMobile} />}

      {/* Modals */}
      {salaryModal && <SalaryModal student={salaryModal} onClose={() => setSalaryModal(null)} />}
      {qrModalVariant && <TeacherQRModal variant={qrModalVariant} onClose={() => setQrModalVariant(null)} />}

      {/* Footer */}
      <footer style={{ position: "relative", zIndex: 10, textAlign: "center", padding: isMobile ? "24px 16px" : "40px 24px", fontSize: 13, color: "rgba(255,255,255,0.4)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ marginBottom: 8 }}>{config.company.icp}</div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>{config.company.footerTags.join(" · ")}</div>
      </footer>
    </div>
  );
}
