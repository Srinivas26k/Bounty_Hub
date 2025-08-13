# Contributing to OShub

First off—thank you for your interest in improving **OShub**! 

OShub is an open-source platform that connects maintainers and contributors through **issue bounties**. Our goal is to make open-source work **sustainable, transparent, and rewarding**.

This document explains how to set up your environment, find something to work on, submit changes, and—if you’re participating in bounty work—how the bounty lifecycle works.

---

## Table of Contents

* [Code of Conduct](#code-of-conduct)
* [Ways to Contribute](#ways-to-contribute)
* [Project Setup](#project-setup)
* [Issues, Labels & Bounties](#issues-labels--bounties)
* [Bounty Lifecycle](#bounty-lifecycle)
* [Branching, Commits & PRs](#branching-commits--prs)
* [Style Guides](#style-guides)
* [Testing](#testing)
* [Security](#security)
* [Documentation](#documentation)
* [Community & Support](#community--support)
* [License](#license)

---

## Code of Conduct

We are committed to a welcoming and inclusive community. By participating, you agree to uphold our **[Code of Conduct](CODE_OF_CONDUCT.md)**. If you experience or witness unacceptable behavior, please report it to the maintainers via **[security@oshub.dev](mailto:security@oshub.dev)** or open a confidential discussion.

---

## Ways to Contribute

There are many ways to help:

* **Code contributions**: Fix bugs, implement features, improve performance.
* **Docs**: Improve README, guides, API reference, or add tutorials.
* **Design/UX**: Suggest improvements for usability and accessibility.
* **Testing**: Add unit/integration/e2e tests; help with CI stability.
* **DevOps**: Improve build, deployment, monitoring.
* **Triaging**: Repro issues, add details, label, close stale items.
* **Community**: Answer questions, review PRs, mentor first-timers.

> 💡 First time here? Look for issues labeled **`good first issue`** or **`help wanted`**.

---

## Project Setup

> The exact stack may include multiple services (API, web, workers). Check each package’s README for specifics.

### Prerequisites

* Git & GitHub account
* Latest LTS runtime(s) used in this repo (see `/tool-versions` or package READMEs)
* Package managers used by subprojects (e.g., `npm/yarn/pnpm`, `maven/gradle`, etc.)
* Docker (optional) for containerized dev

### Quick Start

1. **Fork** the repository and **clone** your fork:

   ```bash
   git clone https://github.com/<your-username>/OShub.git
   cd OShub
   ```
2. Create a feature branch:

   ```bash
   git checkout -b feat/<short-title>
   ```
3. Copy env templates and configure secrets:

   ```bash
   cp .env.example .env
   # Fill in required environment variables
   ```
4. Install dependencies & build (check each package):

   ```bash
   # examples
   npm install && npm run build
   # or
   ./mvnw clean package
   ```
5. Run locally:

   ```bash
   # examples
   npm run dev
   # or
   docker compose up --build
   ```
6. Run tests before committing:

   ```bash
   # examples
   npm test
   # or
   ./mvnw test
   ```

> If you hit setup issues, please open a Discussion with logs and system details.

---

## Issues, Labels & Bounties

We use GitHub Issues to track work. Common labels:

* **type:** `bug`, `feature`, `docs`, `chore`, `refactor`, `security`
* **difficulty:** `good first issue`, `intermediate`, `advanced`
* **priority:** `low`, `medium`, `high`
* **bounty:** `bounty-available`, `bounty-claimed`, `bounty-review`, `bounty-ready-for-payout`

### Creating Issues

* Use the **issue templates**.
* Provide **clear reproduction steps**, **expected vs actual behavior**, and **screenshots/logs**.
* Link related issues/PRs.

### Bounty Issues

* Maintainers may add a **bounty** to an issue by including reward details in the issue body and applying the `bounty-available` label.
* Bounties should specify: **reward amount/currency**, **acceptance criteria**, **deadline (if any)**, and **reviewers**.

---

## Bounty Lifecycle

**For Contributors**

1. **Find a bounty**: Filter by `bounty-available`.
2. **Request assignment**: Comment `I’d like to claim this` and share your approach/ETA. A maintainer will assign on approval.
3. **Get assigned**: Label changes to `bounty-claimed`.
4. **Work in a fork/branch** following style & test guidelines.
5. **Open a PR**: Link the issue (`Fixes #123`) and include a **demo** (screenshots/video) and **tests**.
6. **Address review**: Keep communication prompt and professional.
7. **Acceptance**: When criteria are met, maintainers add `bounty-review` → `bounty-ready-for-payout`.
8. **Payout**: Processed via the method specified in the issue (e.g., GitHub Sponsors, OpenCollective, bank/UPI, crypto). Maintainers will confirm completion in the issue.

**For Maintainers**

* Define **clear acceptance criteria** & **testable outcomes**.
* Assign to **one** contributor at a time; prefer `first ready` over `first come`.
* If progress stalls, leave a reminder; unassign after the stated grace period.
* On acceptance, record payout details in the issue and close it with the PR merge.

> ⚠️ **Anti-Fraud:** All work must be original. Plagiarism, AI-only submissions without human verification, or reselling others’ work will result in disqualification and ban.

---

## Branching, Commits & PRs

### Branching

* Use short, descriptive names: `feat/auth-oauth`, `fix/payout-race`, `docs/bounty-guide`.

### Conventional Commits

Follow **Conventional Commits**:

```
<type>(optional scope): <short summary>

[optional body]
[optional footer(s)]
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.

**Examples:**

* `feat(bounty): add escrow hold period`
* `fix(api): handle GitHub webhook retries`
* `docs: add payout FAQ`

> If the project uses DCO/Signoff, append `Signed-off-by: Your Name <you@example.com>`.

### Pull Requests

* One PR per logical change.
* Keep PRs small and focused.
* Ensure **CI is green** and tests are updated.
* Fill the **PR template** with: context, screenshots, trade-offs, test plan, and rollout plan.
* Link the issue: `Closes #<id>`.
* Mark as **Draft** if still in progress.

### Reviews & Merging

* Two approvals required for risky changes (security, payments, auth). One approval otherwise.
* Squash merge by default; use conventional commit in the squash title.
* Maintainers may request design/accessibility reviews when relevant.

---

## Style Guides

> Use the tooling configured in each package. If both JavaScript and Java are present, follow each language’s formatter/linter.

* **Formatting**: Enforced by project tools (e.g., Prettier, Spotless). Run `format` scripts before committing.
* **Linting**: Fix all lints or justify with inline comments and `eslint-disable`/`checkstyle` sparingly.
* **Type Safety**: Prefer strict types. Add or update types/interfaces/DTOs when changing APIs.
* **API Design**: Stable, versioned endpoints. Avoid breaking changes without migration notes.
* **UI/UX**: Follow accessible patterns (WCAG AA). Provide keyboard navigation and aria labels.
* **i18n**: Externalize strings where possible.

---

## Testing

* Add/maintain **unit**, **integration**, and **e2e** tests.
* Provide tests for bug fixes and new features.
* Include **fixtures** and **mocks** for external services (e.g., GitHub webhooks, payment providers).
* Ensure tests are deterministic and run in CI.

**Example expectations**

* New API route → request/response schema tests, auth/permissions tests.
* Bounty payout logic → edge cases (double payout, race conditions), audit logs.
* Webhooks → retry/idempotency tests.

---

## Security

* **Do NOT** open public issues for vulnerabilities. Email **[security@oshub.dev](mailto:security@oshub.dev)** with details and steps to reproduce.
* Avoid logging secrets or PII.
* Use **.env** files for secrets and never commit them.
* Follow the **Principle of Least Privilege** for tokens/keys.
* Add/maintain **rate limiting** and **idempotency** for financial flows.

See **[SECURITY.md](SECURITY.md)** for our responsible disclosure policy.

---

## Documentation

* Keep **README.md** user-focused and up to date.
* Add or update **/docs** pages for architecture, API reference, and runbooks.
* For UI changes, include screenshots or short clips (GIF/MP4).

---

## Community & Support

* **GitHub Discussions**: Q\&A, ideas, showcases.
* **Issues**: Bugs and feature requests only.
* **Discord/Chat** (if available): informal support and coordination.

Response SLA is best-effort by volunteers—please be kind and patient.

---

## License

By contributing, you agree that your contributions will be licensed under the project’s open-source license (see **LICENSE** file). If a CLA is required, the PR checks will prompt you to sign it.

---

### Contributor Checklist

* [ ] I ran tests and lints locally.
* [ ] My change is documented (code comments, docs, or both).
* [ ] I added/updated tests.
* [ ] I followed the commit and PR guidelines.
* [ ] I linked the related issue and included screenshots/demos.
* [ ] (Bounty) I confirmed acceptance criteria are met and added payout details if requested.

Thanks for making OShub better! 💜
