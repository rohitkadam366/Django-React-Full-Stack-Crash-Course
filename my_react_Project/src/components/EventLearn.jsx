const EventLearn = () => {
  const handleClick = (e) => {
    console.log("Button clicked!", e);
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <br />

    </div>
  );
};



export default EventLearn;
