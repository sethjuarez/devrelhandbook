---
title: DevRel is a business function
sidebar_label: Opening argument
slug: /
---

:::note Living handbook
This is a working field guide. The ideas will sharpen as the practice changes and as better examples emerge.
:::

Developer Relations has a reputation for being squishy.

That reputation is understandable. DevRel work often shows up as talks, docs, demos, community conversations, feedback threads, samples, videos, events, and hallway conversations. From the outside it can look like a grab bag of helpful activity. From the inside it can feel hard to explain because the work touches product, engineering, marketing, support, sales, and community without belonging neatly to any one of them.

This handbook starts from a different premise. DevRel is a structured business function.

DevRel helps an organization understand developers, improve the technology those developers use, and create the conditions for a healthy developer ecosystem. The work can be creative, relational, and hard to reduce to a single metric. The operating model still needs clarity.

The purpose of this handbook is to name that operating model.

## The core thesis

DevRel turns developer signal into business action.

```elucim
version: "2.0"
scene:
  type: player
  fps: 30
  width: 900
  height: 320
  background: transparent
  children: [signalBox, signalText, signalNote, contentBox, contentText, techBox, techText, communityBox, communityText, actionBox, actionText, actionNote, arrowSignalContent, arrowSignalTech, arrowSignalCommunity, arrowContentAction, arrowTechAction, arrowCommunityAction, loopDown, loopAcross, loopUp, loopText]
elements:
  signalBox:
    id: signalBox
    type: rect
    props: { type: rect, x: 40, y: 96, width: 170, height: 86, rx: 12, fill: "$surface", stroke: "$accent", strokeWidth: 2, opacity: 0 }
  signalText:
    id: signalText
    type: text
    props: { type: text, x: 125, y: 132, content: "developer signal", fill: "$foreground", fontSize: 18, fontWeight: 700, textAnchor: middle, opacity: 0 }
  signalNote:
    id: signalNote
    type: text
    props: { type: text, x: 125, y: 160, content: "questions, friction, trust", fill: "$muted", fontSize: 14, textAnchor: middle, opacity: 0 }
  contentBox:
    id: contentBox
    type: rect
    props: { type: rect, x: 330, y: 40, width: 170, height: 64, rx: 10, fill: "$surface", stroke: "$primary", strokeWidth: 2, opacity: 0 }
  contentText:
    id: contentText
    type: text
    props: { type: text, x: 415, y: 78, content: "create content", fill: "$foreground", fontSize: 16, textAnchor: middle, opacity: 0 }
  techBox:
    id: techBox
    type: rect
    props: { type: rect, x: 330, y: 128, width: 170, height: 64, rx: 10, fill: "$surface", stroke: "$success", strokeWidth: 2, opacity: 0 }
  techText:
    id: techText
    type: text
    props: { type: text, x: 415, y: 166, content: "refine technology", fill: "$foreground", fontSize: 16, textAnchor: middle, opacity: 0 }
  communityBox:
    id: communityBox
    type: rect
    props: { type: rect, x: 330, y: 216, width: 170, height: 64, rx: 10, fill: "$surface", stroke: "$warning", strokeWidth: 2, opacity: 0 }
  communityText:
    id: communityText
    type: text
    props: { type: text, x: 415, y: 254, content: "grow community", fill: "$foreground", fontSize: 16, textAnchor: middle, opacity: 0 }
  actionBox:
    id: actionBox
    type: rect
    props: { type: rect, x: 690, y: 96, width: 170, height: 86, rx: 12, fill: "$surface", stroke: "$accent", strokeWidth: 2, opacity: 0 }
  actionText:
    id: actionText
    type: text
    props: { type: text, x: 775, y: 132, content: "business action", fill: "$foreground", fontSize: 18, fontWeight: 700, textAnchor: middle, opacity: 0 }
  actionNote:
    id: actionNote
    type: text
    props: { type: text, x: 775, y: 160, content: "better outcomes", fill: "$muted", fontSize: 14, textAnchor: middle, opacity: 0 }
  arrowSignalContent:
    id: arrowSignalContent
    type: line
    props: { type: line, x1: 210, y1: 126, x2: 330, y2: 72, stroke: "$accent", strokeWidth: 2, endCap: arrow, opacity: 0 }
  arrowSignalTech:
    id: arrowSignalTech
    type: line
    props: { type: line, x1: 210, y1: 139, x2: 330, y2: 160, stroke: "$accent", strokeWidth: 2, endCap: arrow, opacity: 0 }
  arrowSignalCommunity:
    id: arrowSignalCommunity
    type: line
    props: { type: line, x1: 210, y1: 154, x2: 330, y2: 248, stroke: "$accent", strokeWidth: 2, endCap: arrow, opacity: 0 }
  arrowContentAction:
    id: arrowContentAction
    type: line
    props: { type: line, x1: 500, y1: 72, x2: 690, y2: 126, stroke: "$accent", strokeWidth: 2, endCap: arrow, opacity: 0 }
  arrowTechAction:
    id: arrowTechAction
    type: line
    props: { type: line, x1: 500, y1: 160, x2: 690, y2: 139, stroke: "$accent", strokeWidth: 2, endCap: arrow, opacity: 0 }
  arrowCommunityAction:
    id: arrowCommunityAction
    type: line
    props: { type: line, x1: 500, y1: 248, x2: 690, y2: 154, stroke: "$accent", strokeWidth: 2, endCap: arrow, opacity: 0 }
  loopDown:
    id: loopDown
    type: line
    props: { type: line, x1: 775, y1: 182, x2: 775, y2: 296, stroke: "$muted", strokeWidth: 2, opacity: 0 }
  loopAcross:
    id: loopAcross
    type: line
    props: { type: line, x1: 775, y1: 296, x2: 125, y2: 296, stroke: "$muted", strokeWidth: 2, opacity: 0 }
  loopUp:
    id: loopUp
    type: line
    props: { type: line, x1: 125, y1: 296, x2: 125, y2: 182, stroke: "$muted", strokeWidth: 2, endCap: arrow, opacity: 0 }
  loopText:
    id: loopText
    type: text
    props: { type: text, x: 450, y: 314, content: "action creates the next signal", fill: "$muted", fontSize: 14, textAnchor: middle, opacity: 0 }
timelines:
  buildLoop:
    id: buildLoop
    duration: 270
    tracks:
      - { target: signalBox, property: opacity, keyframes: [ { frame: 0, value: 0 }, { frame: 12, value: 1, easing: easeOutCubic } ] }
      - { target: signalText, property: opacity, keyframes: [ { frame: 4, value: 0 }, { frame: 16, value: 1, easing: easeOutCubic } ] }
      - { target: signalNote, property: opacity, keyframes: [ { frame: 8, value: 0 }, { frame: 20, value: 1, easing: easeOutCubic } ] }
      - { target: arrowSignalContent, property: opacity, keyframes: [ { frame: 28, value: 0 }, { frame: 40, value: 1, easing: easeOutCubic } ] }
      - { target: arrowSignalTech, property: opacity, keyframes: [ { frame: 34, value: 0 }, { frame: 46, value: 1, easing: easeOutCubic } ] }
      - { target: arrowSignalCommunity, property: opacity, keyframes: [ { frame: 40, value: 0 }, { frame: 52, value: 1, easing: easeOutCubic } ] }
      - { target: contentBox, property: opacity, keyframes: [ { frame: 48, value: 0 }, { frame: 60, value: 1, easing: easeOutCubic } ] }
      - { target: contentText, property: opacity, keyframes: [ { frame: 52, value: 0 }, { frame: 64, value: 1, easing: easeOutCubic } ] }
      - { target: techBox, property: opacity, keyframes: [ { frame: 60, value: 0 }, { frame: 72, value: 1, easing: easeOutCubic } ] }
      - { target: techText, property: opacity, keyframes: [ { frame: 64, value: 0 }, { frame: 76, value: 1, easing: easeOutCubic } ] }
      - { target: communityBox, property: opacity, keyframes: [ { frame: 72, value: 0 }, { frame: 84, value: 1, easing: easeOutCubic } ] }
      - { target: communityText, property: opacity, keyframes: [ { frame: 76, value: 0 }, { frame: 88, value: 1, easing: easeOutCubic } ] }
      - { target: arrowContentAction, property: opacity, keyframes: [ { frame: 98, value: 0 }, { frame: 110, value: 1, easing: easeOutCubic } ] }
      - { target: arrowTechAction, property: opacity, keyframes: [ { frame: 104, value: 0 }, { frame: 116, value: 1, easing: easeOutCubic } ] }
      - { target: arrowCommunityAction, property: opacity, keyframes: [ { frame: 110, value: 0 }, { frame: 122, value: 1, easing: easeOutCubic } ] }
      - { target: actionBox, property: opacity, keyframes: [ { frame: 128, value: 0 }, { frame: 140, value: 1, easing: easeOutCubic } ] }
      - { target: actionText, property: opacity, keyframes: [ { frame: 132, value: 0 }, { frame: 144, value: 1, easing: easeOutCubic } ] }
      - { target: actionNote, property: opacity, keyframes: [ { frame: 136, value: 0 }, { frame: 148, value: 1, easing: easeOutCubic } ] }
      - { target: loopDown, property: opacity, keyframes: [ { frame: 164, value: 0 }, { frame: 176, value: 1, easing: easeOutCubic } ] }
      - { target: loopAcross, property: opacity, keyframes: [ { frame: 172, value: 0 }, { frame: 184, value: 1, easing: easeOutCubic } ] }
      - { target: loopUp, property: opacity, keyframes: [ { frame: 180, value: 0 }, { frame: 192, value: 1, easing: easeOutCubic } ] }
      - { target: loopText, property: opacity, keyframes: [ { frame: 188, value: 0 }, { frame: 202, value: 1, easing: easeOutCubic } ] }
stateMachines:
  main:
    id: main
    entry: play
    states:
      play: { timeline: buildLoop }
    transitions:
      - { id: entry-play, from: entry, to: play, trigger: onStart }
      - { id: play-loop, from: play, to: entry, exitTime: 1 }
defaultStateMachine: main
```

