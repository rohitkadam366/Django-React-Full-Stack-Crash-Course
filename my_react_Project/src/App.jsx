import HelloWorld from './components/HelloWorld';
import LearnReact from './components/LearnReact';
import LearnJsx from './components/LearnJsx';
import LearnProps from './components/LearnProps';
import EventLearn from './components/EventLearn';
import LearnLiftingStateUp from './components/LearnLiftingStateUp';
import UseState from "./components/useState"


function App() {
  let price = 20

  const getStock = () => {
    console.log("Tesla")
  }

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
    </>
  );
} 

export default App;
