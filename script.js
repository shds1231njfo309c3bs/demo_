const methods = ["ScaleD", "Claude", "Kimi", "Grok", "Debate", "Reconcile", "SeqCv"];
const paperTaskOrder = ["latex", "git", "notion", "rental", "fourier", "sorting", "bayesian"];

const statusMeta = {
  video: { label: "Video demo", className: "status-video" },
  artifact: { label: "Static artifact", className: "status-artifact" },
  limited: { label: "Limited", className: "status-limited" },
  missing: { label: "Missing", className: "status-missing" },
};

const pdfPageIntervalMs = 1800;
const pdfPreviewRootMargin = "160px 0px";

const prompts = {
  latex: String.raw`Build a full-stack, production-ready collaborative LaTeX editing platform called "TexForge", inspired by Overleaf. The goal is to replicate a complete cloud-based academic writing and publishing workflow with real-time collaboration, version control, and PDF rendering.

Core Features
- Projects & Files: Create/delete/archive projects, folder structure, multi-file LaTeX support, file upload/download, drag-and-drop organization, templates (IEEE, ACM, thesis, resume), project cloning and sharing.
- Editor: Rich LaTeX editor with syntax highlighting, auto-completion, linting, error highlighting, split view (code + PDF), forward/inverse search (SyncTeX), customizable themes, Vim/Emacs keybindings.
- Real-Time Collaboration: Multi-user live editing using CRDT (Yjs), cursor presence, user awareness (avatars, selections), inline comments, suggestion mode, version snapshots, conflict-free merging.
- Compilation Engine: On-demand and auto LaTeX compilation via Dockerized TeX Live, compile logs, error tracing, incremental builds, support for BibTeX/Biber, XeLaTeX, LuaLaTeX, PDF preview with live refresh.
- Version Control: Full document history, diff viewer for LaTeX, named versions, restore points, branching (lightweight), Git integration (optional sync with GitHub repos).
- Comments & Review: Inline comments, threaded discussions, resolve/unresolve, reviewer roles, track changes, suggestion acceptance/rejection.
- Templates & Gallery: Template marketplace (journal formats, CVs, reports), preview before use, community submissions, tagging and search.

Collaboration & Sharing
- Permissions: Owner/editor/viewer roles, link-based sharing, public/private projects, access expiration, organisation-level sharing.
- Teams & Organizations: Create orgs, shared project spaces, team permissions, academic lab workflows, admin roles.

Bibliography & References
- Reference Management: BibTeX editor, citation auto-complete, import from DOI/arXiv/Google Scholar, shared reference libraries, duplicate detection.
- Cross-Referencing: Auto label suggestions, reference validation, warnings for missing citations.

Output & Publishing
- PDF Export: Download compiled PDF, versioned exports, watermarking options.
- Journal Submission: Export bundles (ZIP with source), format validation for IEEE/ACM/Springer.

Additional Features: Global search across projects/files/comments/templates; semantic search for LaTeX commands and references; inline AI assistant (LaTeX generation, error fixing, NL-to-LaTeX, academic writing assistance); GitHub sync, Dropbox/Google Drive import, ORCID integration, arXiv submission helper; email/password + OAuth + 2FA authentication; real-time notifications; admin panel with user management, storage quotas, system monitoring; Dockerized LaTeX workers with Redis queue; dark/light mode, keyboard shortcuts, mobile-responsive UI.`,

  git: String.raw`Build a full-stack GitHub clone called "GitVault". The goal is to replicate GitHub's complete feature set as a production-ready web application. Build every feature listed below:

Core
- Repositories: Create/delete/fork/archive repos, public & private visibility, file browser, web editor, blame view, file history, raw view, download zip, topics/tags, releases, README rendering, license & .gitignore templates, repository insights, dependency graph, contributor graph, traffic analytics, language breakdown, network graph, compare branches/tags/commits.
- Git: Branch & tag management, commit history, commit diff viewer, merge strategies (merge/squash/rebase), conflict detection, protected branches, merge queues, auto-merge, CODEOWNERS support.
- Pull Requests: Open/close/merge PRs, draft PRs, inline code comments, suggested changes, review requests, approve/request changes/comment states, PR templates, required reviews, status checks, linked issues, PR diff viewer.
- Issues: Create/close/lock issues, labels, milestones, assignees, issue templates, pinned issues, issue linking, reactions, sorting & filtering.
- Discussions: Categories, Q&A with marked answers, reactions, pinning, locking.
- Projects: Kanban board, table view, roadmap/timeline view, custom fields, issue & PR linking, filters, project templates.
- Wiki: Create/edit/delete wiki pages, markdown rendering, page history, sidebar navigation.

CI/CD & Infrastructure
- Actions: YAML workflow parser, workflow runs with logs, job steps, self-hosted & cloud runners via Docker, workflow triggers (push/PR/schedule/manual), artifacts upload/download, environment variables & secrets, reusable workflows, deployment environments with protection rules, workflow badges.
- Packages: Container registry (Docker), npm, Maven, NuGet package hosting, version management, access control.
- Pages: Static site hosting from repo branch or /docs folder, custom domain support, HTTPS.

Security
- Dependabot alerts & auto PRs, CodeQL code scanning, secret scanning, private vulnerability reporting, security advisories, security policy (SECURITY.md), branch protection rules, required 2FA.

Platform
- Search: Global code search, semantic search, symbol search, search by repo/user/org/topic, filter by language/stars/date.
- Organizations: Create orgs, teams with granular permissions, team discussions, org-level secrets, member roles, billing management, audit log streaming.
- User Profiles: Avatar, bio, social links, contribution graph (heatmap), pinned repos, achievement badges, followers/following, stars, activity feed.
- Notifications: Web & email notifications, notification inbox, watching repos/issues/PRs, @mentions, custom notification routing.
- Authentication: Email/password, OAuth (GitHub/Google), 2FA (TOTP), SSO (SAML), personal access tokens, fine-grained tokens, SSH key management, GPG key management, session management.
- AI & Dev Tools: Inline AI code suggestions in web editor (Copilot equivalent); browser-based VS Code (code-server) tied to repos (Codespaces equivalent).
- Marketplace: List and install GitHub Apps, OAuth Apps, and Actions from a marketplace directory.
- Sponsors: User & org sponsorship tiers, payment integration, sponsor dashboard.
- API: Full REST API and GraphQL API, webhooks with event filtering, GitHub App support.
- Admin Panel: Site-wide admin dashboard, user management, org management, rate limiting, audit logs, system health monitoring.`,

  notion: String.raw`Build a full-stack Notion clone called "NoteFlow". The goal is to replicate Notion's complete feature set as a production-ready collaborative workspace web application. Build every feature listed below:

Workspace & Pages
- Create personal and team workspaces, nested pages, page icons, cover images, breadcrumbs, slash commands, page duplication, soft delete/trash, restore pages, favorites, recent pages, shared pages, page locking, full-width pages, small text mode, page comments, backlinks, synced blocks, table of contents, page history/versioning, page templates, page verification, published pages, SEO metadata, custom page URLs.

Editor
- Rich text editor with block-based editing. Support paragraphs, headings, bullet/numbered/to-do/toggle lists, quotes, callouts, dividers, code blocks with syntax highlighting, inline code, equations/LaTeX, tables, columns, embeds, bookmarks, images, videos, audio, PDFs, file uploads, mentions, dates, reminders, emoji, inline comments, annotations, text color/background color, drag-and-drop block reordering, multi-block selection, copy/paste with structure preservation, markdown shortcuts, slash menu, keyboard shortcuts, collaborative cursor presence, real-time multiplayer editing, offline draft recovery.

Collaboration
- Real-time collaboration across pages and databases, presence indicators, user cursors, inline comments, page discussions, threaded comments, comment resolution, mentions, task assignments, notifications, edit history, activity feed, permission-aware collaboration, shared links, guest access, invite by email, workspace roles, page-level permissions, database-level permissions, public sharing controls, domain-restricted sharing, expiring links.

Tasks & Project Management
- Task databases, assignees, due dates, priorities, status workflows, recurring tasks, reminders, dependencies, sub-items, project templates, dashboards, my tasks view, team task views, milestone tracking, timeline dependencies, progress tracking, linked project docs, calendar integration, workload views.

Search & Knowledge Management
- Global search across pages, databases, comments, and attachments. Full-text search, semantic search, filters by workspace/page/person/date/type, quick switcher, recent searches, backlinks, graph-like relationship discovery, search ranking, search snippets, search permissions trimming.

File & Media Management
- Upload and attach files to pages and database rows. Images, PDFs, docs, spreadsheets, video/audio embeds, bookmarks, preview cards, drag-and-drop upload, storage quotas, file version replacement, CDN delivery, signed URLs, permissions-aware file access.

Additional Features: In-app and email notifications for mentions, comments, assignments, shares, reminders, and due dates; email/password + OAuth + magic links + 2FA authentication, SSO/SAML, SCIM provisioning; import from Markdown/HTML/CSV/DOCX, export as Markdown/PDF/HTML/CSV/JSON with hierarchy preservation.`,

  rental: String.raw`Build a short-stay rental marketplace where guests and hosts each have a dedicated AI agent. The guest agent finds and manages stays; the host agent operates the property. Both agents propose actions that their human approves or rejects in one tap -- no action is taken without explicit consent. Deliver a working prototype demonstrating the full booking lifecycle and agent-to-agent interaction.

Roles
1. Guest -- books stays; approves or rejects guest agent proposals.
2. Guest Agent -- searches listings, manages bookings, handles check-in, monitors stays, escalates problems.
3. Host -- owns properties; approves or rejects host agent proposals.
4. Host Agent -- manages listings and pricing, responds to inquiries, coordinates turnovers, handles guest communication.
5. Admin -- sets marketplace rules, mediates disputes the agents cannot resolve.

Agent Loop (six-stage cycle for every agent):
1. Monitor -- continuously watch active bookings, listings, and messages.
2. Detect -- identify events requiring action (inquiries, pricing changes, conflicts, in-stay issues, review windows).
3. Propose -- present a concrete, ready-to-execute action to the human in plain language.
4. Approve -- human approves or rejects in one tap.
5. Act -- execute the approved action immediately.
6. Confirm -- update state and surface result; on failure, restart with a revised proposal.

Marketplace Capabilities: Listing creation and search/match; full booking lifecycle (inquiry -> booking -> check-in -> stay -> check-out -> review); multiple concurrent stays per guest and multiple properties per host; persistent state across repeat interactions.

Guest Agent Capabilities: Pre-trip search, compare, and propose bookings; during-stay monitoring and intervention proposals; post-stay handling of refunds, disputes, and reviews.

Host Agent Capabilities: Listing management and availability updates; dynamic pricing proposals; inquiry response and guest communication; turnover coordination; issue detection and escalation.

Agent-to-Agent Communication: Direct negotiation between guest and host agents (price, check-in time, special requests); dispute escalation path to admin; all exchanges visible to both humans in plain language.`,

  fourier: String.raw`Make a visual that explains the Fourier transform.

Requirements:
- Output a single self-contained SVG file.
- Should be clear and informative.`,

  sorting: String.raw`Create an animation showing how sorting works.

Requirements:
- Output a single self-contained SVG file.
- Should be educational.`,

  bayesian: String.raw`You are an expert in Bayesian statistics and LaTeX typesetting. Generate a single self-contained .tex file that compiles to a Beamer presentation explaining Bayesian inference to graduate students in a quantitative field.

Requirements:
- Use \documentclass{beamer} with a clean theme (e.g., metropolis, Madrid, or Singapore).
- All math via amsmath, amssymb; no inline images.
- The content must be self-contained.
- All diagrams via TikZ.`,
};

