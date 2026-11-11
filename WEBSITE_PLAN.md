# WEBSITE_PLAN.md
## American English Method — Website Architecture & MVP Plan

**Document:** Website Plan  
**Version:** 1.0  
**Date:** November 11, 2026  
**Status:** Proposed architecture — approval baseline  
**Repository:** `yeruslan72-svg/american-english-method`  
**Primary goal:** Turn the existing learning materials into a coherent, accessible, responsive learning website without losing the Markdown source of truth.

---

## 1. Project purpose

American English Method is a practical learning project focused on contemporary, natural American English in real-life contexts.

The website must make the existing method and learning materials easy to discover, read, practise, and navigate. It must not reduce the project to a collection of disconnected Markdown pages.

**Guiding principle:**

> Learn the language. Understand the context. Express yourself naturally.

The website is a presentation and learning layer over the existing content repository. The repository remains the canonical source for lesson text, methodology, and original visual assets.

## 2. Product principles

1. **Nationwide American English first.** Contemporary, broadly useful American English is the core.
2. **Regional English is a layer, not the foundation.** Southern English is presented with clear context and register notes.
3. **Practical learning.** Real situations, natural dialogues, explanations, and learner practice take priority over encyclopedic content.
4. **Visuals support speaking.** Images must have a clear teaching purpose and must follow `VISUAL_STYLE_GUIDE.md`.
5. **Preserve the source.** Do not silently rewrite, shorten, or replace existing lessons during website integration.
6. **Progressive implementation.** Build a stable MVP first; add audio, accounts, progress tracking, and advanced exercises only after the core site works.
7. **Accessible and responsive.** Pages must work on desktop, tablet, and mobile, with readable typography, keyboard navigation, and sufficient contrast.

## 3. Audited repository baseline

The repository tree on the `main` branch was inspected on November 11, 2026.

| Area | Markdown files |
|---|---:|
| `01_scenarios/` including `city/` | 22 |
| `02_southern_layer/` | 1 |
| `03_phonetics/` | 1 |
| `04_lessons/` | 16 |
| `05_idioms/` including the filter | 3 |
| `06_everyday_expressions/` | 17 |
| Root-level Markdown documents | 7 |
| **Total** | **67** |

The repository also contains **14 image assets**:
- 6 glass lesson images;
- 4 beach scenario images;
- 4 airport scenario images.

The following points must be respected during implementation:

- The actual root-level visual document is `VISUAL_STYLE_GUIDE.md`.
- `VISUAL_INVENTORY.md` was referenced in the existing audit but was not present in the inspected repository tree.
- The actual descriptive lesson filenames include `lesson_04_clock.md`, `lesson_08_tableware.md`, `lesson_11_laundry.md`, and `lesson_17_feelings_and_inner_feelings.md`.
- `01_scenarios/clothes.md` exists in addition to the city scenario files.
- The existing `CONTENT_AUDIT.md` contains stale counts and some outdated filenames. It should be updated as a separate documentation task.
- Image references in the glass, beach, and airport Markdown files were checked against the repository tree and point to existing assets.

This baseline is a repository inventory, not a claim that every lesson has undergone a complete pedagogical or linguistic review.

## 4. Proposed site map

### 4.1 Main navigation

1. **Home**
2. **Learning Paths**
3. **Lessons**
4. **The Method**
5. **About**

A compact global search should be available from the header.

### 4.2 Learning sections

| Section | Repository source | Website purpose |
|---|---|---|
| Everyday Scenarios | `01_scenarios/` | Everyday interactions and practical situations |
| City & Daily Life | `01_scenarios/city/` | Getting around and handling everyday tasks |
| Descriptive Lessons | `04_lessons/` | Describing objects, places, rooms, senses, and feelings |
| Southern English | `02_southern_layer/` | Regional language and cultural context |
| Connected Speech | `03_phonetics/` | Understanding connected, reduced spoken English |
| Idioms | `05_idioms/` | Common idiomatic expressions, following the project filter |
| Everyday Expressions | `06_everyday_expressions/` | Useful conversational expressions by theme |

The seven sections should be visible as distinct learning destinations. Related sections may be grouped in the menu, but their identities should remain clear.

### 4.3 Supporting pages

- **Learning Paths:** explain how the learning directions work together.
- **The Method:** explain the learning cycle and editorial principles.
- **Sources & Methodology:** present the project's source and verification approach.
- **Visual Standards:** summarize how educational images are selected and used.
- **About:** explain the purpose and scope of American English Method.

