import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.995 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.36 } },
};

export const cardHover = {
  rest: { y: 0, scale: 1, boxShadow: "0 6px 18px rgba(2,6,23,0.06)" },
  hover: {
    y: -6,
    scale: 1.01,
    boxShadow: "0 18px 40px rgba(2,6,23,0.12)",
    transition: { duration: 0.28 },
  },
};
