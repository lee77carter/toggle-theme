import "./styles.css";
import { useState, useEffect } from "react";

const App = () => {
  const [theme, setTheme] = useState(
    JSON.parse(window.localStorage.getItem("theme")) || "light"
  );

  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);


return (
  <div className={`App ${theme}`}>
    <div className="wrapper">
      <button 
       onClick={(e) => 
        theme === "dark" ? setTheme("light") : setTheme("dark")
      }
      
      >
        Toggle theme
        </button>
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
