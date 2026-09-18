# React 学员滚动组件使用说明

## 目录结构
- `src/components/student-ticker/StudentCard.jsx`
- `src/components/student-ticker/StudentTicker.jsx`
- `src/components/student-ticker/StudentTicker.css`
- `src/data/students.sample.json`

## 快速使用
```jsx
import StudentTicker from "./components/student-ticker/StudentTicker";
import students from "./data/students.sample.json";
import "./components/student-ticker/StudentTicker.css";

export default function Home() {
  return (
    <StudentTicker
      title="AI学员去向"
      subtitle="学校 + 年级 + 就业公司"
      students={students}
      speed={1}
      direction="left"
      pauseOnHover
    />
  );
}
```

## Props
- `title`: 模块标题
- `subtitle`: 副标题
- `students`: 学员数组
- `speed`: 滚动速度，值越大越快（默认 1）
- `direction`: `left` | `right`（默认 left）
- `pauseOnHover`: 鼠标悬浮是否暂停（默认 true）

## 数据字段
单条学员对象建议字段：
- `id`
- `name`
- `avatar`
- `school`
- `grade`
- `company`
- `tags`（可选）

## 样式
直接引入 `StudentTicker.css`，样式已兼容 Ivory + 科技青体系。

