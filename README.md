# vlamaz
Code for my web

## Getting started

This project uses **pnpm** only. npm and yarn are not supported (`pnpm-lock.yaml` is the only lockfile).

Requirements: Node.js 26 (see `.nvmrc`) and pnpm 10+.

```bash
corepack enable        # or: npm i -g pnpm
pnpm install
pnpm dev               # start the dev server
pnpm verify            # lint, typecheck, SEO locale check and build (also runs on git push)
```
