import React, { useState, useMemo } from "react";
import StudentCard from "./StudentCard";

/**
 * StudentTicker
 * 无缝滚动学员卡片（桌面横滚 / 移动竖滚）
 */
export default function StudentTicker({
  title = "AI学员去向",
  subtitle = "",
  students = [],
  speed = 1,
  direction = "left",
  pauseOnHover = true,
}) {
  const [paused, setPaused] = useState(false);

  // 将数据复制一份实现无缝循环
  const doubled = useMemo(() => [...students, ...students], [students]);

  // 动画时长：数据越多越慢，speed 越大越快
  const duration = Math.max(20, (students.length * 8) / speed);

  return (
    <div className="stu-ticker">
      {/* Header */}
      <div className="stu-ticker__header">
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <h2 className="stu-ticker__title">{title}</h2>
          {subtitle && <span className="stu-ticker__subtitle">{subtitle}</span>}
        </div>
        <button
          className="stu-ticker__toggle"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "继续滚动" : "暂停滚动"}
        >
          {paused ? "▶ 继续" : "⏸ 暂停"}
        </button>
      </div>

      {/* Ticker */}
      <div
        className="stu-ticker__viewport"
        data-paused={pauseOnHover ? undefined : paused ? "true" : "false"}
        onMouseEnter={() => pauseOnHover && setPaused(true)}
        onMouseLeave={() => pauseOnHover && setPaused(false)}
      >
        <div
          className="stu-ticker__track"
          style={{
            "--duration": `${duration}s`,
            animationDirection: direction === "right" ? "reverse" : "normal",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          <div className="stu-ticker__list">
            {doubled.map((s, i) => (
              <StudentCard key={`${s.id}-${i}`} student={s} />
            ))}
          </div>
          {/* 第二份用于无缝衔接 */}
          <div className="stu-ticker__list" aria-hidden="true">
            {doubled.map((s, i) => (
              <StudentCard key={`${s.id}-dup-${i}`} student={s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
