---
title: Handbook components
sidebar_label: Handbook components
---

Reusable components help chapters feel like a practical field guide while keeping authoring Markdown-first. These components are available in every MDX page without imports.

## Principle

<Principle title="Name the job before naming the tactic">
DevRel work is easier to prioritize when every activity points back to the business and developer job it serves.
</Principle>

```mdx
<Principle title="Name the job before naming the tactic">
DevRel work is easier to prioritize when every activity points back to the business and developer job it serves.
</Principle>
```

## Practice

<Practice title="Turn field notes into reusable assets">
After a launch, collect repeated developer questions and convert them into docs, samples, talks, or product feedback.
</Practice>

```mdx
<Practice title="Turn field notes into reusable assets">
After a launch, collect repeated developer questions and convert them into docs, samples, talks, or product feedback.
</Practice>
```

## Example

<Example title="A useful signal loop">
A workshop reveals that setup takes too long. The DevRel team writes a clearer quickstart, files product friction, and measures whether future attendees finish faster.
</Example>

```mdx
<Example title="A useful signal loop">
A workshop reveals that setup takes too long. The DevRel team writes a clearer quickstart, files product friction, and measures whether future attendees finish faster.
</Example>
```

## Checklist

<Checklist
  title="Before publishing a chapter"
  items={[
    'The page has one clear thesis.',
    'Examples are concrete enough to reuse.',
    'The next action is obvious.',
  ]}
/>

```mdx
<Checklist
  title="Before publishing a chapter"
  items={[
    'The page has one clear thesis.',
    'Examples are concrete enough to reuse.',
    'The next action is obvious.',
  ]}
/>
```

## Anti-pattern

<AntiPattern title="Counting motion instead of impact">
Publishing more posts, talks, or events is not automatically progress. Measure whether the work changed developer understanding, product quality, community health, or business outcomes.
</AntiPattern>

```mdx
<AntiPattern title="Counting motion instead of impact">
Publishing more posts, talks, or events is not automatically progress.
</AntiPattern>
```

## Framework

<Framework
  title="DevRel operating loop"
  steps={[
    {label: 'Listen', description: 'Capture developer needs, objections, and repeated friction.'},
    {label: 'Translate', description: 'Turn signal into content, product feedback, and community action.'},
    {label: 'Measure', description: 'Check whether the work improved outcomes that matter.'},
  ]}
/>

```mdx
<Framework
  title="DevRel operating loop"
  steps={[
    {label: 'Listen', description: 'Capture developer needs, objections, and repeated friction.'},
    {label: 'Translate', description: 'Turn signal into content, product feedback, and community action.'},
    {label: 'Measure', description: 'Check whether the work improved outcomes that matter.'},
  ]}
/>
```

## Reflection prompt

<ReflectionPrompt question="What developer behavior should change after this chapter?">
Write the answer before drafting the page. If the behavior is unclear, the chapter probably needs a sharper thesis.
</ReflectionPrompt>

```mdx
<ReflectionPrompt question="What developer behavior should change after this chapter?">
Write the answer before drafting the page.
</ReflectionPrompt>
```
