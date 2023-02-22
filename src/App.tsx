import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Onboarding from "./pages/Onboarding";
//@ts-ignore
const OnboardingLayout = lazy(() => import('host/OnboardingLayout'));

const App = () => (
  <Suspense fallback={<h1>loading</h1>}>
    <OnboardingLayout onboarding={<Onboarding />} />
  </Suspense>

);
ReactDOM.render(<App />, document.getElementById("app"));
