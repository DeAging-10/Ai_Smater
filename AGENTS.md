<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Cursor Cloud specific instructions

- Install dependencies with Bun from `bun.lock`: `bun install --frozen-lockfile`. This repo has no npm lockfile, so the README `npm i` command does not reproduce the locked tree.
- `bun` must be on the default PATH at `/usr/local/bin/bun` (symlink `bunx` the same way). Non-interactive login shells do not reliably load `~/.bashrc`, so a Bun install that only edits the shell profile is invisible to later `install` and `start` commands.
- Dev server: `bun run dev`. The Lovable Vite config binds host `::` and port `8080`.
- `bun run test` and `bun x tsc --noEmit` pass. `bun run lint` reports existing Prettier formatting issues in the site components.
