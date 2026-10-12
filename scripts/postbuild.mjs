import { copyFileSync, existsSync } from "fs";
import { join } from "path";

// 确保 CNAME 文件存在于 dist/ 中
const cnameSrc = join(process.cwd(), "public", "CNAME");
const cnameDest = join(process.cwd(), "dist", "CNAME");

if (existsSync(cnameSrc)) {
  copyFileSync(cnameSrc, cnameDest);
  console.log("✓ CNAME copied to dist/");
} else {
  console.warn("⚠ public/CNAME not found, skipping copy");
}

// 添加 .nojekyll 防止 GitHub Pages Jekyll 处理
const nojekyllDest = join(process.cwd(), "dist", ".nojekyll");
if (!existsSync(nojekyllDest)) {
  const { writeFileSync } = await import("fs");
  writeFileSync(nojekyllDest, "");
  console.log("✓ .nojekyll created in dist/");
}
