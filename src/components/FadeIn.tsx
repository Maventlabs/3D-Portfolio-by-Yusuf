import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?:
    | 'div'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'p'
    | 'span'
    | 'section'
    | 'article'
    | 'nav'
    | 'ul'
    | 'li'
    | 'img'
    | 'a';
} & Omit<HTMLMotionProps<'div'>, 'children'>;

const EASING = [0.25, 0.1, 0.25, 1] as const;

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  ...rest
}: FadeInProps) {
  const Component = motion.create(as) as typeof motion.div;

  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: EASING }}
      {...rest}
    >
      {children}
    </Component>
  );
}
