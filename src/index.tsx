import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import GlobalStyles from './UI/GlobalStyles';
import ErrorFallback from './Utils/ErrorFallback';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => window.location.replace("/")}
    >
    <GlobalStyles/>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
