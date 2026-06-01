T1: SeqCv winner 是 TexForge/Overleaf 类 full-stack LaTeX 平台，理论上可以用 Docker Compose 跑，但实际没有稳定跑起来。主要原因是生成项目里有多套入口（web/frontend/backend）且配置不一致。

T2 SeqCv: 目标上是 GitVault/GitHub Clone 类 full-stack 平台，README 和 docker-compose 描述了 backend、frontend、runner、Nginx、PostgreSQL、Redis、MinIO、Elasticsearch 等完整架构。但实际交付文件不完整：Compose 引用的 backend/Dockerfile、frontend、runner、nginx 都不存在；root 也没有可启动的 Next.js 页面入口；backend 还导入了多个不存在的 routes 和 GraphQL 文件。原样无法启动，也没有可录制的完整 demo 界面。

T4: 纯静态 HTML：角色切换、dashboard、proposal card、agent log 都能看，最容易直接打开录屏。但它主要是 standalone HTML/CSS/JS 模拟，没有真实 backend、数据库、持久化或服务端 agent loop，所以 audit 里涉及 full-stack 架构和真实后端能力的项会吃亏。