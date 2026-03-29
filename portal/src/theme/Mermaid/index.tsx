import React, {type ReactNode} from 'react';
import Mermaid from '@theme-original/Mermaid';
import type MermaidType from '@theme/Mermaid';
import type {WrapperProps} from '@docusaurus/types';
import {TransformWrapper, TransformComponent} from 'react-zoom-pan-pinch';

type Props = WrapperProps<typeof MermaidType>;

const controlStyle: React.CSSProperties = {
  display: 'flex',
  gap: '4px',
  marginBottom: '6px',
  justifyContent: 'flex-end',
};

const btnStyle: React.CSSProperties = {
  padding: '2px 10px',
  fontSize: '16px',
  lineHeight: '1.4',
  cursor: 'pointer',
  border: '1px solid var(--ifm-color-emphasis-300)',
  borderRadius: '4px',
  background: 'var(--ifm-background-surface-color)',
  color: 'var(--ifm-color-content)',
  userSelect: 'none',
};

export default function MermaidWrapper(props: Props): ReactNode {
  return (
    <div style={{border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '8px', padding: '12px', marginBottom: '16px'}}>
      <TransformWrapper
        initialScale={1}
        minScale={0.3}
        maxScale={4}
        wheel={{step: 0.1}}
        doubleClick={{mode: 'reset'}}
      >
        {({zoomIn, zoomOut, resetTransform}) => (
          <>
            <div style={controlStyle}>
              <button style={btnStyle} onClick={() => zoomIn()} title="Zoom in">+</button>
              <button style={btnStyle} onClick={() => zoomOut()} title="Zoom out">−</button>
              <button style={btnStyle} onClick={() => resetTransform()} title="Reset zoom">⟳</button>
            </div>
            <TransformComponent
              wrapperStyle={{width: '100%', overflow: 'hidden', cursor: 'grab'}}
              contentStyle={{width: '100%'}}
            >
              <Mermaid {...props} />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