function pdfPages(slug, pageCount) {
  return Array.from({ length: pageCount }, (_, index) => `assets/pdf-previews/${slug}-p${index + 1}.jpg`);
}

const tasks = [
  {
    id: "sorting",
    short: "T6 Sorting",
    title: "T6: Sorting Algorithm Visualization",
    summary: "Visual algorithm output that can be inspected directly across all methods.",
    scaledOutputNote:
      "ScaleD demo shows: Bubble Sort bars synchronized with pseudocode-line highlighting, plus complexity/legend/progress panels and play/step/previous/reset/speed controls.",
    prompt: prompts.sorting,
    results: {
      ScaleD: {
        status: "artifact",
        media: {
          type: "svg-object",
          src: "assets/scaled-sorting.svg",
          title: "ScaleD sorting animation",
          aspect: "8 / 5",
        },
        note: "Complete SVG sorting animation artifact; embedded preview starts automatically.",
      },
      Claude: {
        status: "artifact",
        media: {
          type: "svg-object",
          src: "Claude/sorting_viz.svg",
          title: "Claude sorting visualization",
          aspect: "36 / 25",
          autoplayMethod: "startPlay",
        },
        note: "SVG visualization artifact.",
      },
      Kimi: {
        status: "artifact",
        media: {
          type: "svg-object",
          src: "Kimi/sorting-visualization.svg",
          title: "Kimi sorting visualization",
          aspect: "3 / 2",
          autoplayControl: "#btn-start",
        },
        note: "SVG visualization artifact.",
      },
      Grok: {
        status: "artifact",
        media: {
          type: "image",
          src: "assets/grok-sorting-preview.svg",
          href: "Grok/sorting_visualization.svg",
          title: "Grok sorting visualization",
        },
        note: "Static preview shown here; original SVG opens from the artifact link.",
      },
      Debate: {
        status: "artifact",
        media: {
          type: "svg-object",
          src: "Debate/sorting-visualization.svg",
          title: "Debate sorting visualization",
          aspect: "3 / 2",
          autoplayControl: "#btn-start",
        },
        note: "SVG visualization artifact.",
      },
      Reconcile: {
        status: "artifact",
        media: {
          type: "svg-object",
          src: "Reconcile/sorting-visualization.svg",
          title: "Reconcile sorting visualization",
          aspect: "45 / 31",
          autoplayControl: "#btn-play",
        },
        note: "SVG visualization artifact.",
      },
      SeqCv: {
        status: "artifact",
        media: {
          type: "svg-object",
          src: "SeqCv/sorting_visualization.svg",
          title: "SeqCv sorting visualization",
          aspect: "8 / 5",
          autoplayControl: "#btn-start",
        },
        note: "SVG visualization artifact.",
      },
    },
  },
  {
    id: "rental",
    short: "T4 Rental",
    title: "T4: Rental Platform + AI Agent",
    summary: "End-to-end product workflow with host, guest, dashboard, and agent-facing states.",
    scaledOutputNote:
      "ScaleD demo shows: platform admin analytics and a property-detail booking modal alongside agent proposal/approval cards and booking/status dashboards.",
    prompt: prompts.rental,
    results: {
      ScaleD: {
        status: "video",
        media: {
          type: "video",
          src: "assets/scaled-rental.mp4",
        },
        note: "Browser-facing rental workflow with a complete visual demo.",
      },
      Claude: {
        status: "video",
        media: { type: "video", src: "assets/claude-rental.mp4", fallback: "Claude/rental.gif" },
        note: "Recorded browser demo is available.",
      },
      Kimi: {
        status: "limited",
        note: "Backend/API and agent daemon can run, but no complete frontend dashboard is available.",
      },
      Grok: {
        status: "artifact",
        media: { type: "image", src: "Grok/rental.png" },
        note: "Static screenshot only; project did not build into a runnable demo.",
      },
      Debate: {
        status: "artifact",
        media: { type: "image", src: "Debate/rental.png" },
        note: "Static HTML simulation; no backend or persistent agent loop.",
      },
      Reconcile: {
        status: "video",
        media: { type: "video", src: "assets/reconcile-rental.mp4", fallback: "Reconcile/rental.gif" },
        note: "Recorded demo is available, but original full frontend is incomplete.",
      },
      SeqCv: {
        status: "video",
        media: { type: "video", src: "assets/seqcv-rental.mp4", fallback: "SeqCv/Rental.gif" },
        note: "Standalone HTML/CSS/JS simulation with visible role switching and logs.",
      },
    },
  },
  {
    id: "notion",
    short: "T3 Notion",
    title: "T3: Notion Platform (NoteFlow)",
    summary: "Collaborative document workspace output with emphasis on runnable UI completeness.",
    scaledOutputNote:
      "ScaleD demo shows: page creation/editing with a slash-block menu, plus settings, notification preferences, and templates inside the workspace UI.",
    prompt: prompts.notion,
    results: {
      ScaleD: {
        status: "video",
        media: {
          type: "video",
          src: "assets/scaled-notion.mp4",
        },
        note: "Full visual workspace demo with browser-facing interaction.",
      },
      Claude: {
        status: "video",
        media: { type: "video", src: "assets/claude-notion.mp4", fallback: "Claude/notion.gif" },
        note: "Recorded UI demo is available.",
      },
      Kimi: {
        status: "artifact",
        media: { type: "image", src: "Kimi/kimi_notion.png" },
        note: "Static screenshot; build depends on missing components and external services.",
      },
      Grok: {
        status: "missing",
        note: "Project structure exists, but dependencies and implementation completeness block stable build.",
      },
      Debate: {
        status: "missing",
        note: "Missing frontend source and backend files prevent a runnable demo.",
      },
      Reconcile: {
        status: "missing",
        note: "Docker compose and actual files do not match; no stable running result.",
      },
      SeqCv: {
        status: "video",
        media: { type: "video", src: "assets/seqcv-notion.mp4", fallback: "SeqCv/Notion.gif" },
        note: "Recorded standalone demo is available.",
      },
    },
  },
  {
    id: "git",
    short: "T2 Git",
    title: "T2: GitHub Platform (GitVault)",
    summary: "GitHub-like collaboration task with repositories, issues, pull requests, and workflow surface.",
    scaledOutputNote:
      "ScaleD demo shows: pull-request setup, marketplace screens, theme switching, and appearance settings alongside repository navigation.",
    prompt: prompts.git,
    results: {
      ScaleD: {
        status: "video",
        media: { type: "video", src: "assets/scaled-git.mp4", fallback: "assets/scaled-git.gif" },
        note: "Complete recorded collaboration workflow.",
      },
      Claude: {
        status: "video",
        media: { type: "video", src: "Claude/claude_git.mp4", fallback: "Claude/claude_git.gif" },
        note: "GitVault-style project, but dependency conflicts prevent original app install.",
      },
      Kimi: {
        status: "video",
        media: { type: "video", src: "Kimi/kimi_git.mp4", fallback: "Kimi/kimi_git.gif" },
        note: "Recorded artifact is available.",
      },
      Grok: {
        status: "video",
        media: { type: "video", src: "Grok/Grok_git.mp4", fallback: "Grok/Grok_git_hq.gif" },
        note: "Recorded artifact is available.",
      },
      Debate: {
        status: "missing",
        note: "Compose references missing frontend, runner, and Dockerfile paths.",
      },
      Reconcile: {
        status: "video",
        media: { type: "video", src: "Reconcile/reconcile_git.mp4", fallback: "Reconcile/reconcile_git.gif" },
        note: "Recorded reconciliation demo is available.",
      },
      SeqCv: {
        status: "missing",
        note: "Compose references missing backend, frontend, runner, and nginx paths.",
      },
    },
  },
  {
    id: "latex",
    short: "T1 LaTeX",
    title: "T1: Collaborative LaTeX Platform (TexForge)",
    summary: "LaTeX platform and compiled-output task where buildability is a central part of the result.",
    scaledOutputNote:
      "ScaleD demo shows: template/project gallery, new-project creation, file-tree navigation, LaTeX editing, and compile-error feedback in one browser workflow.",
    prompt: prompts.latex,
    results: {
      ScaleD: {
        status: "video",
        media: {
          type: "video",
          src: "assets/scaled-latex.mp4",
        },
        note: "Recorded LaTeX workflow demo is available.",
      },
      Claude: {
        status: "video",
        media: { type: "video", src: "assets/claude-latex.mp4", fallback: "Claude/Latex.gif" },
        note: "Recorded demo is available.",
      },
      Kimi: {
        status: "missing",
        note: "Docker, pnpm, Node, and compose configuration do not align into a stable result.",
      },
      Grok: {
        status: "limited",
        media: { type: "video", src: "assets/grok-latex.mp4", fallback: "Grok/Latex.gif" },
        note: "Content is substantial, but final compile fails.",
      },
      Debate: {
        status: "limited",
        note: "Detailed content exists, but final LaTeX compile fails.",
      },
      Reconcile: {
        status: "artifact",
        media: { type: "image", src: "Reconcile/Latex.png" },
        note: "Static image artifact; original frontend is incomplete.",
      },
      SeqCv: {
        status: "missing",
        note: "Multiple inconsistent entry points prevent a stable Docker Compose run.",
      },
    },
  },
  {
    id: "fourier",
    short: "T5 Fourier",
    title: "T5: Fourier Transform Visualization",
    summary: "Static mathematical visualization artifact generated by each method.",
    scaledOutputNote:
      "ScaleD demo shows: animated time-domain signal drawing and frequency-bar reveal, connecting 1/2/3 Hz components to the spectrum, formula, and application examples.",
    prompt: prompts.fourier,
    results: {
      ScaleD: {
        status: "artifact",
        media: { type: "image", src: "assets/scaled-fourier.svg" },
        note: "SVG mathematical visualization artifact.",
      },
      Claude: {
        status: "artifact",
        media: { type: "image", src: "Claude/fourier_transform.svg" },
        note: "SVG mathematical visualization artifact.",
      },
      Kimi: {
        status: "artifact",
        media: { type: "image", src: "Kimi/fourier_transform.svg" },
        note: "SVG mathematical visualization artifact.",
      },
      Grok: {
        status: "artifact",
        media: { type: "image", src: "Grok/fourier_transform.svg" },
        note: "SVG mathematical visualization artifact.",
      },
      Debate: {
        status: "artifact",
        media: { type: "image", src: "Debate/fourier_transform.svg" },
        note: "SVG mathematical visualization artifact.",
      },
      Reconcile: {
        status: "artifact",
        media: { type: "image", src: "Reconcile/fourier_transform.svg" },
        note: "SVG mathematical visualization artifact.",
      },
      SeqCv: {
        status: "artifact",
        media: { type: "image", src: "SeqCv/fourier_transform.svg" },
        note: "SVG mathematical visualization artifact.",
      },
    },
  },
  {
    id: "bayesian",
    short: "T7 Bayesian",
    title: "T7: Bayesian Inference Presentation",
    summary: "Final document or image artifact for the Bayesian reasoning task.",
    scaledOutputNote:
      "ScaleD demo shows: a compiled 25-page deck with workflow coverage and appendix slides for distribution references, MCMC diagnostics, and recommended reading.",
    prompt: prompts.bayesian,
    results: {
      ScaleD: {
        status: "artifact",
        media: {
          type: "pdf",
          src: "assets/scaled-bayesian.pdf",
          pages: pdfPages("scaled-bayesian", 25),
          pageCount: 25,
        },
        note: "PDF artifact is available; preview cycles through all pages.",
      },
      Claude: {
        status: "artifact",
        media: {
          type: "pdf",
          src: "Claude/bayesian.pdf",
          pages: pdfPages("claude-bayesian", 33),
          pageCount: 33,
        },
        note: "PDF artifact is available; preview cycles through all pages.",
      },
      Kimi: {
        status: "artifact",
        media: {
          type: "pdf",
          src: "Kimi/bayesian.pdf",
          pages: pdfPages("kimi-bayesian", 22),
          pageCount: 22,
        },
        note: "PDF artifact is available; preview cycles through all pages.",
      },
      Grok: {
        status: "artifact",
        media: { type: "image", src: "Grok/bayesain.png" },
        note: "PNG artifact is available.",
      },
      Debate: {
        status: "artifact",
        media: { type: "image", src: "Debate/bayesian.png" },
        note: "PNG artifact is available.",
      },
      Reconcile: {
        status: "artifact",
        media: {
          type: "pdf",
          src: "Reconcile/bayesian.pdf",
          pages: pdfPages("reconcile-bayesian", 28),
          pageCount: 28,
        },
        note: "PDF artifact is available; preview cycles through all pages.",
      },
      SeqCv: {
        status: "artifact",
        media: {
          type: "pdf",
          src: "SeqCv/bayesian.pdf",
          pages: pdfPages("seqcv-bayesian", 13),
          pageCount: 13,
        },
        note: "PDF artifact is available; preview cycles through all pages.",
      },
    },
  },
];

