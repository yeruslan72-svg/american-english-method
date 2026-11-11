# CONTENT_MODEL.md
## American English Method — Content Model & Route Rules

**Document:** Content Model  
**Version:** 1.0  
**Date:** November 11, 2026  
**Status:** Implementation baseline for the website MVP  
**Repository:** `yeruslan72-svg/american-english-method`

---

## 1. Purpose

This document defines how the website identifies, classifies, presents, and links the learning materials already stored in the repository.

The content model is an integration layer. It must not force the existing lessons into a new editorial format or replace their Markdown files.

**Source-of-truth rule:** the existing Markdown file remains the canonical source of lesson text. The website registry describes that file; it does not duplicate its body.

## 2. Content principles

1. **Preserve original lesson content.** Do not silently rewrite, shorten, or reorder source material during integration.
2. **Seven learning directions remain distinct.** They may be grouped in navigation, but must not be collapsed into one generic lesson category.
3. **Different lesson types may have different internal structures.** A scenario, descriptive lesson, idiom collection, and connected-speech reference do not need identical sections.
4. **Metadata must be evidence-based.** Do not invent CEFR levels, difficulty ratings, frequency scores, completion status, or regional labels when the source does not support them.
5. **Routes must be stable.** A filename change must not silently change a public URL once that URL has been published.
6. **Images remain teaching assets.** Preserve their position and instructional purpose in the Markdown source.
7. **The registry must be validated.** A missing source file, duplicate ID, duplicate route, or missing local image must fail a content check or production build.

## 3. Seven learning directions

Use these exact section identifiers in the website data layer:

| ID | Display name | Canonical source |
|---|---|---|
| `everyday-scenarios` | Everyday Scenarios | `01_scenarios/` |
| `city-daily-life` | City & Daily Life | `01_scenarios/city/` |
| `descriptive-lessons` | Descriptive Lessons | `04_lessons/` |
| `southern-english` | Southern English | `02_southern_layer/` |
| `connected-speech` | Connected Speech | `03_phonetics/` |
| `idioms` | Idioms | `05_idioms/` |
| `everyday-expressions` | Everyday Expressions | `06_everyday_expressions/` |

The two scenario-related directions share a parent directory but remain separate website sections. In particular, `01_scenarios/clothes.md` belongs to Everyday Scenarios; it is not a file inside `city/`.

The Idioms editorial filter at `05_idioms/IDIOMS_FILTER.md` is a methodological resource for that direction, not a learner lesson. It should inform editorial decisions and need not appear as a numbered lesson.

## 4. Content types

The website should support these content types without assuming that all files are lessons of the same kind.

| Type ID | Typical source | Website treatment |
|---|---|---|
| `scenario` | Everyday Scenarios and City & Daily Life | Practical situation page with dialogues, expressions, and exercises where present |
| `descriptive-lesson` | `04_lessons/` | Object, place, room, sensory, or feelings lesson; preserve visual sequence |
| `regional-reference` | `02_southern_layer/` | Reference page with regional usage and register context |
| `pronunciation-reference` | `03_phonetics/` | Explanation and recognition/practice page for connected speech |
| `idiom-lesson` | Numbered files in `05_idioms/` | Thematic collection of idioms and usage examples |
| `expression-lesson` | Files in `06_everyday_expressions/` | Thematic collection of everyday conversational constructions |

A content type describes the editorial purpose of a page. It does not imply a level, quality score, or completion state.

## 5. Registry-first metadata

### 5.1 Initial implementation choice

For the MVP, use a central content registry rather than adding frontmatter to all existing Markdown files.

Recommended location:

```text
src/data/content.ts
```

The registry should contain metadata and a path to the canonical Markdown source. It must not contain copied lesson body text.

This approach:
- avoids a mass edit of existing lessons;
- preserves Markdown compatibility with GitHub previews;
- allows stable public URLs independent of filenames;
- makes missing files and duplicate routes testable;
- permits a gradual, reviewed migration to frontmatter later if there is a clear benefit.

### 5.2 Required fields

Each published learning page must have:

| Field | Type | Rule |
|---|---|---|
| `id` | string | Unique, stable identifier; lowercase kebab-case |
| `section` | section ID | One of the seven IDs in Section 3 |
| `type` | content type ID | One of the types in Section 4 |
| `title` | string | Learner-facing title, verified against the source |
| `source` | string | Repository-relative Markdown path |
| `slug` | string | Stable URL segment, lowercase kebab-case |

### 5.3 Optional fields

Use optional metadata only when it is supported and useful:

| Field | Type | Rule |
|---|---|---|
| `description` | string | Short, factual page summary; may be added during editorial review |
| `order` | number | Explicit display order within a section; never infer from filename alone |
| `featured` | boolean | Use only when deliberately selected for the home page |
| `related` | string[] | IDs of genuinely related pages; every ID must exist |
| `coverImage` | string | Existing image path, if a separate card image is useful |
| `public` | boolean | Explicit publication switch; default to false until a page is reviewed for publication |

Do not add `level`, `frequency`, `region`, `duration`, or `completionStatus` as global required fields. Such properties may be introduced later only with a documented definition and verified source data.

### 5.4 Example registry record

The following is an illustrative data record, not a claim that the final registry has already been populated:

```ts
{
  id: "glass",
  section: "descriptive-lessons",
  type: "descriptive-lesson",
  title: "Опиши стакан",
  source: "04_lessons/lesson_01_glass.md",
  slug: "glass",
  description: "Учимся описывать предмет, его детали и положение в пространстве.",
  order: 1,
  featured: true,
  related: ["beach", "airport"],
  public: true
}
```

The title and description must be checked against the source before being used in the live registry.

