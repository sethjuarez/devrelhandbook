import React from 'react';
import styles from './styles.module.css';

const variants = {
  Principle: {
    label: 'Principle',
    tone: 'principle',
  },
  Practice: {
    label: 'Practice',
    tone: 'practice',
  },
  Example: {
    label: 'Example',
    tone: 'example',
  },
  AntiPattern: {
    label: 'Anti-pattern',
    tone: 'antiPattern',
  },
};

function Block({kind, title, children}) {
  const headingId = React.useId();
  const variant = variants[kind];

  return (
    <section
      className={`${styles.block} ${styles[variant.tone]}`}
      aria-labelledby={headingId}>
      <p className={styles.eyebrow}>{variant.label}</p>
      <h3 id={headingId}>{title}</h3>
      <div className={styles.body}>{children}</div>
    </section>
  );
}

export function Principle({title, children}) {
  return <Block kind="Principle" title={title}>{children}</Block>;
}

export function Practice({title, children}) {
  return <Block kind="Practice" title={title}>{children}</Block>;
}

export function Example({title, children}) {
  return <Block kind="Example" title={title}>{children}</Block>;
}

export function AntiPattern({title, children}) {
  return <Block kind="AntiPattern" title={title}>{children}</Block>;
}

export function Checklist({title = 'Checklist', items = [], children}) {
  const headingId = React.useId();

  return (
    <section className={`${styles.block} ${styles.checklist}`} aria-labelledby={headingId}>
      <p className={styles.eyebrow}>Checklist</p>
      <h3 id={headingId}>{title}</h3>
      {items.length > 0 && (
        <ul className={styles.checkItems}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {children && <div className={styles.body}>{children}</div>}
    </section>
  );
}

export function Framework({title, steps = [], children}) {
  const headingId = React.useId();

  return (
    <section className={`${styles.block} ${styles.framework}`} aria-labelledby={headingId}>
      <p className={styles.eyebrow}>Framework</p>
      <h3 id={headingId}>{title}</h3>
      {children && <div className={styles.body}>{children}</div>}
      {steps.length > 0 && (
        <ol className={styles.steps}>
          {steps.map((step) => (
            <li key={step.label}>
              <strong>{step.label}</strong>
              {step.description && <span>{step.description}</span>}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

export function ReflectionPrompt({question, children}) {
  const headingId = React.useId();

  return (
    <aside className={`${styles.block} ${styles.reflection}`} aria-labelledby={headingId}>
      <p className={styles.eyebrow}>Reflection prompt</p>
      <h3 id={headingId}>{question}</h3>
      {children && <div className={styles.body}>{children}</div>}
    </aside>
  );
}
