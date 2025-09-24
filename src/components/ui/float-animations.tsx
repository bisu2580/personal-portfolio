import { cubicBezier } from "framer-motion";

export const floatVariants = {
  float1: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: cubicBezier(0.42, 0, 0.58, 1),
    },
  },
  float2: {
    y: [0, 10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: cubicBezier(0.42, 0, 0.58, 1),
    },
  },
  float3: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: cubicBezier(0.42, 0, 0.58, 1),
    },
  },
  float4: {
    y: [0, 15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: cubicBezier(0.42, 0, 0.58, 1),
    },
  },
  float5: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: cubicBezier(0.42, 0, 0.58, 1),
    },
  },
};
