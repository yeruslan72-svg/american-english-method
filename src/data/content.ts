import glass from "../../04_lessons/lesson_01_glass.md?raw";
import beach from "../../01_scenarios/city/beach.md?raw";
import airport from "../../01_scenarios/city/airport.md?raw";

export const sections = [
  { id: "everyday-scenarios", title: "Everyday Scenarios", description: "Practical language for requests, refusals, phone calls, emergencies, and everyday interactions.", intro: "Start with real communication situations and learn how to respond naturally." },
  { id: "city-daily-life", title: "City & Daily Life", description: "English for travel, public places, services, and ordinary life in American cities.", intro: "Explore practical situations in places you may visit in everyday life." },
  { id: "descriptive-lessons", title: "Descriptive Lessons", description: "Learn to notice and describe objects, rooms, places, sounds, smells, and feelings.", intro: "Build descriptive language by observing real details and expressing what you notice." },
  { id: "southern-english", title: "Southern English", description: "A regional layer of American English, presented in context and clearly distinguished from nationwide usage.", intro: "Understand regional expressions without mistaking them for universal American English." },
  { id: "connected-speech", title: "Connected Speech", description: "Understand how sounds connect, reduce, and flow in natural spoken American English.", intro: "Train your ear to recognize the language as it is actually spoken." },
  { id: "idioms", title: "Idioms", description: "Common, useful idioms selected for natural everyday conversation.", intro: "Focus on expressions that are practical, current, and widely understood." },
  { id: "everyday-expressions", title: "Everyday Expressions", description: "High-frequency conversational patterns for opinions, reactions, requests, plans, and more.", intro: "Build a practical repertoire of phrases for relaxed everyday communication." }
] as const;

export const lessons = [
  {
    id: "glass",
    section: "descriptive-lessons",
    type: "descriptive-lesson",
    title: "Опиши стакан",
    displayTitle: "Describe a Glass",
    description: "Learn to describe an everyday object through its shape, material, details, position, and impression.",
    slug: "glass",
    source: "04_lessons/lesson_01_glass.md",
    markdown: glass
  },
  {
    id: "beach",
    section: "city-daily-life",
    type: "scenario",
    title: "На пляже — At the Beach",
    displayTitle: "At the Beach",
    description: "Find your way around the beach, choose a spot, understand safety signs, and communicate naturally.",
    slug: "beach",
    source: "01_scenarios/city/beach.md",
    markdown: beach
  },
  {
    id: "airport",
    section: "city-daily-life",
    type: "scenario",
    title: "В аэропорту — At the Airport",
    displayTitle: "At the Airport",
    description: "Practical English for check-in, baggage, security, boarding, and common airport situations.",
    slug: "airport",
    source: "01_scenarios/city/airport.md",
    markdown: airport
  }
] as const;

export type SectionId = typeof sections[number]["id"];
