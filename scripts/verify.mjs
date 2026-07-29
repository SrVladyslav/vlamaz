import { spawnSync } from "node:child_process";

const CYAN = "\x1b[36m";
const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const RESET = "\x1b[0m";

const steps = [
  { label: "Linter", cmd: "lint" },
  { label: "Typecheck", cmd: "typecheck" },
  { label: "SEO locale check", cmd: "check-seo-locales" },
  // { label: "Tests", cmd: "test" },
  { label: "Build", cmd: "build" },
];

const pnpmBin = process.platform === "win32" ? "pnpm.cmd" : "pnpm";

for (let i = 0; i < steps.length; i++) {
  const { label, cmd } = steps[i];
  console.log(`${CYAN}[${i + 1}/${steps.length}] ${label}...${RESET}`);

  const result = spawnSync(pnpmBin, ["run", cmd], {
    stdio: "inherit",
    shell: process.platform === "win32",
  });

  if (result.status !== 0) {
    console.log(`${RED}✖ ${label} failed${RESET}`);
    process.exit(result.status ?? 1);
  }

  console.log(`${GREEN}✔ ${label} passed${RESET}`);
}