const taskNav = document.querySelector("#taskNav");
const taskList = document.querySelector("#taskList");
const orderedTasks = orderTasksByPaper(tasks);

taskNav.innerHTML = orderedTasks
  .map((task) => `<a href="#${task.id}">${task.short}</a>`)
  .join("");

taskList.innerHTML = orderedTasks.map(renderTask).join("");
startInteractiveSvgs();
startPdfPreviews();

function orderTasksByPaper(taskConfigs) {
  const tasksById = new Map(taskConfigs.map((task) => [task.id, task]));
  return paperTaskOrder.map((id) => {
    const task = tasksById.get(id);
    if (!task) {
      throw new Error(`Missing task configuration for ${id}`);
    }
    return task;
  });
}

function renderTask(task) {
  const scaled = task.results.ScaleD;
  const comparisons = methods
    .filter((method) => method !== "ScaleD")
    .map((method) => renderResultCard(method, task.results[method]))
    .join("");

  return `
    <section class="task-section" id="${task.id}">
      <div class="task-heading">
        <div>
          <h2>${task.title}</h2>
        </div>
        <p class="task-summary">${task.summary}</p>
      </div>
      ${renderPromptPanel(task)}
      <div class="task-grid">
        ${renderFeaturedColumn(task, scaled)}
        <div class="comparison-grid">
          ${comparisons}
        </div>
      </div>
    </section>
  `;
}

