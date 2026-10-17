# Image and typography provenance

Checked 14 October 2026. These published microscopy examples have documented provenance and licences. They are educational examples, not laboratory-validated questioned/reference specimens. No licensor endorsement is implied.

| Local file | Source, creator and description | Licence | Changes |
| --- | --- | --- | --- |
| `images/photomicrographs/human-hair-root.jpg` | [Human hair root03.jpg](https://commons.wikimedia.org/wiki/File:Human_hair_root03.jpg), Juan de Vojníkov, 17 October 2007; source describes a human hair root under a light microscope | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) (selected from offered licences) | Original JPEG downloaded unchanged; displayed smaller and digitally zoomable. No recolouring, cropping or added calibration. |
| `images/photomicrographs/cotton-sem.jpg` | [CSIRO ScienceImage 8114 Cotton fibre](https://commons.wikimedia.org/wiki/File:CSIRO_ScienceImage_8114_Cotton_fibre.jpg), CSIRO, 29 October 2008; scanning electron micrograph of cotton | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) | Original JPEG retained unchanged, including its 5 µm scale bar. Display sizing and zoom only. |
| `images/usm-logo.png` | Supplied USM branding, converted from the user's `USM Logo.webp` in the earlier branding update | No general reuse licence asserted | Format conversion; original proportions retained. Embedded copy in `branding.js` for offline reports. Confirm institutional usage permissions for intended publication. |
| `assets/*.svg` | Original code-drawn teaching schematics from version 1 | Original project illustrations; not published photomicrographs | Retained for existing activities and labelled explicitly as schematics. |
| Ladder outline on dashboard | New code-native decorative interface graphic | Original project graphic | Not a specimen illustration, scientific finding or image of an actual ladder. |

The published hair image is available under CC BY-SA 4.0. Preserve its attribution and licence if redistributing it. Any adaptations must comply with share-alike requirements. Display zoom does not create a scientifically validated derivative.

At the lecturer’s explicit request on 15 October 2026, original code-drawn SVG schematics were added for animal hair, soil, wood and pollen. They are educational illustrations, not source images or genuine photomicrographs. Existing manufactured-fibre, glass and paint illustrations remain schematics; real photomicrographs are still needed.

## Locally hosted fonts

- Plus Jakarta Sans: [Google Fonts source](https://github.com/google/fonts/tree/main/ofl/plusjakartasans); `fonts/PlusJakartaSans.ttf` and `fonts/PlusJakartaSans-LICENSE.txt` (SIL Open Font Licence 1.1).
- Inter: [Google Fonts source](https://github.com/google/fonts/tree/main/ofl/inter); `fonts/Inter.ttf` and `fonts/Inter-LICENSE.txt` (SIL Open Font Licence 1.1).

Retain the supplied licence files when deploying. Fonts and image files are served locally, so the app makes no runtime font/image requests to third parties.

## New drawings — 15 October 2026

`assets/schematics/animal-hair.svg`, `pollen.svg`, `wood-questioned.svg`, `wood-reference.svg`, `soil-questioned.svg` and `soil-reference.svg` are original vector drawings created for this project. They contain visible schematic/not-to-scale labels and accessible descriptions. Generic features are stylised; no animal species, wood species, mineral or pollen taxon is established. Wood and soil case pairs illustrate shared features and differences without asserting actual evidence provenance or unique origin. Drawing source: `scripts/draw_schematics.py`.
