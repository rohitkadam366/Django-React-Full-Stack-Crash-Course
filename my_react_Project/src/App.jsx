import HelloWorld from './components/HelloWorld';
import LearnReact from './components/LearnReact';
import LearnJsx from './components/LearnJsx';
import LearnProps from './components/LearnProps';
import EventLearn from './components/EventLearn';
import LearnLiftingStateUp from './components/LearnLiftingStateUp';
import UseState from "./components/useState"
import UseEffect from "./components/useEffect"
import UseMemo from "./components/useMemo"

// Prop
import ChildC from './components/ChildC';
import ChildA from './components/ChildA';
import ChildB from './components/ChildB';

import { createContext } from 'react';


const StockContext = createContext();



function App() {
  let price = 20

  const getStock = () => {
    console.log("Tesla")
  }

  // props arguments
  const name = "Rohit";
  const age = 25;
  const city = "Pune";

  // Context API = create, provider and consumer
  


  return (
    <>
      <h1>Welcome to my React Project</h1>
      <HelloWorld />
      <LearnReact />
      <LearnJsx />
      <LearnProps name="Rohit" price = {price}/>
      <EventLearn />
      <LearnLiftingStateUp getStock={getStock} />
      <UseState />
      <UseEffect />
      <UseMemo />
      <h1>Props Example</h1>
      <ChildA name={name} age={age} city={city} />

      <h1>Context API Example</h1>
      <StockContext.Provider value={{ name, age, city }}>
        <ChildA />
      </StockContext.Provider>
    </> 
  );
} 

export default App;
export {StockContext};
