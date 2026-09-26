# Animation System

## Core Concept
The hero animation simulates a 3D cinematic experience using a pre-rendered 2D image sequence.

## Canvas Engine (`HeroSequenceCanvas`)
- Loads 40 frames from `/public/animation/ezgif-frame-0XX.jpg`.
- Utilizes `HTML5 Canvas` with `requestAnimationFrame` for optimal performance without unnecessary React renders.
- Scales image to `cover` the viewport using `devicePixelRatio` for sharpness.
- Handles responsive resize events natively.

## Scroll Orchestration (`HeroScrollController`)
- Driven by `GSAP ScrollTrigger`.
- Scrubs a `progress` value from 0 to 1 over a `400vh` scroll distance.
- Includes `prefers-reduced-motion` detection, rendering a static central frame if activated.

## Story Beats (`HeroCopy`)
- Maps the 0 to 1 progress into distinct storytelling beats.
- Fades typography in and out based on progress milestones.
