// What are Props?
// Props (Properties) are used to pass data from a Parent Component to a Child Component.
// Think of props like function arguments.
// Parent → Sends data
// Child → Receives data


import ChildB from './ChildB';

const ChildA = (props) => {
    return (
        <div>
            <h1>Child A Component</h1>
            <ChildB name={props.name} age={props.age} city={props.city} />
        </div>
    );
}   

export default ChildA;






// What is Context API?
// Context API is a React feature that allows you to share data globally among components.
// Examples of global data:
// Logged-in user
// Theme (Dark/Light)
// Language
// Shopping cart
// Authentication token



// How Context API Works

// It has 3 steps:

// Step 1: Create Context
// import { createContext } from "react";

// const UserContext = createContext();

// Here, we create a context object.

// Step 2: Provide the Context
// <UserContext.Provider value={name}>
//     <ChildA />
// </UserContext.Provider>

// The Provider shares the value with all child components.

// Step 3: Consume the Context
// import { useContext } from "react";

// const name = useContext(UserContext);

