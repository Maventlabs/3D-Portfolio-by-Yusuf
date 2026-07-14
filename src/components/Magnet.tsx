import { useRef, useState, type ReactNode } from 'react';

type MagnetProps = {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function Magnet({
  children,
  padding = 100,
  strength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
  style,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0)');
  const [transition, setTransition] = useState(inactiveTransition);
  const activeRef = useRef(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = Math.abs(e.clientX - centerX);
    const distY = Math.abs(e.clientY - centerY);

    const withinX = distX < rect.width / 2 + padding;
    const withinY = distY < rect.height / 2 + padding;

    if (withinX && withinY) {
      if (!activeRef.current) {
        activeRef.current = true;
        setTransition(activeTransition);
      }
      const moveX = (e.clientX - centerX) / strength;
      const moveY = (e.clientY - centerY) / strength;
      setTransform(`translate3d(${moveX}px, ${moveY}px, 0)`);
    } else {
      if (activeRef.current) {
        activeRef.current = false;
        setTransition(inactiveTransition);
        setTransform('translate3d(0px, 0px, 0)');
      }
    }
  };

  const handleMouseLeave = () => {
    activeRef.current = false;
    setTransition(inactiveTransition);
    setTransform('translate3d(0px, 0px, 0)');
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform,
        transition,
        willChange: 'transform',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
