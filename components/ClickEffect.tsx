'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './ClickEffect.module.css';

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

const RIPPLE_DURATION = 600;

export default function ClickEffect() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const nextId = useRef(0);

  const removeRipple = useCallback((id: number) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  }, []);

  const handleClick = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    const newRipple: Ripple = {
      id: nextId.current++,
      x: clientX,
      y: clientY,
      size: 50,
    };

    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => removeRipple(newRipple.id), RIPPLE_DURATION);
  }, [removeRipple]);

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [handleClick]);

  return (
    <div className={styles.container}>
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className={styles.ripple}
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: `${ripple.size}px`,
            height: `${ripple.size}px`,
          }}
        />
      ))}
    </div>
  );
}
