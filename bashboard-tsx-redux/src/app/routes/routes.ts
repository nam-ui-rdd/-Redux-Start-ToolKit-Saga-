import { Suspense, lazy, LazyExoticComponent, Component } from 'react';
import { RouteObject } from "react-router-dom";
import SuspenseLoader from "../../_start/layout/components/SuspenseLoader";

const Loader = (Component: LazyExoticComponent<() => JSX.Element>) => (props: any) => (
    <Suspense fallback={<SuspenseLoader />}> <Component {...props} /> </Suspense>
  );

const Overview = Loader(lazy(() => import('../pages/public/Overview')));

export const mainRoutes: RouteObject = {
    path: "/",
    children: [
        { path: "/", element:  },
    ],
};