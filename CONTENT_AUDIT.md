# CONTENT_AUDIT.md v1.2

## Инвентаризация материалов American English Method

**Дата:** 11 ноября 2026  
**Статус:** Content Audit v1.2 — сверено с деревом репозитория `main`  
**Назначение:** зафиксировать фактический состав материалов перед разработкой сайта.

> Этот документ фиксирует наличие и расположение файлов. Наличие файла само по себе не означает, что его содержание прошло независимую языковую, методическую или фактологическую проверку.

---

## 1. Сводная инвентаризация

| Направление | Файлов Markdown | Путь |
|---|---:|---|
| Everyday Scenarios + City & Daily Life | 22 | `01_scenarios/` |
| Southern English | 1 | `02_southern_layer/` |
| Connected Speech | 1 | `03_phonetics/` |
| Descriptive Lessons | 16 | `04_lessons/` |
| Idioms, включая фильтр | 3 | `05_idioms/` |
| Everyday Expressions | 17 | `06_everyday_expressions/` |
| Документы в корне репозитория, включая этот аудит и план сайта | 8 | корень |
| **Всего Markdown-файлов** | **68** | |

Дополнительно в репозитории обнаружено **14 графических файлов**: 6 изображений для урока о стакане, 4 для сценария о пляже и 4 для сценария об аэропорте.

В подсчёт входят файлы Markdown, находящиеся в перечисленных каталогах и в корне. `LICENSE` не является Markdown-файлом и в число 68 не включён.

## 2. Детальная инвентаризация

### 2.1. Everyday Scenarios — `01_scenarios/`

**5 файлов:**

- `clothes.md`
- `emergency.md`
- `phone.md`
- `refusal.md`
- `request.md`

### 2.2. City & Daily Life — `01_scenarios/city/`

**17 файлов:**

- `airport.md`
- `airplane.md`
- `beach.md`
- `cinema.md`
- `directions.md`
- `ferry.md`
- `ferry_journey.md`
- `haircut.md`
- `hospital.md`
- `park.md`
- `restaurant.md`
- `taxi.md`
- `train.md`
- `train_journey.md`
- `transit.md`
- `zoo.md`
- `clothes.md` is located in the parent `01_scenarios/` directory, not in `city/`.

### 2.3. Southern English — `02_southern_layer/`

- `patterns.md`

### 2.4. Connected Speech — `03_phonetics/`

- `connected_speech.md`

### 2.5. Descriptive Lessons — `04_lessons/`

**16 files currently present:**

- `lesson_01_glass.md`
- `lesson_02_knife.md`
- `lesson_03_table.md`
- `lesson_04_city.md`
- `lesson_04_clock.md`
- `lesson_05_living_room.md`
- `lesson_06_bedroom.md`
- `lesson_07_bathroom.md`
- `lesson_08_tableware.md`
- `lesson_10_entryway.md`
- `lesson_11_laundry.md`
- `lesson_12_pantry.md`
- `lesson_14_terrace.md`
- `lesson_15_sounds_and_smells.md`
- `lesson_16_feelings.md`
- `lesson_17_feelings_and_inner_feelings.md`

**Inventory note:** numbering is not a unique sequential index: there are two files numbered 04, and no files numbered 09 or 13. The repository currently contains 16 files; do not infer that lesson numbers correspond one-to-one with file count.

### 2.6. Idioms — `05_idioms/`

**3 files:**

- `IDIOMS_FILTER.md`
- `lesson_01_bad_day.md`
- `lesson_02_fear_surprise.md`

The filter is stored in `05_idioms/`; there is no root-level `IDIOMS_FILTER.md`.

### 2.7. Everyday Expressions — `06_everyday_expressions/`

**17 lesson files:**

- `lesson_01_ability_confidence.md`
- `lesson_02_confusion_understanding.md`
- `lesson_03_opinions_doubts.md`
- `lesson_04_agreement_disagreement.md`
- `lesson_05_reactions_responses.md`
- `lesson_06_problems_frustration.md`
- `lesson_07_requests_favors.md`
- `lesson_08_invitations_plans.md`
- `lesson_09_time_delays.md`
- `lesson_10_phone_texting.md`
- `lesson_11_shopping_prices.md`
- `lesson_12_restaurants_ordering.md`
- `lesson_13_hotels_checkin.md`
- `lesson_14_doctor_pharmacy.md`
- `lesson_15_bank_atm.md`
- `lesson_16_renting_car_driving.md`
- `lesson_17_airport_problems.md`

## 3. Root-level Markdown documents

The current root contains these 8 Markdown documents:

- `CONTENT_AUDIT.md`
- `LEARNING_PATHS.md`
- `MANIFESTO.md`
- `README.md`
- `SOURCES_AND_METHODOLOGY.md`
- `TEMPLATE.md`
- `VISUAL_STYLE_GUIDE.md`
- `WEBSITE_PLAN.md`

`VISUAL_INVENTORY.md` is referenced in older documentation but was not present in the inspected `main` branch tree. It must not be described as an existing file until it is restored or created.

## 4. Image assets

**14 image files were found:**

### Glass lesson — `images/lessons/objects/glass/`

- `object-glass-01.jpg`
- `object-glass-02.jpg`
- `object-glass-03.jpg`
- `object-glass-04.jpg`
- `object-glass-05.jpg`
- `object-glass-06.jpg`

### Beach scenario — `images/scenarios/beach/`

- `beach-access.png`
- `beach-lifeguard.png`
- `beach-rip-current.png`
- `beach-warning-flag.png`

### Airport scenario — `images/scenarios/airport/`

- `airport-boarding.png`
- `airport-check-in.png`
- `airport-security.png`
- `airport-terminal.png`

The image references in the following three Markdown files were checked against the repository paths and found to match existing assets:

- `04_lessons/lesson_01_glass.md`
- `01_scenarios/city/beach.md`
- `01_scenarios/city/airport.md`

This check does not certify image resolution, file size, licensing, alt text, or visual quality.

## 5. Documentation discrepancies to resolve

| Item | Finding | Action |
|---|---|---|
| `LEARNING_PATHS.md` | Describes five directions, while `README.md` and the current course structure describe seven | Align to seven directions |
| `README.md` | Contains outdated descriptive-lesson filenames and count | Update paths and count |
| `VISUAL_INVENTORY.md` | Referenced but absent from the current tree | Decide whether to create it or remove references |
| Previous audit counts | Old counts and filenames do not match the current tree | This version replaces the earlier inventory figures |
| Visual image requirements | Style guide specifies minimum dimensions and target file size | Check actual image metadata before optimizing |

## 6. Website readiness — inventory view

| Area | Repository observation |
|---|---|
| Learning content | 60 Markdown files across the seven learning directions |
| Root documentation | 8 Markdown documents, including the website plan |
| Visual assets | 14 image files in the current tree |
| Reference pages | Glass, beach, and airport pages have verified local image references |
| Website framework | No Astro project files were present in the audited tree before implementation |
| Deployment workflow | No existing website deployment configuration was identified in the audited tree |

The 60 learning-content files are the sum of the six learning-directory counts in Section 1. This is a file inventory, not a rating of completeness or quality.

## 7. Principles for the next stage

1. Preserve existing lesson files as the canonical content source.
2. Align repository documentation with actual paths and counts.
3. Do not invent lesson metadata, levels, or quality ratings that are not present in the source.
4. Define the content registry and route rules before implementing the website.
5. Validate every local image and internal link during the site build.
6. Treat missing visual inventory documentation as an open task, not as a completed deliverable.

**Sequence:** verified inventory → documentation alignment → content model → website implementation.
