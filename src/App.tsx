import { AnimatePresence } from "framer-motion";
import React, { useRef } from "react";
import { BrowserRouter as Router,  Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BarLayout from "./layouts/Bar";
import FooLayout from "./layouts/Foo";

// import { createMemoryHistory } from 'history';
// import { ConnectedRouter } from "connected-react-router";
// import { history } from "./store";

const fooLayoutEndpoints = [
  {
    url: "/foo",
    component: Foo,
  },
];
const barLayoutEndpoints = [
  {
    url: "/bar",
    component: Bar,
  },
  {
    url: "/baz",
    component: Baz,
  },
];

export default function App() {
  // console.log("App()");

  const currentRouteRef = useRef<string | undefined>();

  const targetRouteRef = useRef<string | undefined>();

  // useselector(getlayoutview)
  // const history = createMemoryHistory();
  return (
    // <ConnectedRouter history={history}>
    <Router>
      <div className="wrapper">
        <Route
          render={({ location }) => {
            // console.log("route render");
            // console.log(location.pathname);
            targetRouteRef.current = location.pathname;
            // const targetLocation = location;
            return (
              // <AnimatePresence initial={true} >
              <AnimatePresence initial={true} exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route
                    exact
                    path={fooLayoutEndpoints.map((endpoint) => endpoint.url)}
                    render={() => {
                      const currentRoute = currentRouteRef.current;
                      const targetRoute = targetRouteRef.current;
                      const shouldAnimateIn = !fooLayoutEndpoints.some((endpoint) => endpoint.url === currentRoute);
                      const shouldAnimateOut = !fooLayoutEndpoints.some((endpoint) => endpoint.url === targetRoute);
                      currentRouteRef.current = location.pathname;
                      return (
                        <Switch>
                          <FooLayout animateIn={shouldAnimateIn} animateOut={shouldAnimateOut}>
                            {fooLayoutEndpoints.map((endpoint) => (
                              <Route exact path={endpoint.url} component={endpoint.component} key={endpoint.url} />
                            ))}
                          </FooLayout>
                        </Switch>
                      );
                    }}
                  />

                  <Route
                    exact
                    path={barLayoutEndpoints.map((endpoint) => endpoint.url)}
                    render={() => {
                      const currentRoute = currentRouteRef.current;
                      const targetRoute = targetRouteRef.current;
                      const shouldAnimateIn = !barLayoutEndpoints.some((endpoint) => endpoint.url === currentRoute);
                      const shouldAnimateOut = !barLayoutEndpoints.some((endpoint) => endpoint.url === targetRoute);
                      currentRouteRef.current = location.pathname;
                      return (
                        <Switch>
                          {/* <BarLayout animateIn={true} animateOut={true}> */}
                          <BarLayout animateIn={shouldAnimateIn} animateOut={shouldAnimateOut}>
                            {barLayoutEndpoints.map((endpoint) => (
                              <Route exact path={endpoint.url} component={endpoint.component} key={endpoint.url} />
                            ))}
                          </BarLayout>
                        </Switch>
                      );
                    }}
                  />
                </Switch>
              </AnimatePresence>
            );
          }}
        />

        {/* <Route
          render={({ location }) => (
            <AnimatePresence initial={true} exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path={["/foo"]}>
                  <Switch >
                    <FooLayout>
                      <Route exact path="/foo" component={Foo} />
                    </FooLayout>
                  </Switch>
                </Route>

                <Route exact path={["/bar", "/baz"]}>
                  <Switch>
                    <BarLayout>
                      <Route exact path="/bar" component={Bar} />
                      <Route exact path="/baz" component={Baz} />
                    </BarLayout>
                  </Switch>
                </Route>
              </Switch>
            </AnimatePresence>
          )}
        /> */}
      </div>
    {/* </ConnectedRouter> */}
    </Router>
  );
}

// function Navigation() {
//   return (
//     <nav>
//       <ul>
//         <li>layout foo</li>
//         <li>
//           <Link
//             to={{
//               pathname: "/foo",
//               state: { fromLayout: "foo" },
//             }}
//           >
//             Foo
//           </Link>
//         </li>
//         <li>layout bar</li>
//         <li>
//           <Link
//             to={{
//               pathname: "/bar",
//               state: { fromLayout: "bar" },
//             }}
//           >
//             Bar
//           </Link>
//         </li>
//         <li>
//           <Link
//             to={{
//               pathname: "/baz",
//               state: { fromLayout: "bar" },
//             }}
//           >
//             Baz
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

function Foo() {
  return <h2>Foo</h2>;
}

function Bar() {
  return <h2>Bar</h2>;
}

function Baz() {
  return <h2>Baz</h2>;
}