*DevRel is a loop. Field signal becomes work the business can act on, and that action produces the next signal.*

Signal comes from the field. It is what developers are trying to build, where they get stuck, what they misunderstand, what they love, what they distrust, and what they need next. Business action is what the organization does with that signal. Clearer content. Better product decisions. Stronger communities. Sharper positioning. Healthier feedback loops. More useful technology.

When DevRel works, the organization learns faster and developers succeed sooner.

The rest of the book follows that thread.

## Who this is for

This handbook is for people who already have a DevRel practice, people who are building one, and people who keep asking why the work matters.

It is especially for teams that build technology for developers. If developers need to understand your platform, trust your roadmap, give you feedback, join your community, or bet part of their own work on your tools, then DevRel is not decoration. It is part of how the business learns and earns trust.

The questions this book tries to answer are practical.

1. What business purpose does DevRel serve?
2. What work should DevRel teams do, and what should they avoid?
3. How does DevRel create content, refine technology, and grow community?
4. How should the work be measured?
5. How should a DevRel team be structured so the practice can scale?

## About Me

I have worked in DevRel for more than a decade. First as a Technical Evangelist, then as a Program Manager, and now as a Developer Advocate. My background is in computer science and machine learning, but I have also taught in high school and college settings.

That intersection of technology and teaching is what drew me to DevRel. Developers want to solve real problems and create value for the people who use their work. The best DevRel teams respect that ambition. They help developers move faster while helping the organization build technology worth adopting.

:::note Disclaimer
These are my thoughts. They may or may not represent the views of my current or previous employers.
:::

## The shape of the book

The handbook is organized like a field guide. Read it front to back if you are designing a DevRel practice from scratch, or jump to the chapter that matches the problem in front of you.

| Part | What it answers | Chapters |
| --- | --- | --- |
| Foundations | Why DevRel exists and what principles make the work coherent. | Business Purpose, Creating a Mission, Working from Principles |
| The operating loop | What DevRel teams do week after week. | Create Content, Refine Technology, Grow Community |
| Making it run | How the practice proves value and scales. | Measuring Success, Structuring the Team |
| Authoring tools | How this handbook is written and extended. | Authoring Diagrams, Handbook Components |

The operating loop gives the book five recurring jobs.

1. Create content that helps developers understand and act.
2. Refine technology by bringing field signal back into the product.
3. Grow community through trust, contribution, and shared learning.
4. Measure success by connecting activity to developer and business outcomes.
5. Structure the team so the work is repeatable instead of heroic.

## Start with why

Before deciding what to publish or which events to sponsor, decide what business purpose DevRel serves.

Once that answer is clear, the rest of the work has a place to stand.
