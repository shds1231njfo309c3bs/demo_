T1: 类似 ScaleD，是一个比较完整的 full-stack TexForge 架构，后端、数据库、Redis、MinIO、LaTeX compiler worker 都比较完善，也可以通过 Docker build 起来。但原始前端源码缺少很多页面和 UI 组件，导致无法展示完整原始界面；目前只能用自生成的轻量入口页维持镜像可运行，所以不算有对应的完整展示结果。


T3: Notion 架构十分完善，function 很多，但 docker compose 起不来。主要是 compose/build 配置和实际文件不完全匹配，导致服务无法完整启动；因此没有对应可稳定展示的运行结果。
