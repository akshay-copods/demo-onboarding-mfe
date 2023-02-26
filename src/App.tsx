import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import { QueryClient, QueryClientProvider } from 'react-query';
import "./index.scss";
import Onboarding from "./pages/Onboarding";

//@ts-ignore
const OnboardingLayout = lazy(() => import('host/OnboardingLayout'));
const queryClient = new QueryClient()

const App = () => (
  <Suspense fallback={<h1>loading</h1>}>
    <QueryClientProvider client={queryClient}>
      <OnboardingLayout onboarding={<Onboarding />} />
    </QueryClientProvider>
  </Suspense>

);
ReactDOM.render(<App />, document.getElementById("app"));
