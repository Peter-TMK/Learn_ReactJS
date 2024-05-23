import { useEffect, useState } from "react";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    // console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount(() => count + 1);
  };

  useEffect(() => getAdvice, []);
  return (
    <div>
      <b>Your daily advice</b>
      <br />
      <br />
      <div>{advice}</div>
      <button onClick={getAdvice}>Enter</button>
      <p>You have seek for {count} advice</p>
    </div>
  );
};

export default App;
