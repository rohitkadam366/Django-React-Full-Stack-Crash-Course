// useMemo is another important React Hook, especially for performance optimization.

// useMemo is a React Hook that caches (memorizes) the result of an expensive calculation so it doesn't run again unless its dependencies change.

// Simple Definition = useMemo stores a calculated value and reuses it until its dependencies change.

// When should you use useMemo?
// Use useMemo when:
// You have an expensive calculation.
// That calculation doesn't need to run on every render.
// You want to optimize performance.
// Don't use it for simple calculations like count + 1, because the overhead of useMemo may not be worth it.

// | Normal Function                  | `useMemo`                                       |
// | -------------------------------- | ----------------------------------------------- |
// | Runs on every render             | Runs only when dependencies change              |
// | No caching                       | Caches the result                               |
// | Can be slower for expensive work | Improves performance for expensive calculations |





import {useState, useMemo} from 'react';

const UseMemo = () => {
    const [count, setCount] = useState(0);
    
    const expensiveValue = useMemo(() => {
        console.log("Calculating expensive value...UseMemo Component Rendered = ");
        // Simulate an expensive calculation
        return count * 2;
    }, [count]);

    return (
        <div>
            <h1>Count: {count}</h1>
            <p>Expensive Value: {expensiveValue}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};

export default UseMemo;



// const increment = () => {
//     setCount(count + 1);
// };

// <button onClick={increment}>
//     Increment
// </button>





