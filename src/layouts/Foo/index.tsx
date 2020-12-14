import React, { ReactElement } from "react";

import BaseLayout from "../Base";
import { AnimationProps } from "../Base/index";

interface Props extends AnimationProps {
  children: React.ReactNode;
}

export default function FooLayout(props: Props): ReactElement {
  return <BaseLayout name="foo" className="foo" {...props} />;
}

// {/* <Link
//         to={{
//           pathname: "/foo",
//           state: { fromLayout: "foo", toLayout: 'foo' },
//         }}
//         >
//         Foo
//       </Link>

//       <Link
//         to={{
//           pathname: "/bar",
//           state: { fromLayout: "foo", toLayout: 'bar' },
//         }}
//         >
//         Bar
//       </Link>
//       <Link
//         to={{
//           pathname: "/baz",
//           state: { fromLayout: "foo", toLayout: 'bar' },
//         }}
//         >
//         Baz
//       </Link> */}
//     // </BaseLayout>
