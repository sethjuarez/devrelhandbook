---
title: Authoring diagrams and scenes
sidebar_label: Authoring diagrams
---

The handbook supports diagrams and animated scenes directly in Markdown. Authors can stay in prose-first `.md` and `.mdx` files without importing React components for every visual.

## Mermaid diagrams

Use a fenced `mermaid` block for flowcharts, sequence diagrams, and other static diagrams.

```mermaid
flowchart LR
  content[Create content] --> signal[Learn from developers]
  signal --> technology[Refine technology]
  technology --> community[Grow community]
  community --> content
```

## Elucim scenes

Use a fenced `elucim` block for YAML-authored scenes. YAML is the default authoring format because it keeps scenes readable inside chapters.

```elucim
version: '2.0'
scene:
  type: scene
  width: 960
  height: 420
  children:
    - title
    - content
    - technology
    - community
elements:
  title:
    id: title
    type: text
    props:
      x: 72
      y: 78
      text: DevRel turns signal into action
      fontSize: 38
      fill: $text
  content:
    id: content
    type: rect
    props:
      x: 88
      y: 170
      width: 200
      height: 104
      rx: 20
      fill: $accent
  technology:
    id: technology
    type: rect
    props:
      x: 380
      y: 170
      width: 200
      height: 104
      rx: 20
      fill: $success
  community:
    id: community
    type: rect
    props:
      x: 672
      y: 170
      width: 200
      height: 104
      rx: 20
      fill: $warning
```

If the scene YAML is invalid, the page renders a visible error card with the parser message and the original scene source so the author can fix it in place.
