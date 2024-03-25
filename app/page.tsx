import { Suspense, lazy } from 'react';
const CalculatorComponent = lazy(() => import('./components/Calculator'));

export default function Home() {
  return (
    <main className={"main"}>
      <Suspense fallback={<div>Loading...</div>}>
        <CalculatorComponent />
      </Suspense>
    </main>
  );
}