function renderFeaturedColumn(task, scaled) {
  return `
    <div class="featured-column">
      ${renderFeaturedCard(scaled)}
      ${renderScaledOutputNote(task.scaledOutputNote)}
    </div>
  `;
}

function renderPromptPanel(task) {
  const prompt = task.prompt || "Exact benchmark prompt is not present in the current artifact folder. Add the original prompt text here before sharing the page with reviewers.";
  return `
    <aside class="prompt-panel" aria-label="${task.title} prompt">
      <div class="prompt-header">
        <div class="prompt-label">Task Prompt</div>
      </div>
      <div class="prompt-copy">${renderPromptText(prompt)}</div>
    </aside>
  `;
}

function renderPromptText(prompt) {
  const lines = prompt.trim().split(/\r?\n/);
  const html = [];
  let activeList = "";

  const closeList = () => {
    if (!activeList) {
      return;
    }

    html.push(`</${activeList}>`);
    activeList = "";
  };

  const openList = (type) => {
    if (activeList === type) {
      return;
    }

    closeList();
    html.push(`<${type}>`);
    activeList = type;
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      closeList();
      return;
    }

    if (trimmed.startsWith("- ")) {
      openList("ul");
      html.push(`<li>${renderPromptInline(trimmed.slice(2))}</li>`);
      return;
    }

    const numbered = trimmed.match(/^\d+\.\s+(.*)$/);
    if (numbered) {
      openList("ol");
      html.push(`<li>${renderPromptInline(numbered[1])}</li>`);
      return;
    }

    closeList();
    if (isPromptSectionTitle(trimmed)) {
      html.push(`<p class="prompt-section-title">${escapeHtml(trimmed)}</p>`);
      return;
    }

    html.push(`<p>${renderPromptInline(trimmed)}</p>`);
  });

  closeList();
  return html.join("");
}

