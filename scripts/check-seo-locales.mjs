import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const LOCALES_DIR = path.join(ROOT, "src", "locales");

const REQUIRED_ROUTE_KEYS = ["home", "background", "blog", "contact", "cookies", "privacy"];

const locales = readdirSync(LOCALES_DIR, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

let hasErrors = false;

for (const locale of locales) {
  const seoPath = path.join(LOCALES_DIR, locale, "seo.json");
  let seo;
  try {
    seo = JSON.parse(readFileSync(seoPath, "utf-8"));
  } catch {
    console.error(`✖ Missing or invalid src/locales/${locale}/seo.json`);
    hasErrors = true;
    continue;
  }

  for (const key of REQUIRED_ROUTE_KEYS) {
    const entry = seo[key];
    if (!entry || typeof entry.title !== "string" || typeof entry.description !== "string") {
      console.error(`✖ src/locales/${locale}/seo.json is missing "${key}.title"/"${key}.description"`);
      hasErrors = true;
    }
  }
}

if (hasErrors) {
  process.exit(1);
}

console.log(`✔ seo.json present and complete for all locales: ${locales.join(", ")}`);
