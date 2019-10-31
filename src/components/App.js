import React, { useState } from 'react';
import { hot } from 'react-hot-loader';

const Warning = React.lazy(() => import('./Warning'));

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Hello World</h1>
      <h2 className={counter >= 10 ? 'warning' : null}>Count: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      {counter >= 10 ? (
        <React.Suspense fallback={null}>
          <Warning />
        </React.Suspense>
      ) : null}
    </div>
  );
};

export default hot(module)(App);
