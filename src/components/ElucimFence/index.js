import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {fromYaml} from '@elucim/dsl';
import {DslRenderer} from '@elucim/dsl/react';
import styles from './styles.module.css';

class ElucimErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {error: null};
  }

  static getDerivedStateFromError(error) {
    return {error};
  }

  render() {
    if (this.state.error) {
      return <ElucimError message={this.state.error.message} source={this.props.source} />;
    }

    return this.props.children;
  }
}

function ElucimError({message, source}) {
  return (
    <figure className={styles.error} role="alert" aria-label="Elucim scene error">
      <figcaption>Elucim scene could not render</figcaption>
      <pre>{message}</pre>
      <details>
        <summary>Scene source</summary>
        <pre>{source}</pre>
      </details>
    </figure>
  );
}

function ElucimScene({source}) {
  let document;

  try {
    document = fromYaml(source);
  } catch (error) {
    return <ElucimError message={error.message} source={source} />;
  }

  return (
    <ElucimErrorBoundary source={source}>
      <figure className={styles.scene}>
        <DslRenderer
          dsl={document}
          colorScheme="auto"
          controls={false}
          fitToContainer
        />
      </figure>
    </ElucimErrorBoundary>
  );
}

export default function ElucimFence({source}) {
  return (
    <BrowserOnly fallback={<div className={styles.loading}>Loading Elucim scene...</div>}>
      {() => <ElucimScene source={source} />}
    </BrowserOnly>
  );
}
