const markdownFiles = import.meta.glob(
  "../../{01_scenarios,02_southern_layer,03_phonetics,04_lessons,05_idioms,06_everyday_expressions}/**/*.md",
  { eager: true, query: "?raw", import: "default" }
) as Record<string, string>;

export const sections = [
  { id: "everyday-scenarios", title: "Everyday Scenarios", description: "Practical language for requests, refusals, phone calls, emergencies, and everyday interactions.", intro: "Start with real communication situations and learn how to respond naturally." },
  { id: "city-daily-life", title: "City & Daily Life", description: "English for travel, public places, services, and ordinary life in American cities.", intro: "Explore practical situations in places you may visit in everyday life." },
  { id: "descriptive-lessons", title: "Descriptive Lessons", description: "Learn to notice and describe objects, rooms, places, sounds, smells, and feelings.", intro: "Build descriptive language by observing real details and expressing what you notice." },
  { id: "southern-english", title: "Southern English", description: "A regional layer of American English, presented in context and clearly distinguished from nationwide usage.", intro: "Understand regional expressions without mistaking them for universal American English." },
  { id: "connected-speech", title: "Connected Speech", description: "Understand how sounds connect, reduce, and flow in natural spoken American English.", intro: "Train your ear to recognize the language as it is actually spoken." },
  { id: "idioms", title: "Idioms", description: "Common, useful idioms selected for natural everyday conversation.", intro: "Focus on expressions that are practical, current, and widely understood." },
  { id: "everyday-expressions", title: "Everyday Expressions", description: "High-frequency conversational patterns for opinions, reactions, requests, plans, and more.", intro: "Build a practical repertoire of phrases for relaxed everyday communication." }
] as const;

const curated: Record<string, { displayTitle: string; description: string }> = {
  "04_lessons/lesson_01_glass.md": {
    displayTitle: "Describe a Glass",
    description: "Learn to describe an everyday object through its shape, material, details, position, and impression."
  },
  "01_scenarios/city/beach.md": {
    displayTitle: "At the Beach",
    description: "Find your way around the beach, choose a spot, understand safety signs, and communicate naturally."
  },
  "01_scenarios/city/airport.md": {
    displayTitle: "At the Airport",
    description: "Practical English for check-in, baggage, security, boarding, and common airport situations."
  }
};

function classify(path: string) {
  if (path.startsWith("../../01_scenarios/city/")) return { section: "city-daily-life", type: "scenario" };
  if (path.startsWith("../../01_scenarios/")) return { section: "everyday-scenarios", type: "scenario" };
  if (path.startsWith("../../02_southern_layer/")) return { section: "southern-english", type: "regional-reference" };
  if (path.startsWith("../../03_phonetics/")) return { section: "connected-speech", type: "pronunciation-reference" };
  if (path.startsWith("../../04_lessons/")) return { section: "descriptive-lessons", type: "descriptive-lesson" };
  if (path.startsWith("../../05_idioms/")) return { section: "idioms", type: "idiom-lesson" };
  return { section: "everyday-expressions", type: "expression-lesson" };
}

function slugFromPath(path: string) {
  const filename = path.split("/").pop() ?? "lesson";
  return filename
    .replace(/\.md$/i, "")
    .replace(/^lesson_\d+_/, "")
    .replace(/_/g, "-")
    .toLowerCase();
}

function titleFromMarkdown(markdown: string, path: string) {
  const heading = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim();
  if (heading) return heading;
  return (path.split("/").pop() ?? "Lesson").replace(/\.md$/i, "").replace(/_/g, " ");
}

function displayTitleFromHeading(title: string) {
  const parts = title.split(/\s+[—–-]\s+/);
  return (parts.length > 1 ? parts[parts.length - 1] : title)
    .replace(/^Урок\s+\d+\s*:\s*/i, "")
    .trim();
}

export const lessons = Object.entries(markdownFiles)
  .filter(([path]) => !path.endsWith("/IDIOMS_FILTER.md"))
  .map(([modulePath, markdown]) => {
    const source = modulePath.replace(/^\.\.\/\.\.\//, "");
    const { section, type } = classify(modulePath);
    const title = titleFromMarkdown(markdown, source);
    const custom = curated[source];
    const slug = slugFromPath(modulePath);
    return {
      id: source.replace(/\.md$/i, "").replace(/[^a-z0-9]+/gi, "-").toLowerCase(),
      section,
      type,
      title,
      displayTitle: custom?.displayTitle ?? displayTitleFromHeading(title),
      description: custom?.description ?? `Explore practical American English through this lesson: ${displayTitleFromHeading(title)}.`,
      slug,
      source,
      markdown
    };
  })
  .sort((a, b) => a.source.localeCompare(b.source));

export type SectionId = typeof sections[number]["id"];
