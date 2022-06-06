import "./styles.css";
import React from "react";

const CounterContext = React.createContext({});

const CounterButton = () => {
  const useCounterContext = React.useContext(CounterContext);
  const { incrementCount } = useCounterContext;
  return <button onClick={incrementCount}>Count</button>;
};
export default function App() {
  const [counter, setCounter] = React.useState(0);
  const handleSetCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <CounterContext.Provider value={{ incrementCount: handleSetCounter }}>
      <h1>{counter}</h1>
      <CounterButton />
    </CounterContext.Provider>
  );
}
