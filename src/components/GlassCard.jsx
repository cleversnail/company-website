import React from "react";

/**
 * GlassCard
 * 玻璃拟态卡片组件
 */
export default function GlassCard({
  children,
  className = "",
  hoverable = true,
  glowColor = "cyan",
  style = {},
  ...props
}) {
  const glowColors = {
    cyan: "rgba(0, 245, 255, 0.15)",
    purple: "rgba(139, 92, 246, 0.15)",
    green: "rgba(0, 255, 136, 0.15)",
    blue: "rgba(59, 130, 246, 0.15)",
  };

  const borderGlow = {
    cyan: "rgba(0, 245, 255, 0.3)",
    purple: "rgba(139, 92, 246, 0.3)",
    green: "rgba(0, 255, 136, 0.3)",
    blue: "rgba(59, 130, 246, 0.3)",
  };

  return (
    <div
      className={`glass-card ${hoverable ? "glass-card--hoverable" : ""} ${className}`}
      style={{
        background: "rgba(15, 15, 35, 0.6)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: `1px solid rgba(255, 255, 255, 0.1)`,
        borderRadius: "16px",
        padding: "24px",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease",
        ...style,
      }}
      {...props}
    >
      {/* Top border glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${borderGlow[glowColor]}, transparent)`,
        }}
      />
      {children}
    </div>
  );
}
