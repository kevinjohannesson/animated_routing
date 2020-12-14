import { AnimatePresence } from "framer-motion";
import React, { useRef } from "react";
import { BrowserRouter as Router,  Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BarLayout from "./layouts/Bar";
import FooLayout from "./layouts/Foo";
import { LayoutName } from "./layouts/types";

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

interface Endpoints {
    url: string,
    component: () => JSX.Element,
    layout: LayoutName,
}

export default function App() {

  const currentRouteRef = useRef<string | undefined>();
  const targetRouteRef = useRef<string | undefined>();
  
  return (
    <Router>
      <div className="wrapper">
        <Route
          render={({ location }) => {
            
            targetRouteRef.current = location.pathname;
            
            return (
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
      </div>
    </Router>
  );
}

function Foo() {
  return <h2>Foo</h2>;
}

function Bar() {
  return <h2>Bar</h2>;
}

function Baz() {
  return <h2>Baz</h2>;
}
