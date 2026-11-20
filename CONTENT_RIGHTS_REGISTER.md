# AEM Content Rights Register

**Register version:** 1.0  
**Created:** 20 November 2026  
**Governing policy:** [CONTENT_RIGHTS_POLICY.md](./CONTENT_RIGHTS_POLICY.md)

This is the central tracking register for third-party content used or proposed for AEM. An item is not cleared merely because it appears in an older credit list or because a source is educational or publicly accessible.

## Status key

- **APPROVED** — documented evidence covers the exact planned use.
- **CONDITIONAL** — use is permitted only if the listed conditions are followed.
- **HOLD** — incomplete evidence or uncertain rights; do not publish/use pending review.
- **REMOVED** — no longer used; retained for audit history.

## 1. Known existing assets — initial entries

| ID | Asset / use | Creator / rights holder | Source and rights evidence | Intended AEM use | Commercial use | Copy / host | Translate / adapt | Attribution | Status / next action |
|---|---|---|---|---|---|---|---|---|---|
| VOA-AUD-001 | “Words to Travel With, Part 2: Airports” — 01_scenarios/city/airport.md | Voice of America, Learning English | [Original lesson](https://learningenglish.voanews.com/a/words-to-travel-with-part-2-airports/4697903.html); [VOA Learning English content permissions](https://learningenglish.voanews.com/p/6861.html) | External audio player; stream from VOA host | VOA Learning English rights page states commercial educational reuse is permitted with credit, subject to third-party exclusions | Local copy not recorded; current use is external stream | Do not assume transcript translation/adaptation is cleared without item-level review | Credit VOA Learning English and link to source/rights page | **CONDITIONAL — recheck exact lesson audio and player; exclude third-party article assets** |
| VOA-AUD-002 | “Describing Pets” — 04_lessons/lesson_01_glass.md | Voice of America, Learning English | [Original lesson](https://learningenglish.voanews.com/a/describing-pets/7364518.html); [VOA Learning English content permissions](https://learningenglish.voanews.com/p/6861.html) | External audio player; stream from VOA host | VOA Learning English rights page states commercial educational reuse is permitted with credit, subject to third-party exclusions | Local copy not recorded; current use is external stream | Do not assume transcript translation/adaptation is cleared without item-level review | Credit VOA Learning English and link to source/rights page | **CONDITIONAL — recheck exact lesson audio and player** |
| VOA-AUD-003 | “Let’s Learn English — Level 1, Lesson 19: When Do I Start?” — Everyday Life lesson page | Voice of America, Learning English | [Original lesson](https://learningenglish.voanews.com/a/lets-learn-english-lesson-19-when-do-you-start/3357760.html); [VOA Learning English content permissions](https://learningenglish.voanews.com/p/6861.html) | External MP3 player; lesson page also contains a short transcript/translation | VOA Learning English rights page states Learning English MP3s may be reused for educational and commercial purposes with attribution; transcript excerpt/translation needs separate item-level confirmation | Audio streamed from VOA host; no local copy recorded | **HOLD for copied transcript/translation** until the exact excerpt and adaptation basis are documented | Credit VOA Learning English and link to original lesson and permissions | **CONDITIONAL for audio only; HOLD for transcript/translation pending review** |
| IMG-UNSPLASH-001 | Residential-neighborhood photograph used on Everyday Life page | Exact photographer/title not captured in this initial register | Original Unsplash item URL must be recovered from page/source markup; [Unsplash License](https://unsplash.com/license) | Website illustration | Not yet confirmed for this exact item and use | Current implementation/source details need recheck | Cropping/other edits not yet recorded | Photographer and original photo page required where available; follow current terms | **HOLD — identify exact asset, photographer, source page, and confirm current license and separate rights** |
| IMG-PEXELS-LEGACY | Photographs listed in IMAGE_CREDITS.md | Individual photographers are listed in IMAGE_CREDITS.md | Individual Pexels source pages are listed there; [Pexels License](https://www.pexels.com/license/) | Existing lesson/scenario images | Existing credit document describes Pexels commercial-use terms, but each item and current terms have not been re-audited under this policy | Local hosting vs external CDN must be checked per asset | Any crop/edit must be recorded where required | Existing photographer/source credits are in IMAGE_CREDITS.md; verify against each source page | **CONDITIONAL — legacy inventory; audit each photo, current license, asset source, and separate model/property/trademark rights** |

## 2. Detailed asset records

Add one row per distinct asset. Do not group unrelated photographs, recordings, or excerpts under one approval if their rights differ.

| ID | Asset title / description | Type | Author / creator | Rights holder | Original source URL | Exact license / permission | Commercial use | Reproduction / hosting / streaming | Translation / adaptation / edits | Required attribution | AEM page / file | Date checked | Reviewer | Status | Evidence / notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| AEM-NEW-001 |  |  |  |  |  |  |  |  |  |  |  |  |  | HOLD |  |

## 3. Research sources (facts, not copied assets)

For research used to write original AEM explanations, keep a source note in the lesson or research file. Record the source, access date, and claims supported. Facts may be restated in original wording, but do not copy protected text, images, charts, or distinctive presentation without rights.

| Research topic | Source / institution | URL | Claims or facts supported | Access date | Notes |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

## 4. Audit queue

1. Reconcile every photograph in IMAGE_CREDITS.md with its exact original source page and current license; check recognizable people, brands, artwork, and property separately.
2. Review all audio entries in AUDIO_SOURCES.md, including the exact audio item, external player, attribution, and any transcript or translation used on AEM pages.
3. Recover the exact Unsplash source page and photographer for the Everyday Life image.
4. Inspect all AEM lesson pages for copied literary excerpts, lyrics, news text, third-party transcripts, charts, screenshots, and embedded media.
5. Clarify the scope of the repository's LICENSE file so it cannot be mistaken for a blanket license covering third-party materials.
6. Recheck every entry whenever its source terms or AEM use changes.

## 5. Decision log

| Date | Asset ID / scope | Decision | Reason / evidence | Follow-up |
|---|---|---|---|---|
| 2026-11-20 | Initial register | Created | Existing image/audio registers and currently documented VOA/Unsplash/Pexels uses were inventoried; legacy entries are not treated as blanket clearance | Complete the audit queue before treating legacy assets as fully cleared |