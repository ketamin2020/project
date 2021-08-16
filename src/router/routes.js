import { lazy } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/",
    label: "Sprints",
    exact: true,
    component: lazy(() =>
      import(
        "../views/SprintsView/SprintsView" /* webpackChunkName: "Sprint" */
      )
    ),
    private: true,
    restricted: false,
  },
];
