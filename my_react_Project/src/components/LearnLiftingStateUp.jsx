const LearnLiftingStateUp = ({getStock}) => {
  const handleClick = () => {
    getStock();
  };

  return (
    <>
      <h2>Learn Lifting State Up</h2>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}; 

export default LearnLiftingStateUp;