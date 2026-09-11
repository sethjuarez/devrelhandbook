---
title: Create Content
sidebar_label: Overview
---

Developer content should earn its place.

Some content inspires. It shows what is possible and gives developers a reason to care.

Some content unblocks. It removes the next obstacle between a developer and a working result.

The best content often does both. It raises ambition and lowers friction at the same time.

Demos, samples, workshops, and videos belong here too. They are content assets, but they also carry product truth. A demo shows the story. A sample helps someone reproduce it. A workshop helps someone else teach it. A video gives the story a clock and asks the developer for attention in sequence.

<Principle title="Content has to do a job">
Every asset should inspire, unblock, or move a developer toward a clear next action.
</Principle>

## The job content does

DevRel content is part of the operating loop.

Content reaches developers with a story, a path, or a solution. If it works, developers respond. They try the sample, ask questions, file issues, join the community, or build something new. That response becomes signal. The signal improves the next piece of content and the technology behind it.

```elucim
version: "2.0"
scene:
  type: player
  fps: 30
  width: 900
  height: 280
  background: transparent
  children: [assetBox, assetText, developerBox, developerText, responseBox, responseText, signalBox, signalText, improveBox, improveText, a1, a2, a3, a4, a5]
elements:
  assetBox:
    id: assetBox
    type: rect
    props: { type: rect, x: 55, y: 92, width: 150, height: 72, rx: 10, fill: "$surface", stroke: "$primary", strokeWidth: 2, opacity: 0 }
  assetText:
    id: assetText
    type: text
    props: { type: text, x: 130, y: 134, content: "content asset", fill: "$foreground", fontSize: 16, textAnchor: middle, opacity: 0 }
  developerBox:
    id: developerBox
    type: rect
    props: { type: rect, x: 280, y: 92, width: 150, height: 72, rx: 10, fill: "$surface", stroke: "$accent", strokeWidth: 2, opacity: 0 }
  developerText:
    id: developerText
    type: text
    props: { type: text, x: 355, y: 134, content: "developer tries it", fill: "$foreground", fontSize: 16, textAnchor: middle, opacity: 0 }
  responseBox:
    id: responseBox
    type: rect
    props: { type: rect, x: 505, y: 92, width: 150, height: 72, rx: 10, fill: "$surface", stroke: "$warning", strokeWidth: 2, opacity: 0 }
  responseText:
    id: responseText
    type: text
    props: { type: text, x: 580, y: 134, content: "response", fill: "$foreground", fontSize: 16, textAnchor: middle, opacity: 0 }
  signalBox:
    id: signalBox
    type: rect
    props: { type: rect, x: 730, y: 92, width: 120, height: 72, rx: 10, fill: "$surface", stroke: "$success", strokeWidth: 2, opacity: 0 }
  signalText:
    id: signalText
    type: text
    props: { type: text, x: 790, y: 134, content: "signal", fill: "$foreground", fontSize: 16, textAnchor: middle, opacity: 0 }
  improveBox:
    id: improveBox
    type: rect
    props: { type: rect, x: 335, y: 208, width: 230, height: 48, rx: 10, fill: "$surface", stroke: "$muted", strokeWidth: 2, opacity: 0 }
  improveText:
    id: improveText
    type: text
    props: { type: text, x: 450, y: 238, content: "improve content and product", fill: "$muted", fontSize: 15, textAnchor: middle, opacity: 0 }
  a1:
    id: a1
    type: line
    props: { type: line, x1: 205, y1: 128, x2: 280, y2: 128, stroke: "$accent", strokeWidth: 2, endCap: arrow, opacity: 0 }
  a2:
    id: a2
    type: line
    props: { type: line, x1: 430, y1: 128, x2: 505, y2: 128, stroke: "$accent", strokeWidth: 2, endCap: arrow, opacity: 0 }
  a3:
    id: a3
    type: line
    props: { type: line, x1: 655, y1: 128, x2: 730, y2: 128, stroke: "$accent", strokeWidth: 2, endCap: arrow, opacity: 0 }
  a4:
    id: a4
    type: line
    props: { type: line, x1: 790, y1: 164, x2: 540, y2: 208, stroke: "$muted", strokeWidth: 2, endCap: arrow, opacity: 0 }
  a5:
    id: a5
    type: line
    props: { type: line, x1: 335, y1: 232, x2: 130, y2: 164, stroke: "$muted", strokeWidth: 2, endCap: arrow, opacity: 0 }
timelines:
  contentLoop:
    id: contentLoop
    duration: 230
    tracks:
      - { target: assetBox, property: opacity, keyframes: [ { frame: 0, value: 0 }, { frame: 12, value: 1, easing: easeOutCubic } ] }
      - { target: assetText, property: opacity, keyframes: [ { frame: 4, value: 0 }, { frame: 16, value: 1, easing: easeOutCubic } ] }
      - { target: a1, property: opacity, keyframes: [ { frame: 28, value: 0 }, { frame: 40, value: 1, easing: easeOutCubic } ] }
      - { target: developerBox, property: opacity, keyframes: [ { frame: 44, value: 0 }, { frame: 56, value: 1, easing: easeOutCubic } ] }
      - { target: developerText, property: opacity, keyframes: [ { frame: 48, value: 0 }, { frame: 60, value: 1, easing: easeOutCubic } ] }
      - { target: a2, property: opacity, keyframes: [ { frame: 72, value: 0 }, { frame: 84, value: 1, easing: easeOutCubic } ] }
      - { target: responseBox, property: opacity, keyframes: [ { frame: 88, value: 0 }, { frame: 100, value: 1, easing: easeOutCubic } ] }
      - { target: responseText, property: opacity, keyframes: [ { frame: 92, value: 0 }, { frame: 104, value: 1, easing: easeOutCubic } ] }
      - { target: a3, property: opacity, keyframes: [ { frame: 116, value: 0 }, { frame: 128, value: 1, easing: easeOutCubic } ] }
      - { target: signalBox, property: opacity, keyframes: [ { frame: 132, value: 0 }, { frame: 144, value: 1, easing: easeOutCubic } ] }
      - { target: signalText, property: opacity, keyframes: [ { frame: 136, value: 0 }, { frame: 148, value: 1, easing: easeOutCubic } ] }
      - { target: a4, property: opacity, keyframes: [ { frame: 156, value: 0 }, { frame: 168, value: 1, easing: easeOutCubic } ] }
      - { target: improveBox, property: opacity, keyframes: [ { frame: 168, value: 0 }, { frame: 180, value: 1, easing: easeOutCubic } ] }
      - { target: improveText, property: opacity, keyframes: [ { frame: 172, value: 0 }, { frame: 184, value: 1, easing: easeOutCubic } ] }
      - { target: a5, property: opacity, keyframes: [ { frame: 184, value: 0 }, { frame: 196, value: 1, easing: easeOutCubic } ] }
stateMachines:
  main:
    id: main
    entry: play
    states:
      play: { timeline: contentLoop }
    transitions:
      - { id: entry-play, from: entry, to: play, trigger: onStart }
      - { id: play-loop, from: play, to: entry, exitTime: 1 }
defaultStateMachine: main
```

