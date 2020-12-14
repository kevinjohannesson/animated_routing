import { HTMLMotionProps, motion } from "framer-motion";
import React, { ReactElement } from "react";
import { variants } from "../motion/variants";
// import { transition } from "../motion/transitions";

import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  name: string;

  animateIn: boolean;
  animateOut: boolean;
}

export interface AnimationProps {
  animateIn: boolean;
  animateOut: boolean;
}

type AllProps = AnimationProps & Props & HTMLMotionProps<"div">;
export default function BaseLayout({ className, animateIn, animateOut, children }: AllProps): ReactElement {
  return (
    <motion.div
      className={"layout " + className}
      initial={animateIn ? "hidden" : {}}
      animate="visible"
      exit={animateOut ? "hidden" : {}}
      variants={variants}
      // transition={transition}
    >
      {children}

      <Link to="/foo">Foo</Link>
      <Link to="/bar">Bar</Link>
      <Link to="/baz">Baz</Link>
    </motion.div>
  );
}
