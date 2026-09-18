import React, { useState, useMemo, useCallback } from "react";
import GlassCard from "./GlassCard";

// 方向渐变色映射
const trackGradients = {
  "AI全栈": { from: "#00f5ff", to: "#0088ff", border: "rgba(0,245,255,0.3)" },
  "Agent": { from: "#8b5cf6", to: "#6366f1", border: "rgba(139,92,246,0.3)" },
  "AI漫剧": { from: "#ec4899", to: "#f43f5e", border: "rgba(236,72,153,0.3)" },
};

// 标签颜色映射
const tagColors = {
  "AI全栈": { bg: "rgba(0,245,255,0.12)", color: "#00f5ff", border: "rgba(0,245,255,0.25)" },
  "Agent": { bg: "rgba(139,92,246,0.12)", color: "#8b5cf6", border: "rgba(139,92,246,0.25)" },
  "AI漫剧": { bg: "rgba(236,72,153,0.12)", color: "#ec4899", border: "rgba(236,72,153,0.25)" },
  "已入职": { bg: "rgba(0,255,136,0.12)", color: "#00ff88", border: "rgba(0,255,136,0.25)" },
  "实习转正": { bg: "rgba(245,158,11,0.12)", color: "#f59e0b", border: "rgba(245,158,11,0.25)" },
  "实习": { bg: "rgba(59,130,246,0.12)", color: "#3b82f6", border: "rgba(59,130,246,0.25)" },
};

// 姓名脱敏
const maskName = (name) => {
  if (!name || name.length < 2) return name || "?";
  return name[0] + "*" + name[name.length - 1];
};

// 卡片尺寸配置
const sizeConfig = {
  small: { width: 180, height: 240, photoHeight: 160 },
  medium: { width: 220, height: 280, photoHeight: 200 },
  large: { width: 260, height: 320, photoHeight: 240 },
};

