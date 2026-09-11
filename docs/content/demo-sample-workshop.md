---
title: Demo, Sample, Workshop
sidebar_label: Demo, Sample, Workshop
---

Demos, samples, and workshops are different assets.

They can share code. They can share a story. They can even grow from one another. Treating them as the same thing creates trouble.

A demo proves the story.

A sample proves the story can be reproduced.

A workshop proves the story can be taught.

## The scaling ladder

<Framework
  title="Show, reproduce, teach"
  steps={[
    {label: 'Demo', description: 'An asset the creators can deliver confidently.'},
    {label: 'Sample', description: 'An asset others can reproduce with their own resources.'},
    {label: 'Workshop', description: 'An asset others can teach from end to end.'},
  ]}
/>

The movement is show, show me how, show others how.

Each step serves a wider audience. Each step requires more work.

```elucim
version: "2.0"
scene:
  type: player
  fps: 30
  width: 900
  height: 300
  background: transparent
  children: [demoBox, demoText, demoNote, sampleBox, sampleText, sampleNote, workshopBox, workshopText, workshopNote, a1, a2, audience1, audience2, audience3, work1, work2, work3]
elements:
  demoBox:
    id: demoBox
    type: rect
    props: { type: rect, x: 70, y: 90, width: 180, height: 82, rx: 12, fill: "$surface", stroke: "$primary", strokeWidth: 2, opacity: 0 }
  demoText:
    id: demoText
    type: text
    props: { type: text, x: 160, y: 124, content: "demo", fill: "$foreground", fontSize: 22, fontWeight: 700, textAnchor: middle, opacity: 0 }
  demoNote:
    id: demoNote
    type: text
    props: { type: text, x: 160, y: 150, content: "the story works", fill: "$muted", fontSize: 14, textAnchor: middle, opacity: 0 }
  sampleBox:
    id: sampleBox
    type: rect
    props: { type: rect, x: 360, y: 70, width: 180, height: 102, rx: 12, fill: "$surface", stroke: "$accent", strokeWidth: 2, opacity: 0 }
  sampleText:
    id: sampleText
    type: text
    props: { type: text, x: 450, y: 112, content: "sample", fill: "$foreground", fontSize: 22, fontWeight: 700, textAnchor: middle, opacity: 0 }
  sampleNote:
    id: sampleNote
    type: text
    props: { type: text, x: 450, y: 142, content: "someone else can run it", fill: "$muted", fontSize: 14, textAnchor: middle, opacity: 0 }
  workshopBox:
    id: workshopBox
    type: rect
    props: { type: rect, x: 650, y: 44, width: 190, height: 128, rx: 12, fill: "$surface", stroke: "$success", strokeWidth: 2, opacity: 0 }
  workshopText:
    id: workshopText
    type: text
    props: { type: text, x: 745, y: 100, content: "workshop", fill: "$foreground", fontSize: 22, fontWeight: 700, textAnchor: middle, opacity: 0 }
  workshopNote:
    id: workshopNote
    type: text
    props: { type: text, x: 745, y: 132, content: "someone else can teach it", fill: "$muted", fontSize: 14, textAnchor: middle, opacity: 0 }
  a1:
    id: a1
    type: line
    props: { type: line, x1: 250, y1: 131, x2: 360, y2: 121, stroke: "$accent", strokeWidth: 2, endCap: arrow, opacity: 0 }
  a2:
    id: a2
    type: line
    props: { type: line, x1: 540, y1: 121, x2: 650, y2: 108, stroke: "$accent", strokeWidth: 2, endCap: arrow, opacity: 0 }
  audience1:
    id: audience1
    type: text
    props: { type: text, x: 160, y: 220, content: "smallest audience", fill: "$muted", fontSize: 14, textAnchor: middle, opacity: 0 }
  audience2:
    id: audience2
    type: text
    props: { type: text, x: 450, y: 220, content: "more reuse", fill: "$muted", fontSize: 14, textAnchor: middle, opacity: 0 }
  audience3:
    id: audience3
    type: text
    props: { type: text, x: 745, y: 220, content: "widest teaching path", fill: "$muted", fontSize: 14, textAnchor: middle, opacity: 0 }
  work1:
    id: work1
    type: circle
    props: { type: circle, cx: 160, cy: 248, r: 6, fill: "$primary", stroke: "$primary", strokeWidth: 2, opacity: 0 }
  work2:
    id: work2
    type: circle
    props: { type: circle, cx: 450, cy: 248, r: 9, fill: "$accent", stroke: "$accent", strokeWidth: 2, opacity: 0 }
  work3:
    id: work3
    type: circle
    props: { type: circle, cx: 745, cy: 248, r: 13, fill: "$success", stroke: "$success", strokeWidth: 2, opacity: 0 }
timelines:
  ladder:
    id: ladder
    duration: 230
    tracks:
      - { target: demoBox, property: opacity, keyframes: [ { frame: 0, value: 0 }, { frame: 12, value: 1, easing: easeOutCubic } ] }
      - { target: demoText, property: opacity, keyframes: [ { frame: 4, value: 0 }, { frame: 16, value: 1, easing: easeOutCubic } ] }
      - { target: demoNote, property: opacity, keyframes: [ { frame: 8, value: 0 }, { frame: 20, value: 1, easing: easeOutCubic } ] }
      - { target: audience1, property: opacity, keyframes: [ { frame: 20, value: 0 }, { frame: 32, value: 1, easing: easeOutCubic } ] }
      - { target: work1, property: opacity, keyframes: [ { frame: 24, value: 0 }, { frame: 36, value: 1, easing: easeOutCubic } ] }
      - { target: a1, property: opacity, keyframes: [ { frame: 48, value: 0 }, { frame: 60, value: 1, easing: easeOutCubic } ] }
      - { target: sampleBox, property: opacity, keyframes: [ { frame: 64, value: 0 }, { frame: 76, value: 1, easing: easeOutCubic } ] }
      - { target: sampleText, property: opacity, keyframes: [ { frame: 68, value: 0 }, { frame: 80, value: 1, easing: easeOutCubic } ] }
      - { target: sampleNote, property: opacity, keyframes: [ { frame: 72, value: 0 }, { frame: 84, value: 1, easing: easeOutCubic } ] }
      - { target: audience2, property: opacity, keyframes: [ { frame: 86, value: 0 }, { frame: 98, value: 1, easing: easeOutCubic } ] }
      - { target: work2, property: opacity, keyframes: [ { frame: 90, value: 0 }, { frame: 102, value: 1, easing: easeOutCubic } ] }
      - { target: a2, property: opacity, keyframes: [ { frame: 114, value: 0 }, { frame: 126, value: 1, easing: easeOutCubic } ] }
      - { target: workshopBox, property: opacity, keyframes: [ { frame: 130, value: 0 }, { frame: 142, value: 1, easing: easeOutCubic } ] }
      - { target: workshopText, property: opacity, keyframes: [ { frame: 134, value: 0 }, { frame: 146, value: 1, easing: easeOutCubic } ] }
      - { target: workshopNote, property: opacity, keyframes: [ { frame: 138, value: 0 }, { frame: 150, value: 1, easing: easeOutCubic } ] }
      - { target: audience3, property: opacity, keyframes: [ { frame: 154, value: 0 }, { frame: 166, value: 1, easing: easeOutCubic } ] }
      - { target: work3, property: opacity, keyframes: [ { frame: 158, value: 0 }, { frame: 170, value: 1, easing: easeOutCubic } ] }
stateMachines:
  main:
    id: main
    entry: play
    states:
      play: { timeline: ladder }
    transitions:
      - { id: entry-play, from: entry, to: play, trigger: onStart }
      - { id: play-loop, from: play, to: entry, exitTime: 1 }
defaultStateMachine: main
```

