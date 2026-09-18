import React from "react";
import teacherQR from "../assets/images/teacher.png";

/**
 * TeacherQRModal
 * 通用老师二维码弹窗
 * 用于：加入交流群 / 试听课程 / 咨询课程顾问
 */
export default function TeacherQRModal({ onClose, variant = "group" }) {
  const titles = {
    group: "加入学员交流群",
    trial: "预约试听课程",
    consult: "咨询课程顾问",
  };

  const subtitles = {
    group: "扫码添加老师微信，加入学员交流群",
    trial: "扫码添加老师微信，预约免费试听",
    consult: "扫码添加课程顾问微信，获取详细课程方案",
  };

  const tagSets = {
    group: ["免费学习资料", "岗位内推", "直播答疑"],
    trial: ["免费试听", "课程答疑", "学习规划"],
    consult: ["课程方案", "学习路线", "优惠咨询"],
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.7)",
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
          width: 400,
          background: "rgba(15, 15, 40, 0.95)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 20,
          padding: "40px 32px 32px",
          textAlign: "center",
          position: "relative",
          boxShadow: "0 0 60px rgba(0,245,255,0.15), 0 20px 60px rgba(0,0,0,0.5)",
        }}
      >
        {/* 顶部发光线 */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "15%",
            right: "15%",
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(0,245,255,0.5), transparent)",
          }}
        />

        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 12,
            right: 16,
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.5)",
            fontSize: 16,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255,255,255,0.1)";
            e.target.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255,255,255,0.05)";
            e.target.style.color = "rgba(255,255,255,0.5)";
          }}
        >
          ✕
        </button>

        {/* 标题 */}
        <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
          {titles[variant]}
        </div>
        <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 28 }}>
          {subtitles[variant]}
        </div>

        {/* 二维码 */}
        <div
          style={{
            width: 220,
            height: 220,
            margin: "0 auto 24px",
            borderRadius: 16,
            background: "#ffffff",
            overflow: "hidden",
            boxShadow: "0 0 30px rgba(0,245,255,0.15), 0 8px 24px rgba(0,0,0,0.3)",
            border: "2px solid rgba(0,245,255,0.2)",
          }}
        >
          <img
            src={teacherQR}
            alt="老师微信二维码"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* 提示文字 */}
        <div style={{ fontSize: 15, fontWeight: 600, color: "#00f5ff", marginBottom: 6 }}>
          长按识别二维码
        </div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 24 }}>
          或截图后在微信中扫描
        </div>

        {/* 标签 */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 24 }}>
          {tagSets[variant].map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 12,
                padding: "4px 14px",
                borderRadius: 999,
                background: "rgba(0,245,255,0.08)",
                color: "rgba(0,245,255,0.8)",
                border: "1px solid rgba(0,245,255,0.15)",
                fontWeight: 500,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          style={{
            width: "100%",
            padding: "12px 0",
            fontSize: 14,
            fontWeight: 600,
            color: "rgba(255,255,255,0.5)",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 10,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255,255,255,0.08)";
            e.target.style.color = "rgba(255,255,255,0.7)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255,255,255,0.04)";
            e.target.style.color = "rgba(255,255,255,0.5)";
          }}
        >
          关闭
        </button>
      </div>
    </div>
  );
}
