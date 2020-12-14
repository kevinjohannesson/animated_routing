import { motion } from "framer-motion";
import React, { ReactElement } from "react";
// import { BrowserRouter } from "react-router-dom";

import BaseLayout from "../Base";

import { AnimationProps } from "../Base/index";
import { basicVariants } from "../motion/variants";
interface Props extends AnimationProps {
  children: React.ReactNode;
}

export default function BarLayout({ children, ...props }: Props): ReactElement {
  console.log("Bar()");
  const { animateIn, animateOut } = props;
  console.log({animateIn})
  console.log({animateOut})

  const parentIsAnimated = animateIn || animateOut

  const animationProps = {
    initial: 'hidden',
    animate: 'visible',
    exit: 'hidden',
  };
  
  return (
    <BaseLayout name="bar" className="bar" {...props}>
      <div className="navbar">some other static object</div>
      <motion.div
        // initial={ animateIn || animateOut ? undefined : 'hidden'}
        // animate={ animateIn || animateOut ? undefined : 'visible'}
        // exit={ animateOut || animateIn ? undefined : 'hidden' }

        // initial={ animateIn || animateOut ? undefined : 'hidden'}
        // animate={ animateIn || animateOut ? undefined : 'visible'}
        // exit={ animateOut || animateIn ? undefined : 'hidden' }

        { ...( parentIsAnimated ? {} : animationProps ) }

        // exit={undefined}

        // initial="hidden"
        // animate="visible"
        // exit="hidden"


        // initial={!animateIn ? 'hidden' : undefined }
        // animate={!animateIn ? 'visible' : undefined }
        // exit={ animateOut ? {} : 'hidden'}
        // exit={ 'hidden'}

        
        // initial={!animateIn ? 'hidden' : 'visible' }
        // animate={!animateIn ? 'visible' : 'visible' }
        // exit="hidden"

        // initial={ !props.animateIn ? 'hidden' : {}}
        // animate={ !props.animateIn ? 'visible' : {}}
        // exit={ !props.animateIn ? {} : 'hidden'}
        
        variants={basicVariants}
        // key={Math.random()}
        // transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </BaseLayout>
  );
}
// import { motion } from "framer-motion";
// import React, { ReactElement, useEffect } from "react";
// import { variants } from "../motion/variants";
// import { transition } from "../motion/transitions";

// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../store";
// import { LayoutName, set } from "../../store/layout";
// import { useLocation } from "react-router-dom";
// import { LocationState } from "../types";
// import { Link } from "react-router-dom";

// interface Props {
//   children: React.ReactNode;
// }

// const layoutName: LayoutName = "bar";

// export default function BarLayout({ children }: Props): ReactElement {
//   // const dispatch = useDispatch();
//   const location = useLocation<LocationState>();
//   console.log('BarLayout fromLayout: ', location.state.fromLayout);
//   console.log('BarLayout toLayout: ', location.state.toLayout);

//   const { toLayout, fromLayout } = location.state;

//   // useEffect(()=>{
//   //   // console.log('BarLayout UseEffect fromLayout: ', location.state.fromLayout);
//   //   // location.state.fromLayout = 'bar';

//   //   // return ()=>{
//   //   //   console.log('BarLayout cleanup: ', location.state.fromLayout)
//   //   // }
//   // }, [ location ])

//   return (
//     <motion.div
//       className="layout bar"
//       // initial={fromLayout !== "bar" ? 'hidden' : {}}
//       // initial="hidden"
//       initial={fromLayout === "bar" && toLayout=== 'bar' ? {} : 'hidden'}
//       animate="visible"
//       // exit={fromLayout !== "bar" ? 'hidden' : {}}
//       // exit="hidden"
//       exit={fromLayout === "bar" && toLayout=== 'bar' ? {} : 'hidden'}
//       variants={variants}
//       transition={transition}
//     >
//       {children}

//       <Link
//         to={{
//           pathname: "/foo",
//           state: { fromLayout: "bar", toLayout: 'foo' },
//         }}
//       >
//         Foo
//       </Link>

//       <Link
//         to={{
//           pathname: "/bar",
//           state: { fromLayout: "bar", toLayout: 'bar' },
//         }}
//       >
//         Bar
//       </Link>
//       <Link
//         to={{
//           pathname: "/baz",
//           state: { fromLayout: "bar", toLayout: 'bar' },
//         }}
//       >
//         Baz
//       </Link>
//     </motion.div>
//   );
// }
