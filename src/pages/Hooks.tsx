import { useMemo, useState } from "react";
import SimpleParagraph from "../components/text-components/SimpleParagraph";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [black, setBlack] = useState(false);

  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...');
    let result = Math.floor(Math.random() * 1000001);
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
    // eslint-disable-next-line
  }, [count]);

  const hookStyle = {
    backgroundColor : black ? 'black' : 'white',
    color : black ? 'white' : 'black'
  }
  return (
    <div className='use-memo' style={hookStyle}>
      <SimpleParagraph text="This component has to perform a slow calculation when it increments."/>
      <SimpleParagraph text="As such, you will notice the theme change is a little slow"/>
      <SimpleParagraph text="However, because the increment function is using the useMemo hook, solely changing the theme of the div will not perform that calculation as it is
      not in the dependency array."/>
      <p>Count: {count}</p>
      <button onClick={() => {
        setCount((prevCount) => prevCount + 1)
        setBlack((prevBlack) => !prevBlack)
      }}>Increment Count</button>
      <p>Expensive Calculation Result: {expensiveCalculation}</p>
      <button onClick={() => setBlack((prevBlack) => !prevBlack)}>Change Theme</button>
    </div>
  );
}

export default Hooks;