## 6. Route rules

Use readable, section-scoped routes. Do not expose raw repository folder names or lesson numbering as the only public identity.

Recommended route pattern:

```text
/learn/<section-id>/<slug>/
```

Examples:

| Source | Recommended route |
|---|---|
| `01_scenarios/refusal.md` | `/learn/everyday-scenarios/refusal/` |
| `01_scenarios/city/beach.md` | `/learn/city-daily-life/beach/` |
| `04_lessons/lesson_01_glass.md` | `/learn/descriptive-lessons/glass/` |
| `02_southern_layer/patterns.md` | `/learn/southern-english/patterns/` |
| `03_phonetics/connected_speech.md` | `/learn/connected-speech/connected-speech/` |
| `05_idioms/lesson_01_bad_day.md` | `/learn/idioms/a-bad-day/` |
| `06_everyday_expressions/lesson_01_ability_confidence.md` | `/learn/everyday-expressions/ability-confidence/` |

Rules:

- A route is explicitly stored in the registry or deterministically generated from the section ID and slug.
- Slugs must be unique within a section.
- The same slug may exist in different sections without collision.
- Once published, a route is not changed merely because a source filename is renamed.
- If a published route must change, add a redirect from the old route.
- Do not use lesson numbers as route identity; numbering can contain gaps or duplicates.

## 7. Markdown rendering and source paths

The site must render the existing Markdown body with its original instructional structure.

Preserve:
- heading hierarchy;
- paragraphs and emphasis;
- lists and numbered procedures;
- tables;
- blockquotes;
- code and pronunciation notation;
- dialogue formatting;
- image placement;
- internal and external links.

Do not assume that relative Markdown image paths will work unchanged after a file is rendered at a different website URL.

For example, the source file:

```md
![A glass of iced tea](../images/lessons/objects/glass/object-glass-01.jpg)
```

must resolve to the existing repository asset during the website build. The implementation must use a tested Markdown asset resolver or a controlled rewrite step. It must not create broken links by resolving the path relative to the public route.

Initial image source directory:

```text
images/
```

Preferred implementation: preserve this directory as the canonical asset source and configure the build to copy or process it into the public output. Do not maintain two manually edited copies of the same image.

## 8. Page presentation model

Every content page may use a shared outer layout:

1. Breadcrumbs.
2. Section label.
3. Source title.
4. Optional short description.
5. Main Markdown content.
6. Previous / next navigation when an explicit order exists.
7. Related pages when relationships are registered.

The body is not forced into a universal template. The page renderer must allow the source Markdown to determine its own internal sequence.

### Type-specific presentation

- **Scenario:** prioritize the situation, useful language, dialogue, and practical response. Render only sections that exist in the source.
- **City & Daily Life:** may include location-specific visual assets and practical steps. Preserve the page's own structure.
- **Descriptive lesson:** keep images close to the relevant descriptions and comparisons. Preserve Nationwide and Southern variants where the lesson contains them.
- **Southern English:** make regional status visible and avoid presenting Southern forms as universal American English.
- **Connected Speech:** visually distinguish full written forms, reduced spoken forms, and phonetic notation.
- **Idioms:** preserve meaning, examples, register, and usage guidance. Do not promote rare expressions to active use without editorial verification.
- **Everyday Expressions:** preserve thematic grouping, conversational examples, and distinctions in tone or meaning.

## 9. Section landing pages

Each of the seven directions receives a section landing page with:

- section title and concise explanation;
- list or cards of published pages;
- optional grouping where the content genuinely supports it;
- clear indication of the section's role in the wider method.

Do not show empty categories, invented lesson counts, or unsupported difficulty filters.

The landing page should be generated from the registry, not manually maintained as a second list of lessons.

## 10. Ordering and relationships

- Use explicit `order` values when a pedagogical sequence is intended.
- If no order is defined, display pages in a deliberate, documented order or alphabetical order; do not assume filename numbering is pedagogical sequence.
- Previous / next navigation is allowed only when a sequence is defined.
- Related pages must be selected for a clear learning relationship, not merely because they are adjacent in the repository.
- A missing related-page ID is a validation error.

## 11. Validation requirements

Before deployment, automated checks must verify:

1. Every registry `source` points to an existing Markdown file.
2. Every `id` is unique.
3. Every route is unique.
4. Every section ID and content type is valid.
5. Every `related` ID resolves to a registered page.
6. Every referenced local image exists.
7. Every public page has a non-empty title.
8. No unpublished page appears in public navigation, search, or section counts.
9. No route depends solely on a mutable source filename.
10. Markdown rendering does not break tables, images, links, or code notation.

The build should report the file path and the exact failed check.

## 12. Implementation sequence

1. Create the typed section and content-type definitions.
2. Add a small initial registry for the three visual reference pages: Glass, At the Beach, and At the Airport.
3. Implement Markdown loading and test image resolution for those three pages.
4. Confirm the rendered pages preserve the original content and visual positions.
5. Expand the registry to the remaining learning materials.
6. Add section landing pages and navigation.
7. Add search only after the registry and routes are validated.

Do not populate all metadata in one unreviewed bulk operation. Titles, descriptions, order, and relationships should be checked against their source files.

## 13. Scope boundary

This model defines content organization for the static website MVP. It does not define:

- a learner account system;
- progress tracking;
- tests or automated grading;
- audio hosting or speech recognition;
- a learning management system;
- a change to the educational methodology;
- a rewrite or renumbering of existing lessons.

These may be considered later as separate product decisions.

---

## Governing principle

**The registry organizes the learning materials. It does not rewrite the learning materials.**

The website must adapt to the method and its content — not the other way around.