The site should not publish internal working documents automatically. Only documents intentionally selected for public presentation should become public pages.

## 5. Main page concept

The home page should answer three questions quickly:

1. What is American English Method?
2. How does it differ from a conventional phrasebook?
3. Where should a learner begin?

Recommended structure:

1. **Hero:** project name, concise promise, and one primary action — “Explore the lessons”.
2. **Method introduction:** real-life language, context, and natural expression.
3. **Seven learning directions:** clear cards with short explanations.
4. **How learning works:** `See → Understand → Describe → Speak` and `Practice → Feedback → Natural Reformulation → Recall → Transfer`.
5. **Featured lessons:** initially Glass, At the Beach, and At the Airport, because these are the first confirmed visual examples.
6. **Method principles:** Nationwide first; Southern English as a regional layer; practical frequency over rare expressions.
7. **Footer:** methodology, sources, repository, and project information.

Do not use generic stock-photo decoration where an image has no learning purpose.

## 6. Lesson page template

All lesson types should share a consistent visual framework, while preserving their individual teaching structure.

Recommended page elements:

- Breadcrumbs and section label.
- Lesson title and short learning objective.
- Optional level or topic metadata only where supported by the source.
- Table of contents for long lessons.
- Main lesson content, preserving original headings, tables, dialogues, and explanations.
- Images placed at their original instructional positions, with meaningful alt text.
- Clearly styled English examples and Russian explanations.
- Optional regional, pronunciation, or cultural notes when present in the source.
- Practice section.
- Previous / next lesson navigation.
- Related lessons, where the relationship is clear.

Do not force every lesson into an identical sequence if its source structure intentionally differs. `TEMPLATE.md` defines a minimum quality standard, not a rigid page layout.

## 7. Content and technical architecture

### 7.1 Recommended stack

- **Astro** for a static-first website.
- **Markdown** as the initial lesson content format.
- **Astro Content Collections** or a small, explicit content registry for indexing and validation.
- **Plain CSS** with design tokens; use minimal JavaScript.
- **GitHub Actions** for build and deployment.
- **GitHub Pages** as the initial hosting target, subject to repository and account configuration.

This is a proposed implementation choice, not an existing repository dependency.

### 7.2 Source-of-truth strategy

During the MVP:

- Keep the current lesson Markdown files in their existing directories.
- Do not duplicate lesson text into manually maintained HTML pages.
- Add a thin integration layer that maps source files to website routes and categories.
- Add frontmatter only where necessary and only after testing that it does not disrupt current Markdown use.
- If frontmatter migration is too invasive, use a central content manifest first.

The website build must fail visibly when a registered lesson or required local image is missing.

### 7.3 Suggested project structure

The following is a proposed website structure. It is not yet present in the repository.

```text
/
├── 01_scenarios/
├── 02_southern_layer/
├── 03_phonetics/
├── 04_lessons/
├── 05_idioms/
├── 06_everyday_expressions/
├── images/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── content/
│   ├── data/
│   └── styles/
├── public/
├── scripts/
├── astro.config.mjs
├── package.json
└── WEBSITE_PLAN.md
```

The exact content-loading arrangement must be verified against Astro's current version before implementation. Existing content directories should remain the canonical source.

## 8. Visual design direction

The website should follow the project's approved visual principle: photorealism for educational photography.

Proposed web interface direction:

- Navy as the primary structural color.
- Warm white or light neutral page backgrounds.
- Restrained gold accents.
- Clear, readable typography.
- Calm editorial layout with generous spacing.
- Consistent image ratios and captions.
- Minimal decoration and no crowded dashboard appearance.

The website interface palette is a proposal for the web implementation; it does not replace or amend the approved photography rules in `VISUAL_STYLE_GUIDE.md`.

### Image handling

- Preserve original source images.
- Use responsive image delivery and modern formats where practical.
- Generate optimized web copies rather than destructively replacing source assets.
- Keep descriptive filenames and provide alt text.
- Verify every local image reference during build.
- Do not enlarge low-resolution source images artificially.
- Review the 800×800 glass images against the current visual standard; retain them for the MVP if they remain clear and useful.

## 9. Search and discovery

### MVP

- Search lesson titles, section names, and lesson text.
- Filter by learning direction.
- Provide clear section landing pages.
- Include previous / next links and related lessons.
- Keep navigation usable without JavaScript where practical.