*The same idea can climb the ladder, but every rung asks the asset to carry more of the teaching load.*

## Demo

A demo is built to make the story visible.

A demo can skip edge cases. It still needs to show the real state of the technology. A good demo makes the value clear, exposes product truth, and gives the team a way to learn before the story reaches a wider audience.

The demo has to answer five questions.

1. What is the story?
2. Who needs to see it?
3. What does it prove?
4. What did we have to fake, script, preconfigure, or work around?
5. What should change because we built it?

That last question is the bridge back to Refine Technology.

## Sample

A sample is for someone who was not in the room.

It needs a higher bar than a demo because the original creator is no longer standing there to explain the missing step. The sample has to carry more of the experience by itself.

A sample should be reproducible from a clean starting point. It should have clear setup, clear prerequisites, safe defaults, and a path that teaches while it runs. If the sample needs a secret, a quota, a cloud resource, a permission, or a paid service, say so before the developer is halfway through.

The test is whether another developer can stand it up and understand what happened.

## Workshop

A workshop is a teaching system.

It needs the code and the explanation, but it also needs structure. Learners need a path. Trainers need timing, checkpoints, recovery steps, and enough context to teach without being the original author.

A workshop breaks the material into modules. Each module needs a goal, a task, and a visible result. The workshop assumes people fall behind, hit errors, miss a step, and ask the same question in five different ways.

That is part of teaching.

## Graduation is optional

Some demos should stay demos. Some samples should stay samples.

Graduation is deliberate. Ask whether the audience need, strategic value, and expected reuse justify the work required to make the asset reliable for the next circle of users.

Sometimes the right answer is to keep a demo as a demo. Other times, the right answer is to sunset it after the event. When the story matters enough, harden it into a sample or workshop.

Ask whether this story should scale.

## The workback

| Phase | Purpose |
| --- | --- |
| Ideation | Choose the narrative, audience, features, and product truth to test. |
| Execution | Build quickly, prove the story, and adjust based on what the technology can support. |
| Hardening | Remove demo-only assumptions, automate setup, validate repeatability, and document the path. |
| Teaching | Break the sample into teachable modules and add trainer and learner guidance. |
| Maintenance | Keep the asset aligned with the product and route feedback back to the owning teams. |
| Sunset | Retire or redirect the asset when it no longer reflects the current technology or strategy. |

The lifecycle helps everyone see whether an asset is built to show, built to reproduce, or built to teach. That distinction saves time and protects developers from assets that promise more than they can carry.
