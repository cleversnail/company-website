import React from "react";

/**
 * StudentCard
 * - 头像
 * - 姓名（可脱敏）
 * - 学校 + 年级
 * - 就业公司
 */
export default function StudentCard({ student }) {
  const {
    name,
    avatar,
    school,
    grade,
    company,
    tags = [],
  } = student || {};

  const initials = (name || "?")
    .replace(/同学/g, "")
    .slice(0, 1);

  return (
    <div className="stu-card">
      <div className="stu-card__left">
        {avatar ? (
          <img
            className="stu-card__avatar"
            src={avatar}
            alt={name || "学员头像"}
            loading="lazy"
          />
        ) : (
          <div className="stu-card__avatar stu-card__avatar--fallback">
            {initials}
          </div>
        )}
      </div>

      <div className="stu-card__right">
        <div className="stu-card__row1">
          <span className="stu-card__name">{name || "学员"}</span>
          {tags?.[0] && <span className="stu-card__tag">{tags[0]}</span>}
        </div>

        <div className="stu-card__row2">
          <span className="stu-card__school">{school}</span>
          <span className="stu-card__dot">·</span>
          <span className="stu-card__grade">{grade}</span>
        </div>

        <div className="stu-card__row3">
          <span className="stu-card__label">就业公司</span>
          <span className="stu-card__company">{company}</span>
        </div>
      </div>
    </div>
  );
}