*A content asset is not the end of the work. It is how the team learns what the next asset and product path should fix.*

Content planning starts with sharper questions.

<Checklist
  title="Before making the asset"
  items={[
    'Name the developer this is for.',
    'Name what they are trying to do.',
    'Name what is blocking them.',
    'Name the action they should take next.',
  ]}
/>

If those answers are unclear, the content is not ready.

## Inspire or unblock

Two modes help.

| Mode | Purpose | Good when it helps a developer |
| --- | --- | --- |
| Inspire | Show the art of the possible. | Believe a problem is solvable or worth trying. |
| Unblock | Remove practical friction. | Complete a task, fix an error, choose a path, or ship something. |

Inspirational content makes the future feel reachable. A good demo, keynote segment, story, or architecture walkthrough helps developers see themselves using the technology.

Unblocking content is often the most valuable thing a DevRel team can make. Setup guides, samples, error explanations, migration notes, and decision guides respect the developer's time because they remove pain.

If a piece does neither, it is probably serving the publisher more than the developer.

## Leave an artifact behind

Every meaningful talk, event, video, workshop, or campaign should leave something reusable behind.

At minimum, ask whether the work can produce one of these artifacts.

| Artifact | Why it matters |
| --- | --- |
| Presentation | Keeps the story clear and reusable. |
| Repository | Lets developers inspect, fork, and try the idea. |
| Written path | Helps people who were not in the room. |
| Measured action | Connects the asset to an outcome. |

The event is the moment. The artifact is how the moment keeps working.

The same logic applies to demos, samples, and workshops. They are the assets that let a story move from a room to a repo to a learning path.

Video needs the same discipline. It should open on value, show the real path, and leave the developer with an artifact or action after the player stops.

## Run a content pipeline

Good content is rarely an accident.

A content pipeline helps the team avoid the panic cycle where every week starts from zero. Keep one piece in final polish, one in draft, and one idea being scoped. Give the work enough time to become useful.

Use the pipeline to check for fit.

1. Does it map to the mission?
2. Does it serve a named developer audience?
3. Does it inspire, unblock, or both?
4. Does it name the next action?
5. Does it connect back to product or community signal?

Content that passes those tests has a reason to exist.

## Make the complex feel easier

Developer content should make the path through complexity easier to follow.

That often means the DevRel team absorbs pain on behalf of the developer. Try the setup from scratch. Hit the bad error. Find the missing permission. Notice the term that only makes sense to the product team. Then turn that work into a clearer path.

The developer should feel the benefit more than the struggle.
