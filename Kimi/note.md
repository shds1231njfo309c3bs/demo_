T1: Docker / pnpm / Node 版本和 compose 配置存在问题，无法配置出可稳定运行的结果。主要问题是 full-stack TexForge 依赖 Postgres/Redis/LaTeX worker 等服务，生成项目里的 Docker Compose、worker replica/container_name、pnpm 版本和 Node 运行时没有完全对齐，所以没有对应可稳定展示结果。

T2: docker build不出来

T3: Kimi 的 Notion 是 Next.js 14 + Supabase + Liveblocks，Next 缺少组件 build 不出来，Liveblocks API key 也不好获取。整体还算完整，但因为依赖外部 Supabase/Liveblocks 配置，且本地构建有缺失组件，所以没有稳定可运行的对应结果。

T4: 可以本地跑起来，但它主要是 FastAPI backend/API 和 agent daemon，不是带前端 UI 的完整 web app。打开 `localhost:8000` 只能看到 JSON API response，没有 guest/host dashboard，所以不适合作为可录屏的前端展示结果。