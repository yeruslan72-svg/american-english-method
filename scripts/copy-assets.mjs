import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const source = resolve(root, "images");
const destination = resolve(root, "public/images");
const audioSource = resolve(root, "audio");
const audioDestination = resolve(root, "public/audio");

await mkdir(resolve(root, "public"), { recursive: true });
await mkdir(destination, { recursive: true });
await cp(source, destination, { recursive: true });
await mkdir(audioDestination, { recursive: true });
await cp(audioSource, audioDestination, { recursive: true });
console.log("Copied canonical images/ and audio/ assets to public/ without deleting separately uploaded public assets.");
