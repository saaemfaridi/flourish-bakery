'use client';
import { LazyMotion, domAnimation } from 'framer-motion';

export default function LazyMotionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
