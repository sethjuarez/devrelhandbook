---
title: Measure Success
sidebar_label: Measure Success
---

DevRel measurement starts with one question.

What action are we asking developers to take?

<Practice title="Name the action before the dashboard">
Start with the behavior DevRel is trying to cause. Then choose the metric that can prove whether it happened.
</Practice>

Views, registrations, followers, impressions, and attendance can be useful. They tell you how many people showed up. They do not tell you whether the work changed anything.

Action is the missing half.

## Reach, action, quality

Measurement has to separate three things.

| Metric family | What it tells you | Examples |
| --- | --- | --- |
| People Metric | Who showed up. | Views, readers, attendees, participants, subscribers. |
| Action Metric | What they did next. | Clicks, forks, installs, deploys, registrations, feedback, contributions. |
| Quality Signal | Whether the action was useful. | Completion, satisfaction, actionable feedback, retention, successful deployment. |

```elucim
version: "2.0"
scene:
  type: player
  fps: 30
  width: 900
  height: 260
  background: transparent
  children: [peopleBox, peopleText, peopleNote, actionBox, actionText, actionNote, qualityBox, qualityText, qualityNote, a1, a2, correctionLine1, correctionLine2, correctionLine3, correctionText]
elements:
  peopleBox:
    id: peopleBox
    type: rect
    props: { type: rect, x: 70, y: 72, width: 180, height: 86, rx: 12, fill: "$surface", stroke: "$primary", strokeWidth: 2, opacity: 0 }
  peopleText:
    id: peopleText
    type: text
    props: { type: text, x: 160, y: 108, content: "people metric", fill: "$foreground", fontSize: 18, fontWeight: 700, textAnchor: middle, opacity: 0 }
  peopleNote:
    id: peopleNote
    type: text
    props: { type: text, x: 160, y: 136, content: "who showed up", fill: "$muted", fontSize: 14, textAnchor: middle, opacity: 0 }
  actionBox:
    id: actionBox
    type: rect
    props: { type: rect, x: 360, y: 72, width: 180, height: 86, rx: 12, fill: "$surface", stroke: "$accent", strokeWidth: 2, opacity: 0 }
  actionText:
    id: actionText
    type: text
    props: { type: text, x: 450, y: 108, content: "action metric", fill: "$foreground", fontSize: 18, fontWeight: 700, textAnchor: middle, opacity: 0 }
  actionNote:
    id: actionNote
    type: text
    props: { type: text, x: 450, y: 136, content: "what they did next", fill: "$muted", fontSize: 14, textAnchor: middle, opacity: 0 }
  qualityBox:
    id: qualityBox
    type: rect
    props: { type: rect, x: 650, y: 72, width: 180, height: 86, rx: 12, fill: "$surface", stroke: "$success", strokeWidth: 2, opacity: 0 }
  qualityText:
    id: qualityText
    type: text
    props: { type: text, x: 740, y: 108, content: "quality signal", fill: "$foreground", fontSize: 18, fontWeight: 700, textAnchor: middle, opacity: 0 }
  qualityNote:
    id: qualityNote
    type: text
    props: { type: text, x: 740, y: 136, content: "whether it helped", fill: "$muted", fontSize: 14, textAnchor: middle, opacity: 0 }
  a1:
    id: a1
    type: line
    props: { type: line, x1: 250, y1: 115, x2: 360, y2: 115, stroke: "$accent", strokeWidth: 2, endCap: arrow, opacity: 0 }
  a2:
    id: a2
    type: line
    props: { type: line, x1: 540, y1: 115, x2: 650, y2: 115, stroke: "$accent", strokeWidth: 2, endCap: arrow, opacity: 0 }
  correctionLine1:
    id: correctionLine1
    type: line
    props: { type: line, x1: 740, y1: 158, x2: 740, y2: 216, stroke: "$muted", strokeWidth: 2, opacity: 0 }
  correctionLine2:
    id: correctionLine2
    type: line
    props: { type: line, x1: 740, y1: 216, x2: 160, y2: 216, stroke: "$muted", strokeWidth: 2, opacity: 0 }
  correctionLine3:
    id: correctionLine3
    type: line
    props: { type: line, x1: 160, y1: 216, x2: 160, y2: 158, stroke: "$muted", strokeWidth: 2, endCap: arrow, opacity: 0 }
  correctionText:
    id: correctionText
    type: text
    props: { type: text, x: 450, y: 206, content: "use judgment, then correct the next pass", fill: "$muted", fontSize: 14, textAnchor: middle, opacity: 0 }
timelines:
  measurementLoop:
    id: measurementLoop
    duration: 230
    tracks:
      - { target: peopleBox, property: opacity, keyframes: [ { frame: 0, value: 0 }, { frame: 12, value: 1, easing: easeOutCubic } ] }
      - { target: peopleText, property: opacity, keyframes: [ { frame: 4, value: 0 }, { frame: 16, value: 1, easing: easeOutCubic } ] }
      - { target: peopleNote, property: opacity, keyframes: [ { frame: 8, value: 0 }, { frame: 20, value: 1, easing: easeOutCubic } ] }
      - { target: a1, property: opacity, keyframes: [ { frame: 36, value: 0 }, { frame: 48, value: 1, easing: easeOutCubic } ] }
      - { target: actionBox, property: opacity, keyframes: [ { frame: 54, value: 0 }, { frame: 66, value: 1, easing: easeOutCubic } ] }
      - { target: actionText, property: opacity, keyframes: [ { frame: 58, value: 0 }, { frame: 70, value: 1, easing: easeOutCubic } ] }
      - { target: actionNote, property: opacity, keyframes: [ { frame: 62, value: 0 }, { frame: 74, value: 1, easing: easeOutCubic } ] }
      - { target: a2, property: opacity, keyframes: [ { frame: 90, value: 0 }, { frame: 102, value: 1, easing: easeOutCubic } ] }
      - { target: qualityBox, property: opacity, keyframes: [ { frame: 108, value: 0 }, { frame: 120, value: 1, easing: easeOutCubic } ] }
      - { target: qualityText, property: opacity, keyframes: [ { frame: 112, value: 0 }, { frame: 124, value: 1, easing: easeOutCubic } ] }
      - { target: qualityNote, property: opacity, keyframes: [ { frame: 116, value: 0 }, { frame: 128, value: 1, easing: easeOutCubic } ] }
      - { target: correctionLine1, property: opacity, keyframes: [ { frame: 144, value: 0 }, { frame: 156, value: 1, easing: easeOutCubic } ] }
      - { target: correctionLine2, property: opacity, keyframes: [ { frame: 152, value: 0 }, { frame: 164, value: 1, easing: easeOutCubic } ] }
      - { target: correctionLine3, property: opacity, keyframes: [ { frame: 160, value: 0 }, { frame: 172, value: 1, easing: easeOutCubic } ] }
      - { target: correctionText, property: opacity, keyframes: [ { frame: 170, value: 0 }, { frame: 184, value: 1, easing: easeOutCubic } ] }
stateMachines:
  main:
    id: main
    entry: play
    states:
      play: { timeline: measurementLoop }
    transitions:
      - { id: entry-play, from: entry, to: play, trigger: onStart }
      - { id: play-loop, from: play, to: entry, exitTime: 1 }
defaultStateMachine: main
```

