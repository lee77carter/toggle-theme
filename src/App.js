import "./styles.css";
import { useState, useEffect } from "react";

const App = () => {
  return (
    <div className={`App`}>
      <div className="wrapper">
        <button>Toggle theme</button>
        <p>
          <span className="accent">Fiona the flamingo loved to travel.</span>{" "}
          She flew over mountains, deserts, and oceans, making new friends along
          the way. When she returned home, she had amazing stories to share and
          was ready for her next adventure. But alas, she had not learned to
          code, so her story was nowhere near as inpiring as it could have been.
        </p>
      </div>
    </div>
  );
};

export default App;
