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
