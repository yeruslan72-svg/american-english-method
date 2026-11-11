import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const source = resolve(root, "images");
const destination = resolve(root, "public/images");

await mkdir(resolve(root, "public"), { recursive: true });
await rm(destination, { recursive: true, force: true });
await cp(source, destination, { recursive: true });
console.log("Copied canonical images/ assets to public/images/ for the Astro build.");