### Later enhancements

- Search by vocabulary item or expression.
- Filter by register or regional status when metadata is reliable.
- Learning progress and saved lessons.
- Audio and listening exercises.

Do not expose filters such as CEFR level, frequency, or regional distribution unless the underlying content actually contains verified metadata.

## 10. Accessibility, performance, and quality checks

The MVP should meet these practical requirements:

- Responsive layout at common mobile, tablet, and desktop widths.
- Semantic HTML and logical heading order.
- Keyboard-accessible navigation and controls.
- Visible focus states.
- Sufficient text/background contrast.
- Descriptive link text and image alt text.
- No horizontal overflow on mobile.
- Optimized images and no unnecessary client-side JavaScript.
- Useful page titles and descriptions.
- Custom 404 page.
- No broken internal or image links.

Automated checks should include:

1. Production build succeeds.
2. All registered content routes are generated.
3. All local Markdown image references resolve.
4. Internal links resolve.
5. No empty or duplicate routes.
6. Deployment works under the GitHub Pages repository path.
7. Representative pages are checked manually on desktop and mobile.

## 11. GitHub Pages deployment

The intended public URL is expected to use the repository's GitHub Pages configuration. Before deployment, verify:

- Whether the repository is configured for GitHub Pages.
- Whether it is deployed from GitHub Actions or another source.
- The exact base path required for a project site.
- Repository permissions for GitHub Actions.
- Whether a custom domain is configured.

Astro's `site` and `base` settings must match the actual deployment URL. Do not assume the site is already published or that deployment permissions are available.

## 12. Implementation phases

### Phase 0 — Documentation and content baseline
- Approve this plan.
- Reconcile `CONTENT_AUDIT.md` with the actual repository tree.
- Decide whether to restore/create `VISUAL_INVENTORY.md` or remove stale references to it.
- Define the content registry and route naming rules.

**Exit condition:** content inventory and public section map agree with the repository.

### Phase 1 — Astro foundation
- Add the Astro project and dependencies.
- Configure GitHub Pages base path.
- Create global layout, header, navigation, footer, and design tokens.
- Add a 404 page.

**Exit condition:** a minimal site builds and deploys successfully.

### Phase 2 — Content integration
- Connect existing Markdown files.
- Build section landing pages and lesson routes.
- Preserve lesson content and image positions.
- Add previous / next navigation.

**Exit condition:** all selected content pages render without broken assets or links.

### Phase 3 — Visual and usability layer
- Implement the approved visual direction.
- Optimize image copies.
- Add table of contents for long lessons.
- Test responsive layouts and accessibility.

**Exit condition:** Glass, At the Beach, and At the Airport work as polished reference pages on desktop and mobile.

### Phase 4 — MVP completion
- Add search and section filters.
- Validate all content routes.
- Run link, image, and production-build checks.
- Review deployment and publish.

**Exit condition:** the complete MVP is publicly accessible and the repository remains maintainable.

### Phase 5 — Future learning features
Only after the MVP is stable:
- Audio and pronunciation support.
- Interactive practice and feedback.
- Vocabulary search.
- Optional learner progress features.

These are future possibilities, not MVP commitments.

## 13. Scope boundaries

The first release is a **static learning website**, not a learning management system.

Not included in the MVP:

- User accounts or passwords.
- Cloud-based learner profiles.
- Payment processing.
- AI tutor integration.
- Automated grading.
- Complex backend services.
- Claims of official accreditation or CEFR certification.

These features would require separate requirements, privacy decisions, and technical planning.

## 14. Change control and approval

- Existing lesson content must not be rewritten as a side effect of site development.
- Changes to the method, lesson wording, or approved visual standards require separate review.
- Website code should be introduced in small, reviewable commits.
- Prefer a dedicated development branch for substantial implementation.
- Keep deployment changes separate from content corrections where practical.
- Document any automated transformation of Markdown.

## 15. Definition of MVP success

The MVP is successful when:

1. A learner can understand the purpose of the method from the home page.
2. All seven learning directions are discoverable.
3. Existing lessons render consistently and preserve their content.
4. The glass, beach, and airport visual lessons display their images correctly.
5. Navigation, search, and mobile layouts work.
6. Internal links and image references pass validation.
7. The site builds and deploys reliably through GitHub Pages.
8. The repository remains the maintainable source of truth.

---

**Project principle:**

> First preserve the method. Then make it accessible. Then expand the learning experience.
