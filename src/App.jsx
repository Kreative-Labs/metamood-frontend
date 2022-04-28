import { DataVis } from "./components/DataVis";
import { Space } from "./components/Space";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([
    {
      name: "Valence",
      value: 0.5,
    },
    {
      name: "Arousal",
      value: 0.5,
    },
  ]);
  const [mood, setMood] = useState("Neutral");
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://127.0.0.1:5000/mood");
      console.log(data);
      const valence = JSON.parse(data.data)[0];
      const dominance = JSON.parse(data.data)[1];
      const arousal = JSON.parse(data.data)[2];
      let mood;
      if (valence < 0.5 && arousal < 0.5) mood = "Depressed / Bored / Tired";
      else if (valence >= 0.5 && arousal < 0.5) mood = "Calm / Relaxed";
      else if (valence < 0.5 && arousal > 0.5)
        mood = "Angry / Tensed / Frustated";
      else if (valence >= 0.5 && arousal >= 0.5)
        mood = "Happy / Excited / Delighted";
      else mood = "Netural";
      setData([
        {
          name: "Valence",
          value: valence,
        },
        {
          name: "Arousal",
          value: arousal,
        },
        // {
        //   name: "Dominance",
        //   value: dominance,
        // },
      ]);
      setMood(mood);
    };
    getData();
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#392C5D",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Space />
      <h1
        style={{
          color: "white",
          fontFamily: "'Press Start 2P'",
          padding: "32px 0",
          marginBottom: "64px",
        }}
      >
        Meta Mood
      </h1>
      <DataVis data={data} />
      <h3 style={{ color: "white", fontFamily: "'Press Start 2P'" }}>{mood}</h3>
    </div>
  );
}

export default App;
