import React from "react";

/**
 * DrawerMenu - 侧边抽屉导航菜单（手机端）
 */
export default function DrawerMenu({ open, onClose, navItems, currentPage, onNavigate, onShowQR }) {
  return (
    <>
      {/* 遮罩 */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* 抽屉面板 */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "75vw",
          maxWidth: 320,
          height: "100vh",
          zIndex: 201,
          background: "rgba(10, 10, 30, 0.98)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderLeft: "1px solid rgba(255,255,255,0.08)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.2, 0.65, 0.3, 0.9)",
          display: "flex",
          flexDirection: "column",
          padding: "0",
          overflowY: "auto",
        }}
      >
        {/* 顶部关闭区 */}
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "16px 20px" }}>
          <button
            onClick={onClose}
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.7)",
              fontSize: 20,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>
        </div>

        {/* 导航项 */}
        <div style={{ flex: 1, padding: "8px 24px" }}>
          {navItems.map((item, i) => {
            const isActive = currentPage === item.page;
            return (
              <a
                key={item.label}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.page);
                  onClose();
                }}
                style={{
                  display: "block",
                  padding: "16px 0",
                  fontSize: 17,
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "#00f5ff" : "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  transition: "color 0.2s ease",
                }}
              >
                {item.label}
                {isActive && (
                  <span
                    style={{
                      display: "inline-block",
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#00f5ff",
                      marginLeft: 8,
                      boxShadow: "0 0 8px #00f5ff",
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* 底部按钮 */}
        <div style={{ padding: "24px" }}>
          <button
            onClick={() => { onShowQR("trial"); onClose(); }}
            style={{
              width: "100%",
              padding: "14px 0",
              fontSize: 15,
              fontWeight: 600,
              color: "#050510",
              background: "linear-gradient(135deg, #00f5ff, #00d4ff)",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 30px rgba(0,245,255,0.3)",
            }}
          >
            试听课程
          </button>
        </div>
      </div>
    </>
  );
}
