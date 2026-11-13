# VISUAL_INVENTORY.md
## American English Method — Visual Asset Inventory

**Document:** Visual Inventory  
**Version:** 1.0  
**Date:** November 11, 2026  
**Status:** Repository inventory — file paths and byte sizes verified against `main`  
**Purpose:** Record the visual assets currently present and their known instructional use before website integration.

> This is an asset inventory, not a visual-quality, licensing, resolution, or accessibility certification. Dimensions and alt-text quality have not been independently verified in this inventory.

---

## 1. Summary

The repository currently contains **14 image files** in three teaching groups:

| Group | Files | Format | Repository folder |
|---|---:|---|---|
| Glass — descriptive lesson | 6 | JPEG | `images/lessons/objects/glass/` |
| Beach — city scenario | 4 | PNG | `images/scenarios/beach/` |
| Airport — city scenario | 4 | PNG | `images/scenarios/airport/` |
| **Total** | **14** | | |

The images are original repository assets and should remain the canonical source files.

## 1A. Additional lesson visuals — Pexels

Fifteen Pexels photographs are now embedded in lesson Markdown as externally hosted images, with visible photographer credit and a source link in each lesson. They are not counted in the 14 locally stored image files above.

| Lesson | Visual subject | Source register |
|---|---|---|
| Knife | Knife in use on a cutting board | `IMAGE_CREDITS.md` |
| Table | Wooden kitchen table | `IMAGE_CREDITS.md` |
| Clock | Vintage wall clock | `IMAGE_CREDITS.md` |
| Living room | Bright living-room interior | `IMAGE_CREDITS.md` |
| Bedroom | Bedroom interior | `IMAGE_CREDITS.md` |
| Bathroom | Modern bathroom | `IMAGE_CREDITS.md` |
| Tableware | Dining table setting | `IMAGE_CREDITS.md` |
| Entryway | Home hallway | `IMAGE_CREDITS.md` |
| Laundry | Laundry room | `IMAGE_CREDITS.md` |
| Pantry | Organized pantry shelves | `IMAGE_CREDITS.md` |
| Terrace | Outdoor home terrace | `IMAGE_CREDITS.md` |
| Sounds and smells | Forest road after rain | `IMAGE_CREDITS.md` |
| Feelings | Surprise expressions | `IMAGE_CREDITS.md` |
| City | New York cityscape | `IMAGE_CREDITS.md` |
| Inner feelings | Thoughtful person at a window | `IMAGE_CREDITS.md` |

**Licensing and hosting note:** Pexels photos are embedded from the Pexels CDN and are not yet copied into the repository. Photographer credits and original source-page links are recorded in `IMAGE_CREDITS.md`. External hosting means the site depends on the source CDN remaining available. A later optimization pass should download approved assets, store them locally, compress them to the Visual Style Guide target, and verify the local copies against the source register.

## 2. Glass — Descriptive Lesson

**Source lesson:** `04_lessons/lesson_01_glass.md`  
**Teaching purpose:** support object description through overall appearance, physical details, position, context, and action.

| Asset | File size | Current use |
|---|---:|---|
| `object-glass-01.jpg` | 73,403 bytes (71.7 KiB) | Main glass image; referenced in the lesson |
| `object-glass-02.jpg` | 87,119 bytes (85.1 KiB) | Glass visual sequence |
| `object-glass-03.jpg` | 66,816 bytes (65.3 KiB) | Glass visual sequence |
| `object-glass-04.jpg` | 75,795 bytes (74.0 KiB) | Glass visual sequence |
| `object-glass-05.jpg` | 67,409 bytes (65.8 KiB) | Glass visual sequence |
| `object-glass-06.jpg` | 64,147 bytes (62.6 KiB) | Glass visual sequence |

**Directory:** `images/lessons/objects/glass/`

The six assets are present. The Markdown source contains image references to this directory. Their individual dimensions and all six placements should be checked during the visual QA pass.

## 3. Beach — City & Daily Life

**Source lesson:** `01_scenarios/city/beach.md`

| Asset | File size | Intended visual subject |
|---|---:|---|
| `beach-access.png` | 944,369 bytes (922.2 KiB) | Beach access |
| `beach-lifeguard.png` | 919,001 bytes (897.5 KiB) | Lifeguard |
| `beach-rip-current.png` | 909,398 bytes (888.1 KiB) | Rip current |
| `beach-warning-flag.png` | 754,112 bytes (736.4 KiB) | Beach warning flag |

**Directory:** `images/scenarios/beach/`

All four assets are present. Their references in the beach Markdown file were checked against the repository paths.

## 4. Airport — City & Daily Life

**Source lesson:** `01_scenarios/city/airport.md`

| Asset | File size | Intended visual subject |
|---|---:|---|
| `airport-boarding.png` | 884,782 bytes (864.0 KiB) | Boarding |
| `airport-check-in.png` | 916,597 bytes (895.1 KiB) | Check-in |
| `airport-security.png` | 962,341 bytes (939.8 KiB) | Airport security |
| `airport-terminal.png` | 918,027 bytes (896.5 KiB) | Terminal |

**Directory:** `images/scenarios/airport/`

All four assets are present. Their references in the airport Markdown file were checked against the repository paths.

## 5. Technical observations

The current `VISUAL_STYLE_GUIDE.md` specifies:
- JPEG for photographs and PNG for diagrams;
- a target minimum resolution of 1200×800 px;
- a target file size of up to 300 KB;
- descriptive filenames;
- a planned website image location of `public/images/`.

Repository byte sizes were read from the Git tree on November 11, 2026.

### File-size comparison

- All six glass JPEGs are below 300 KB.
- All four beach PNGs and all four airport PNGs are above 300 KB.
- The PNG files should be reviewed for web optimization before or during the website visual phase.
- Preserve the originals. Create optimized web copies or generated build assets; do not destructively overwrite the source images.
- Do not upscale low-resolution images artificially.

The actual pixel dimensions, color profiles, and visual sharpness are not reported by the Git tree metadata and remain to be checked from the image files themselves.

## 6. Markdown reference verification

The local image references in these three source files were checked against the current repository tree and matched existing assets:

- `04_lessons/lesson_01_glass.md`
- `01_scenarios/city/beach.md`
- `01_scenarios/city/airport.md`

This confirms path existence only. It does not certify that every image has an informative alt description or that every image is displayed at an appropriate size.

## 7. Website integration rules

1. Keep `images/` as the canonical source directory during the MVP.
2. Configure the website build to serve or process these assets without maintaining manually edited duplicates.
3. Preserve the instructional position of images in Markdown.
4. Provide meaningful alt text based on the actual image and its teaching purpose.
5. Generate responsive and optimized web copies where appropriate.
6. Verify image loading on all three reference pages: Glass, Beach, and Airport.
7. Check mobile cropping, aspect ratio, loading performance, and visual clarity.
8. Add new assets to this inventory when they enter the repository.

## 8. Open visual QA tasks

- [ ] Inspect actual pixel dimensions for all 14 files.
- [ ] Review the 8 large PNG files and create optimized web derivatives.
- [ ] Check whether each Markdown image has useful alt text.
- [ ] Verify all images render at the correct position in the website.
- [ ] Test responsive display on mobile, tablet, and desktop.
- [ ] Record any new image groups added to the repository.

---

## Governing principle

**Images are learning tools, not decoration.** Their purpose is to help the learner notice, understand, describe, and speak.
