import React, {type ReactNode, useState, useEffect, useCallback} from 'react';
import Mermaid from '@theme-original/Mermaid';
import type MermaidType from '@theme/Mermaid';
import type {WrapperProps} from '@docusaurus/types';
import {TransformWrapper, TransformComponent} from 'react-zoom-pan-pinch';

type Props = WrapperProps<typeof MermaidType>;

const ZOOM_BTN: React.CSSProperties = {
  width: '42px',
  height: '42px',
  fontSize: '20px',
  cursor: 'pointer',
  border: '1px solid rgba(255,255,255,0.2)',
  borderRadius: '8px',
  background: 'rgba(15,15,25,0.75)',
  color: '#fff',
  backdropFilter: 'blur(6px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

export default function MermaidWrapper(props: Props): ReactNode {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  return (
    <>
      {/* ── Inline scrollable preview ─────────────────────────────── */}
      <div style={{
        position: 'relative',
        border: '1px solid var(--ifm-color-emphasis-300)',
        borderRadius: '10px',
        marginBottom: '20px',
        background: 'var(--ifm-background-surface-color)',
        overflow: 'hidden',
      }}>
        {/* Top bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 14px',
          background: 'var(--ifm-color-emphasis-100)',
          borderBottom: '1px solid var(--ifm-color-emphasis-200)',
        }}>
          <span style={{fontSize: '12px', fontFamily: 'var(--ifm-font-family-monospace)', color: 'var(--ifm-color-content-secondary)'}}>
            diagram · scroll to explore
          </span>
          <button
            onClick={() => setOpen(true)}
            title="Open full-screen diagram"
            style={{
              padding: '5px 16px',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              border: 'none',
              borderRadius: '6px',
              background: 'var(--ifm-color-primary)',
              color: '#fff',
              letterSpacing: '0.01em',
            }}
          >
            Open Full Diagram [ ]
          </button>
        </div>

        {/* Scrollable diagram — renders at natural SVG size */}
        <div style={{overflow: 'auto', padding: '24px', minHeight: '260px', maxHeight: '520px', background: 'var(--ifm-background-color)'}}>
          <div style={{display: 'inline-block', minWidth: 'max-content'}}>
            <Mermaid {...props} />
          </div>
        </div>

        {/* Bottom fade hint */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '56px',
          background: 'linear-gradient(transparent, var(--ifm-background-surface-color))',
          pointerEvents: 'none',
        }} />
      </div>

      {/* ── Fullscreen modal ─────────────────────────────────────── */}
      {open && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(8,8,16,0.93)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 20px',
            background: 'var(--ifm-navbar-background-color)',
            borderBottom: '1px solid var(--ifm-color-emphasis-300)',
            flexShrink: 0,
          }}>
            <span style={{fontSize: '14px', fontWeight: 600, color: 'var(--ifm-color-content)'}}>
              Architecture Diagram
            </span>
            <div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
              <span style={{fontSize: '12px', color: 'var(--ifm-color-content-secondary)'}}>
                Scroll · Drag · Double-click to reset
              </span>
              <button
                onClick={close}
                title="Close (Esc)"
                style={{
                  padding: '4px 14px',
                  fontSize: '18px',
                  lineHeight: 1,
                  cursor: 'pointer',
                  border: '1px solid var(--ifm-color-emphasis-400)',
                  borderRadius: '6px',
                  background: 'transparent',
                  color: 'var(--ifm-color-content)',
                }}
              >
                X
              </button>
            </div>
          </div>

          {/* Zoom/pan canvas */}
          <div style={{flex: 1, overflow: 'hidden', position: 'relative'}}>
            <TransformWrapper
              initialScale={0.75}
              minScale={0.08}
              maxScale={8}
              wheel={{step: 0.07}}
              doubleClick={{mode: 'reset'}}
              centerOnInit
            >
              {({zoomIn, zoomOut, resetTransform}) => (
                <>
                  {/* Floating controls */}
                  <div style={{
                    position: 'absolute',
                    bottom: '24px',
                    right: '24px',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}>
                    {[
                      {label: '+', fn: () => zoomIn(0.25), title: 'Zoom in'},
                      {label: '-', fn: () => zoomOut(0.25), title: 'Zoom out'},
                      {label: 'R', fn: () => resetTransform(), title: 'Reset view'},
                    ].map(({label, fn, title}) => (
                      <button key={title} onClick={fn} title={title} style={ZOOM_BTN}>
                        {label}
                      </button>
                    ))}
                  </div>

                  <TransformComponent
                    wrapperStyle={{width: '100%', height: '100%', cursor: 'grab'}}
                    contentStyle={{padding: '60px'}}
                  >
                    <div style={{display: 'inline-block', minWidth: 'max-content'}}>
                      <Mermaid {...props} />
                    </div>
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
          </div>
        </div>
      )}
    </>
  );
}
