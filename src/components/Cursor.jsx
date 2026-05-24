import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) {
      setDisabled(true);
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const xDot = gsap.quickTo(dot, 'x', { duration: 0.01, ease: 'power3.out' });
    const yDot = gsap.quickTo(dot, 'y', { duration: 0.01, ease: 'power3.out' });
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.4, ease: 'power3.out' });
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.4, ease: 'power3.out' });

    let firstMove = true;

    const onMove = (e) => {
      if (firstMove) {
        gsap.set([dot, ring], { x: e.clientX, y: e.clientY });
        setVisible(true);
        firstMove = false;
      }
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const onOver = (e) => {
      const target = e.target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="hover"]'
      );
      setHovering(!!target);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => {
      firstMove = true;
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  if (disabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full transition-all duration-300 ease-out"
        style={{
          width: hovering ? '12px' : '6px',
          height: hovering ? '12px' : '6px',
          background: '#3B82F6',
          boxShadow: '0 0 16px rgba(59,130,246,0.8), 0 0 32px rgba(59,130,246,0.4)',
          transform: 'translate(-50%, -50%)',
          opacity: visible ? 1 : 0,
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border transition-all duration-300 ease-out"
        style={{
          width: hovering ? '56px' : '36px',
          height: hovering ? '56px' : '36px',
          borderColor: hovering ? 'rgba(96,165,250,0.8)' : 'rgba(59,130,246,0.4)',
          borderWidth: '1.5px',
          background: hovering
            ? 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)'
            : 'transparent',
          transform: 'translate(-50%, -50%)',
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}