function isPromptSectionTitle(line) {
  if (line.length > 80 || /[.!?]$/.test(line)) {
    return false;
  }

  const colonIndex = line.indexOf(":");
  return colonIndex === -1 || colonIndex === line.length - 1;
}

function renderPromptInline(text) {
  return escapeHtml(text).replace(
    /^([A-Z][A-Za-z0-9 &/().'+-]+:)(\s+)/,
    "<strong>$1</strong>$2",
  );
}

function renderScaledOutputNote(note) {
  if (!note) {
    return "";
  }

  return `
    <aside class="scaled-output-note">
      <p>${escapeHtml(note)}</p>
    </aside>
  `;
}

function renderFeaturedCard(result) {
  return `
    <article class="featured-card result-card scaled">
      ${renderMedia(result.media)}
      <div class="card-body">
        <div class="card-topline">
          <span class="method-name">ScaleD</span>
          ${renderStatus(result.status)}
        </div>
        <p class="card-note">${result.note}</p>
        ${renderActions(result.media)}
      </div>
    </article>
  `;
}

function renderResultCard(method, result = { status: "missing", note: "No stable artifact." }) {
  return `
    <article class="result-card">
      ${result.media ? renderMedia(result.media) : renderEmptyState(result.status)}
      <div class="card-body">
        <div class="card-topline">
          <span class="method-name">${method}</span>
          ${renderStatus(result.status)}
        </div>
        <p class="card-note">${result.note}</p>
        ${renderActions(result.media)}
      </div>
    </article>
  `;
}

function renderStatus(status) {
  const meta = statusMeta[status] || statusMeta.missing;
  return `<span class="status-pill ${meta.className}">${meta.label}</span>`;
}

function renderMedia(media) {
  if (!media) {
    return renderEmptyState("missing");
  }

  if (media.type === "video") {
    return `
      <figure class="media-frame">
        <video muted loop playsinline controls preload="metadata">
          <source src="${media.src}" type="video/mp4" />
          ${media.fallback ? `<img src="${media.fallback}" alt="" />` : ""}
        </video>
      </figure>
    `;
  }

  if (media.type === "svg-object") {
    const autoplayControl = media.autoplayControl
      ? ` data-autoplay-control="${escapeHtml(media.autoplayControl)}"`
      : "";
    const autoplayMethod = media.autoplayMethod
      ? ` data-autoplay-method="${escapeHtml(media.autoplayMethod)}"`
      : "";
    return `
      <figure class="media-frame svg-frame" style="--media-aspect: ${escapeHtml(media.aspect || "16 / 10")};">
        <object
          class="svg-object"
          data="${media.src}"
          type="image/svg+xml"
          aria-label="${escapeHtml(media.title || "Interactive SVG artifact")}"
          ${autoplayControl}
          ${autoplayMethod}
        ></object>
      </figure>
    `;
  }

  if (media.type === "pdf") {
    const pages = media.pages || [];
    if (pages.length) {
      const pageImages = pages
        .map(
          (page, index) =>
            `<img class="${index === 0 ? "is-active" : ""}" src="${page}" alt="PDF preview page ${index + 1}" loading="${index === 0 ? "eager" : "lazy"}" />`,
        )
        .join("");
      return `
        <figure class="media-frame pdf-preview">
          <div class="pdf-pages" data-pdf-preview>
            ${pageImages}
          </div>
          <figcaption>Preview: all ${media.pageCount || pages.length} pages</figcaption>
        </figure>
      `;
    }

    return `
      <figure class="media-frame pdf-card">
        <div>
          <strong>PDF Artifact</strong>
          <span>Open for full result</span>
        </div>
      </figure>
    `;
  }

  return `
    <figure class="media-frame">
      <img src="${media.src}" alt="" loading="lazy" />
    </figure>
  `;
}

function renderEmptyState(status) {
  const meta = statusMeta[status] || statusMeta.missing;
  return `<div class="empty-state">${meta.label}</div>`;
}

function renderActions(media) {
  if (!media?.src) {
    return "";
  }

  const href = media.href || media.src;

  return `
    <div class="card-actions">
      <a class="artifact-link" href="${href}" target="_blank" rel="noreferrer">Open artifact</a>
    </div>
  `;
}

function startInteractiveSvgs() {
  document.querySelectorAll(".svg-object").forEach((objectEl) => {
    objectEl.addEventListener("load", () => {
      const selector = objectEl.dataset.autoplayControl;
      const method = objectEl.dataset.autoplayMethod;
      const svgWindow = objectEl.contentWindow;
      if (method && typeof svgWindow?.[method] === "function") {
        svgWindow[method]();
      }

      const svgDocument = objectEl.contentDocument;
      if (!selector) {
        return;
      }

      const control = svgDocument?.querySelector(selector);
      if (!control) {
        return;
      }

      control.dispatchEvent(
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: svgWindow,
        }),
      );
    });
  });
}

function startPdfPreviews() {
  const previews = Array.from(document.querySelectorAll("[data-pdf-preview]"));
  const startPreview = (container) => {
    if (container.dataset.pdfStarted === "true") {
      return;
    }

    container.dataset.pdfStarted = "true";
    const images = Array.from(container.querySelectorAll("img"));
    if (images.length < 2) {
      return;
    }

    let activeIndex = images.findIndex((image) => image.classList.contains("is-active"));
    if (activeIndex < 0) {
      activeIndex = 0;
      images[activeIndex].classList.add("is-active");
    }

    window.setInterval(() => {
      images[activeIndex].classList.remove("is-active");
      activeIndex = (activeIndex + 1) % images.length;
      images[activeIndex].classList.add("is-active");
    }, pdfPageIntervalMs);
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startPreview(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: pdfPreviewRootMargin, threshold: 0.1 },
    );
    previews.forEach((container) => observer.observe(container));
    return;
  }

  previews.forEach(startPreview);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
