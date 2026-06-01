T1: apps/web/package.json 不是合法 JSON，内容是占位符，无法 compile。因此 monorepo 的 web app 无法安装依赖或启动，虽然整体架构目录存在，但没有对应可运行结果。

T2 debate-or-vote final: Docker Compose 能拉取部分基础镜像，但完整启动在构建阶段失败。实际执行 docker compose up -d 时，首先报错 frontend 构建目录不存在；单独验证 backend build 时也会报 backend/Dockerfile 不存在。项目 README/Compose 描述了 Next.js frontend、FastAPI backend、runner、nginx、Gitea 等 full-stack 架构，但交付目录实际只有 backend 和 compose 文件，缺少 frontend、runner-service 以及 backend Dockerfile。因此无法原样启动完整 demo。

T3: 缺前端源码和 backend 缺文件而失败。这个可以在记录里写成：有 monorepo 架构和大量 backend 类型/API 设计，但缺少可运行前端和部分 backend 基础文件，不是完整可运行结果。

T7：latex 信息很足但无法 compile（和得分 23/27 一致，很多内容都有就是没法 compile）。因此更适合作为内容草稿/结构参考，而不是最终可渲染 PDF。

T4: 不是静态 HTML，也不是浏览器 app；它是 TypeScript 终端 demo。内容设计和 clean architecture 比较完整，会在 terminal 里演示 guest/host/admin、booking、approval、issue、review 和 agent negotiation，但没有 UI 界面和前端。