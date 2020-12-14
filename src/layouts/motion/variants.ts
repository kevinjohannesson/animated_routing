export const variants = {
  hidden: {
    opacity: 0,
    transition: {
      // delay: 1,
      // delayChildren: 1,
      // staggerChildren: 1.1,
      // staggerDirection: -1,
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      // duration: 2,
      // staggerChildren: 1.1,
      // staggerDirection: -1,
      when: "beforeChildren",
    },
  },
};

export const basicVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