*Reach starts the measurement story. Action and quality decide whether the work changed anything.*

People Metrics without Action Metrics can become vanity. Action Metrics without a Quality Signal can reward shallow behavior. Quality Signals without reach can hide work that helps only a tiny group.

<AntiPattern title="Measuring what is easiest to count">
If the dashboard only shows reach, the team can mistake attention for progress. Count the action, then inspect the value of the action.
</AntiPattern>

Engagement Ratio is the bridge between the first two.

> Engagement Ratio = actions driven / audience reached

You can also say it this way.

> Engagement Ratio = Action Metric / People Metric

If 500 developers watch a video and 50 click through to the sample, the ratio is 0.1. If 100 people attend a workshop and 120 tracked actions happen across forks, deployments, feedback forms, or signups, the ratio is 1.2.

A ratio of 1 means each person who showed up took one action on average.

The discipline behind the number matters more than the number. The team has to name the intended action before the asset ships and pair the result with a Quality Signal.

Actionable feedback is one of the strongest Quality Signals. It is feedback specific enough to change product, docs, content, samples, positioning, or community programming.

## Name the action

Every DevRel asset answers two questions before it goes live.

1. What action are we asking developers to take?
2. How will we know they took it?

The action can be small or large. Click a link. Fork a repo. Install a package. Deploy a sample. Register for a workshop. Give feedback. Join a community. Try a feature. File an issue. Contribute a fix.

Different assets ask for different actions. A keynote may ask for curiosity. A setup guide may ask for a successful install. A workshop may ask for completion. A sample may ask for a fork, a deploy, or a product trial.

The measure matches the intended action.

## Theory, action, measurement, correction

Measurement is part of the operating loop, not a report at the end.

| Step | Question |
| --- | --- |
| Theory | What do we believe this work will help developers do? |
| Action | What will we ship, run, teach, or change? |
| Measurement | Who did we reach, what did they do, and what did we learn? |
| Correction | What should change in the content, technology, community motion, or intended action? |

This keeps DevRel from staying right in theory for too long. The team gets an idea into the field, measures the developer behavior it caused, and corrects the next pass.

## Measure the loop

Measurement tells the team whether the operating loop is turning.

For Create Content, ask whether the content inspired or unblocked a known audience. For Refine Technology, ask whether the work exposed product truth and led to a better path. For Grow Community, ask whether the moment created trust, signal, or participation.

Good measurement connects activity to learning and learning to action.

Content measurement should match the job the content was hired to do. Inspirational content may look for saves, shares, comments, return visits, or clicks to the next step. Unblocking content may look for successful setup, completed tasks, issue resolution, sample usage, or reduced support friction.

## Beware false precision

Some of the most important DevRel outcomes are hard to measure cleanly.

Trust matters. Technical credibility counts. A better product decision caused by field signal is a win. So is a developer who succeeds because a sample finally works.

Name the action. Track it. Pair it with quality. Then use judgment.