// ==================== 单张照片卡片 ====================
function PhotoCard({ student, onShowSalary, onShowDetail }) {
  const [isHovered, setIsHovered] = useState(false);
  const initials = (student.name || "?").slice(0, 1);
  const gradient = trackGradients[student.track] || trackGradients["AI全栈"];
  const size = sizeConfig[student.photoSize] || sizeConfig.medium;
  const rotation = student.rotation || 0;
  const zIndex = student.zIndex || 1;

  const handleShowSalary = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    onShowSalary(student);
  }, [student, onShowSalary]);

  return (
    <div
      style={{
        position: "relative",
        zIndex: isHovered ? 100 : zIndex,
        transform: `rotate(${isHovered ? 0 : rotation}deg) ${isHovered ? "scale(1.05)" : "scale(1)"}`,
        transition: "all 0.4s cubic-bezier(0.2, 0.65, 0.3, 0.9)",
        cursor: "pointer",
        marginBottom: 24,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onShowDetail(student)}
    >
      <div
        style={{
          width: size.width,
          background: "rgba(15, 15, 35, 0.7)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: isHovered
            ? `1px solid ${gradient.border}`
            : "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: isHovered
            ? `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${gradient.from}20`
            : "0 4px 20px rgba(0,0,0,0.3)",
          transition: "all 0.4s cubic-bezier(0.2, 0.65, 0.3, 0.9)",
        }}
      >
        {/* 照片区域 */}
        <div
          style={{
            width: "100%",
            height: size.photoHeight,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {student.avatar ? (
            <img
              src={student.avatar}
              alt={maskName(student.name)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          ) : (
            /* 占位渐变 + 首字母 */
            <div
              style={{
                width: "100%",
                height: "100%",
                background: `linear-gradient(135deg, ${gradient.from}30, ${gradient.to}30)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {/* 装饰性网格 */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `
                    linear-gradient(${gradient.from}08 1px, transparent 1px),
                    linear-gradient(90deg, ${gradient.from}08 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                }}
              />
              {/* 首字母 */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#fff",
                  fontFamily: "var(--font-mono)",
                  boxShadow: `0 8px 24px ${gradient.from}40`,
                }}
              >
                {initials}
              </div>
            </div>
          )}

          {/* 悬浮时显示的遮罩信息 */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "12px 14px",
              background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.3s ease",
            }}
          >
            <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 2 }}>
              {maskName(student.name)}
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
              {student.school} · {student.grade}
            </div>
          </div>
        </div>

        {/* 信息区域 */}
        <div style={{ padding: "14px 16px" }}>
          {/* 姓名 */}
          <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 6 }}>
            {maskName(student.name)}
          </div>

          {/* 学校年级 */}
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginBottom: 12 }}>
            {student.school} · {student.grade}
          </div>

          {/* 企业 + 薪资 */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginBottom: 2 }}>入职企业</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: gradient.from }}>{student.company}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginBottom: 2 }}>薪资</div>
              <button
                onClick={handleShowSalary}
                style={{
                  fontSize: 10,
                  padding: "2px 8px",
                  borderRadius: 4,
                  background: `${gradient.from}15`,
                  border: `1px solid ${gradient.from}25`,
                  color: gradient.from,
                  cursor: "pointer",
                  fontWeight: 600,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = `${gradient.from}25`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = `${gradient.from}15`;
                }}
              >
                ****
              </button>
            </div>
          </div>

          {/* 标签 */}
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            {(student.tags || []).slice(0, 2).map((t) => {
              const style = tagColors[t] || { bg: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)", border: "rgba(255,255,255,0.1)" };
              return (
                <span
                  key={t}
                  style={{
                    fontSize: 10,
                    padding: "2px 8px",
                    borderRadius: 999,
                    background: style.bg,
                    color: style.color,
                    border: `1px solid ${style.border}`,
                    fontWeight: 600,
                  }}
                >
                  {t}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== 瀑布流布局 ====================
function MasonryLayout({ children, columns = 4, gap = 24 }) {
  const columnArrays = useMemo(() => {
    const arr = Array.from({ length: columns }, () => []);
    React.Children.toArray(children).forEach((child, i) => {
      arr[i % columns].push(child);
    });
    return arr;
  }, [children, columns]);

  return (
    <div style={{ display: "flex", gap, alignItems: "flex-start" }}>
      {columnArrays.map((col, i) => (
        <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {col}
        </div>
      ))}
    </div>
  );
}

// ==================== 主组件 ====================
export default function StudentPhotoWall({ students, onShowSalary, columns = 4 }) {
  const [showDetail, setShowDetail] = useState(null);

  // 预处理：为每个学生分配随机属性
  const processedStudents = useMemo(() => {
    return students.map((s, i) => {
      // 随机尺寸
      const sizes = ["small", "medium", "medium", "medium", "large"];
      const photoSize = s.photoSize || sizes[i % sizes.length];

      // 随机倾斜角度
      const rotation = s.rotation !== undefined ? s.rotation : (() => {
        const base = (Math.random() - 0.5) * 6; // -3 ~ +3
        const extra = Math.random() > 0.7 ? (Math.random() > 0.5 ? 4 : -4) : 0;
        return Math.round((base + extra) * 10) / 10;
      })();

      // 随机层级
      const zIndex = s.zIndex || Math.floor(Math.random() * 10) + 1;

      return { ...s, photoSize, rotation, zIndex };
    });
  }, [students]);

  return (
    <>
      <MasonryLayout columns={columns} gap={24}>
        {processedStudents.map((student) => (
          <PhotoCard
            key={student.id}
            student={student}
            onShowSalary={onShowSalary}
            onShowDetail={setShowDetail}
          />
        ))}
      </MasonryLayout>

      {/* 详情弹窗 */}
      {showDetail && (
        <PhotoDetailModal student={showDetail} onClose={() => setShowDetail(null)} onShowSalary={onShowSalary} />
      )}
    </>
  );
}

// ==================== 详情弹窗 ====================
function PhotoDetailModal({ student, onClose, onShowSalary }) {
  if (!student) return null;
  const gradient = trackGradients[student.track] || trackGradients["AI全栈"];

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 420,
          background: "rgba(15, 15, 40, 0.95)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: `1px solid ${gradient.border}`,
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: `0 0 80px ${gradient.from}15, 0 20px 60px rgba(0,0,0,0.5)`,
        }}
      >
        {/* 顶部发光线 */}
        <div
          style={{
            height: 2,
            background: `linear-gradient(90deg, transparent, ${gradient.from}, transparent)`,
          }}
        />

        {/* 照片区域 */}
        <div
          style={{
            width: "100%",
            height: 240,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {student.avatar ? (
            <img
              src={student.avatar}
              alt={maskName(student.name)}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: `linear-gradient(135deg, ${gradient.from}30, ${gradient.to}30)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 20,
                  background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 36,
                  fontWeight: 800,
                  color: "#fff",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {(student.name || "?").slice(0, 1)}
              </div>
            </div>
          )}

          {/* 关闭按钮 */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              fontSize: 18,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(10px)",
            }}
          >
            ✕
          </button>
        </div>

        {/* 信息区域 */}
        <div style={{ padding: "24px 28px" }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
            {maskName(student.name)}
          </div>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 20 }}>
            {student.school} · {student.grade}
          </div>

          {/* 企业 + 薪资 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 18px",
              background: "rgba(255,255,255,0.03)",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.06)",
              marginBottom: 16,
            }}
          >
            <div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginBottom: 4 }}>入职企业</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: gradient.from }}>{student.company}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginBottom: 4 }}>薪资</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-mono)" }}>****</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                    setTimeout(() => onShowSalary(student), 100);
                  }}
                  style={{
                    fontSize: 11,
                    padding: "4px 12px",
                    borderRadius: 6,
                    background: `${gradient.from}15`,
                    border: `1px solid ${gradient.from}25`,
                    color: gradient.from,
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  查看
                </button>
              </div>
            </div>
          </div>

          {/* 标签 */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {(student.tags || []).map((t) => {
              const style = tagColors[t] || { bg: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)", border: "rgba(255,255,255,0.1)" };
              return (
                <span
                  key={t}
                  style={{
                    fontSize: 12,
                    padding: "4px 12px",
                    borderRadius: 999,
                    background: style.bg,
                    color: style.color,
                    border: `1px solid ${style.border}`,
                    fontWeight: 600,
                  }}
                >
                  {t}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
